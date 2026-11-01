import EditableProfilePhoto from '@/components/EditableProfilePhoto';
import { MEMBER_THEMES } from '@/lib/contributionTheme';
import type { ContributionFocus, MemberContribution, TeamMember } from '@/types/portfolio';

export interface ContributionRow {
  entry: MemberContribution;
  member: TeamMember;
}

interface ContributionFlowProps {
  projectTitle: string;
  rows: ContributionRow[];
  activeMemberId: string | null;
  onSelect: (memberId: string) => void;
  isDimmed: (focus: ContributionFocus) => boolean;
}

export default function ContributionFlow({ projectTitle, rows, activeMemberId, onSelect, isDimmed }: ContributionFlowProps) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-sky-50 via-white to-teal-50 p-6 ring-1 ring-slate-200 sm:p-8 dark:from-sky-500/10 dark:via-night-card dark:to-teal-500/10 dark:ring-slate-700">
      <div className="mx-auto w-fit rounded-2xl bg-white px-6 py-3 text-center shadow-md ring-1 ring-sky-200 dark:bg-night dark:ring-sky-500/40">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">Project</p>
        <p className="text-lg font-bold text-slate-900 dark:text-white">{projectTitle}</p>
      </div>
      <div aria-hidden="true" className="mx-auto h-8 w-px bg-gradient-to-b from-sky-400 to-teal-400" />

      <div className="relative grid gap-6 md:grid-cols-3">
        <div
          aria-hidden="true"
          className="absolute left-[16.66%] right-[16.66%] top-0 hidden h-px bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400 md:block"
        />
        {rows.map(({ entry, member }) => {
          const theme = MEMBER_THEMES[member.id];
          const isActive = activeMemberId === member.id;
          return (
            <div
              key={member.id}
              className={`flex flex-col items-center transition duration-300 ${isDimmed(entry.focus) ? 'opacity-40' : 'opacity-100'}`}
            >
              <div aria-hidden="true" className="h-6 w-px bg-slate-300 dark:bg-slate-600" />
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => onSelect(member.id)}
                className={`w-full rounded-2xl bg-white p-5 text-left ring-1 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg motion-reduce:hover:translate-y-0 dark:bg-night-card ${
                  isActive ? `ring-2 shadow-xl ${theme.ring}` : 'ring-slate-200 dark:ring-slate-700'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="pointer-events-none shrink-0">
                    <EditableProfilePhoto
                      photo={member.avatar}
                      imageClassName="h-14 w-14 rounded-full bg-white ring-2 ring-white dark:ring-night-card"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 dark:text-white">{member.name}</p>
                    <p className={`text-xs font-semibold ${theme.text}`}>{entry.responsibility}</p>
                  </div>
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {entry.technologies.map((tech) => (
                    <li key={tech} className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${theme.badge}`}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
