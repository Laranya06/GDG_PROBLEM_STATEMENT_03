import { ArrowRight } from 'lucide-react';
import { MEMBER_THEMES } from '@/lib/contributionTheme';
import type { RecruiterContribution } from '@/lib/recruiterSummary';

interface RecruiterContributionsProps {
  rows: RecruiterContribution[];
  onViewMember?: (slug: string) => void;
}

export default function RecruiterContributions({ rows, onViewMember }: RecruiterContributionsProps) {
  if (rows.length === 0) return null;

  return (
    <section>
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Team Contributions at a Glance</h3>
      <ul className={`mt-4 grid gap-3 ${rows.length > 1 ? 'md:grid-cols-3' : ''}`}>
        {rows.map((row) => {
          const theme = MEMBER_THEMES[row.memberId];
          return (
            <li key={row.memberId} className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 dark:bg-white/5 dark:ring-slate-700">
              <div aria-hidden="true" className={`h-1 bg-gradient-to-r ${theme.gradient}`} />
              <div className="p-4">
                <p className="text-sm font-bold text-slate-900 dark:text-white">{row.name}</p>
                <ul className="mt-3 space-y-2">
                  {row.projects.map((item) => (
                    <li key={item.title} className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                      <span className="font-semibold text-slate-900 dark:text-white">{item.title}</span>
                      <span className="text-slate-400"> · </span>
                      <span>{item.responsibility}</span>
                    </li>
                  ))}
                </ul>
                {onViewMember && (
                  <button
                    type="button"
                    onClick={() => onViewMember(row.slug)}
                    className={`group mt-4 inline-flex items-center gap-1.5 text-xs font-semibold ${theme.text} hover:underline underline-offset-4`}
                  >
                    View profile
                    <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
