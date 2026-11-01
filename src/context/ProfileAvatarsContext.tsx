import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { AVATAR_PRESETS } from '@/data/avatarPresets';
import { supabase } from '@/lib/supabase';
import type { ProfileKey } from '@/types/portfolio';

const PROFILE_KEYS: ProfileKey[] = ['individual', 'team-aarav', 'team-priya', 'team-rohan'];

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

export function ProfileAvatarsProvider({ children }: { children: ReactNode }) {
  const [overrides, setOverrides] = useState<AvatarOverrides>({});

  useEffect(() => {
    if (!supabase) return;
    let isActive = true;

    (async () => {
      const { data, error } = await supabase
        .from('profile_avatars')
        .select('profile_key, avatar_index');
      if (!isActive || error || !Array.isArray(data)) return;

      const loaded: AvatarOverrides = {};
      for (const row of data) {
        if (isProfileKey(row?.profile_key) && isValidAvatarIndex(row?.avatar_index)) {
          loaded[row.profile_key] = row.avatar_index;
        }
      }
      setOverrides(loaded);
    })();

    return () => {
      isActive = false;
    };
  }, []);

  const getAvatarIndex = useCallback(
    (profileKey: ProfileKey, fallbackIndex: number) => overrides[profileKey] ?? fallbackIndex,
    [overrides],
  );

  const saveAvatarIndex = useCallback(
    async (profileKey: ProfileKey, avatarIndex: number) => {
      if (!supabase) throw new Error('Photo changes are not available right now.');

      const previousIndex = overrides[profileKey];
      setOverrides((current) => ({ ...current, [profileKey]: avatarIndex }));

      const { error } = await supabase.from('profile_avatars').upsert(
        {
          profile_key: profileKey,
          avatar_index: avatarIndex,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'profile_key' },
      );

      if (error) {
        setOverrides((current) => ({ ...current, [profileKey]: previousIndex }));
        throw new Error('We could not save your photo. Please try again.');
      }
    },
    [overrides],
  );

  const value = useMemo(() => ({ getAvatarIndex, saveAvatarIndex }), [getAvatarIndex, saveAvatarIndex]);

  return <ProfileAvatarsContext.Provider value={value}>{children}</ProfileAvatarsContext.Provider>;
}

export function useProfileAvatars(): ProfileAvatarsContextValue {
  const context = useContext(ProfileAvatarsContext);
  if (!context) throw new Error('useProfileAvatars must be used within ProfileAvatarsProvider');
  return context;
}
