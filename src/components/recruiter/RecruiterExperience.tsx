import type { ExperienceEntry } from '@/types/portfolio';

interface RecruiterExperienceProps {
  entries: ExperienceEntry[];
}

export default function RecruiterExperience({ entries }: RecruiterExperienceProps) {
  return (
    <section>
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Experience Snapshot</h3>
        <span className="rounded-full bg-amber-50 px-3 py-0.5 text-xs font-semibold text-amber-800 ring-1 ring-amber-200 dark:bg-amber-500/10 dark:text-amber-200 dark:ring-amber-500/30">
          Sample Academic Experience
        </span>
      </div>
      <ol className="relative mt-5 space-y-6 border-l-2 border-sky-200 pl-6 dark:border-sky-500/30">
        {entries.map((entry) => (
          <li key={`${entry.period}-${entry.title}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-sky-600 to-teal-400 ring-4 ring-white dark:ring-night"
            />
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">{entry.period}</p>
            <h4 className="mt-1 text-sm font-bold text-slate-900 dark:text-white">{entry.title}</h4>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{entry.context}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{entry.contributions[0]}</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {entry.technologies.map((technology) => (
                <li key={technology} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200">
                  {technology}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
