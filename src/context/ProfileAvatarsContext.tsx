import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { AVATAR_PRESETS } from '@/data/avatarPresets';
import { supabase } from '@/lib/supabase';
import type { ProfileKey } from '@/types/portfolio';

const PROFILE_KEYS: ProfileKey[] = ['individual', 'team-aarav', 'team-priya', 'team-rohan'];
const STORAGE_KEY = 'builtsphere-profile-avatars';
type AvatarOverrides = Partial<Record<ProfileKey, number>>;

interface ProfileAvatarsContextValue {
  getAvatarIndex: (profileKey: ProfileKey, fallbackIndex: number) => number;
  saveAvatarIndex: (profileKey: ProfileKey, avatarIndex: number) => Promise<void>;
}

const ProfileAvatarsContext = createContext<ProfileAvatarsContextValue | null>(null);

function isProfileKey(value: unknown): value is ProfileKey {
  return typeof value === 'string' && PROFILE_KEYS.includes(value as ProfileKey);
}
function isValidAvatarIndex(value: unknown): value is number {
  return typeof value === 'number' && Number.isInteger(value) && value >= 0 && value < AVATAR_PRESETS.length;
}
function readSavedAvatars(): AvatarOverrides {
  if (typeof window === 'undefined') return {};
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '{}');
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
    const saved = parsed as Record<string, unknown>;
    const safe: AvatarOverrides = {};
    for (const key of PROFILE_KEYS) {
      if (isValidAvatarIndex(saved[key])) safe[key] = saved[key];
    }
    return safe;
  } catch {
    return {};
  }
}

export function ProfileAvatarsProvider({ children }: { children: ReactNode }) {
  const [overrides, setOverrides] = useState<AvatarOverrides>(readSavedAvatars);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
    } catch {
      // Browsers may block local storage; avatar changes still work for this session.
    }
  }, [overrides]);

  useEffect(() => {
    if (!supabase) return;
    let active = true;
    (async () => {
      const { data, error } = await supabase.from('profile_avatars').select('profile_key, avatar_index');
      if (!active || error || !Array.isArray(data)) return;
      const remote: AvatarOverrides = {};
      for (const row of data) {
        if (isProfileKey(row?.profile_key) && isValidAvatarIndex(row?.avatar_index)) {
          remote[row.profile_key] = row.avatar_index;
        }
      }
      // A browser's own explicit avatar selections take priority over remote defaults.
      setOverrides((current) => ({ ...remote, ...current }));
    })().catch(() => { /* Optional remote sync must not break local avatar selection. */ });
    return () => { active = false; };
  }, []);

  const getAvatarIndex = useCallback(
    (profileKey: ProfileKey, fallbackIndex: number) => overrides[profileKey] ?? fallbackIndex,
    [overrides],
  );

  const saveAvatarIndex = useCallback(async (profileKey: ProfileKey, avatarIndex: number) => {
    if (!isProfileKey(profileKey) || !isValidAvatarIndex(avatarIndex)) {
      throw new Error('Invalid avatar selection.');
    }
    // Instant local update, regardless of whether Supabase has been configured on Netlify.
    setOverrides((current) => ({ ...current, [profileKey]: avatarIndex }));
    if (supabase) {
      try {
        const { error } = await supabase.from('profile_avatars').upsert(
          { profile_key: profileKey, avatar_index: avatarIndex, updated_at: new Date().toISOString() },
          { onConflict: 'profile_key' },
        );
        if (error) console.warn('Avatar saved locally; remote sync was unavailable.');
      } catch {
        console.warn('Avatar saved locally; remote sync was unavailable.');
      }
    }
  }, []);

  const value = useMemo(() => ({ getAvatarIndex, saveAvatarIndex }), [getAvatarIndex, saveAvatarIndex]);
  return <ProfileAvatarsContext.Provider value={value}>{children}</ProfileAvatarsContext.Provider>;
}

export function useProfileAvatars(): ProfileAvatarsContextValue {
  const context = useContext(ProfileAvatarsContext);
  if (!context) throw new Error('useProfileAvatars must be used within ProfileAvatarsProvider');
  return context;
}
