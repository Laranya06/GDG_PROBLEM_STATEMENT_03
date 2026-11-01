import { ArrowRight, MapPin, Sparkles, Users } from 'lucide-react';
import { useProfileAvatars } from '@/context/ProfileAvatarsContext';
import { AVATAR_PRESETS } from '@/data/avatarPresets';
import { ACCENT_STYLES } from '@/lib/palette';
import type { RecruiterSummary } from '@/lib/recruiterSummary';
import type { ProfilePhoto } from '@/types/portfolio';

interface RecruiterProfileHeaderProps {
  summary: RecruiterSummary;
  onViewMember: (slug: string) => void;
}

function Avatar({ photo, className }: { photo: ProfilePhoto; className: string }) {
  const { getAvatarIndex } = useProfileAvatars();
  const index = getAvatarIndex(photo.profileKey, photo.defaultAvatarIndex);
  const preset = AVATAR_PRESETS[index] ?? AVATAR_PRESETS[photo.defaultAvatarIndex];
  return <img src={preset.src} alt={photo.alt} width={96} height={96} decoding="async" className={`object-cover ${className}`} />;
}

export default function RecruiterProfileHeader({ summary, onViewMember }: RecruiterProfileHeaderProps) {
  const accent = ACCENT_STYLES[summary.accent];
  const isTeam = summary.kind === 'team';

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        {isTeam ? (
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-teal-400 text-white shadow-lg shadow-sky-500/25">
            <Users aria-hidden="true" className="h-9 w-9" />
          </div>
        ) : (
          summary.avatars[0] && (
            <Avatar
              photo={summary.avatars[0]}
              className="h-20 w-20 shrink-0 rounded-full bg-white ring-4 ring-white shadow-lg dark:ring-night-card"
            />
          )
        )}
        <div className="min-w-0">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{summary.name}</h3>
          <p className={`mt-1 text-sm font-semibold ${accent.text}`}>{summary.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{summary.quickSummary}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            <li className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/30">
              <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
              {summary.availability}
            </li>
            {summary.location && (
              <li className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-white/5 dark:text-slate-200 dark:ring-slate-700">
                <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
                {summary.location}
              </li>
            )}
          </ul>
        </div>
      </div>

      {isTeam && (
        <ul className="grid gap-3 sm:grid-cols-3">
          {summary.members.map((member) => (
            <li
              key={member.id}
              className="flex flex-col gap-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200 dark:bg-white/5 dark:ring-slate-700"
            >
              <div className="flex items-center gap-3">
                <Avatar photo={member.avatar} className="h-12 w-12 shrink-0 rounded-full ring-2 ring-white dark:ring-night-card" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-slate-900 dark:text-white">{member.name}</p>
                  <p className={`truncate text-xs font-semibold ${ACCENT_STYLES[member.accent].text}`}>{member.role}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onViewMember(member.slug)}
                className="btn-secondary w-full px-3 py-2 text-xs"
              >
                View Member Profile
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
