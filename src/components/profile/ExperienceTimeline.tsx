import SectionHeading from '@/components/SectionHeading';
import { ACCENT_STYLES } from '@/lib/palette';
import type { AccentKey, ExperienceEntry } from '@/types/portfolio';

interface ExperienceTimelineProps {
  entries: ExperienceEntry[];
  accent: AccentKey;
}

export default function ExperienceTimeline({ entries, accent }: ExperienceTimelineProps) {
  const accentStyle = ACCENT_STYLES[accent];

  return (
    <section id="experience" className="scroll-mt-32 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Experience & Learning Journey"
        description="A sample timeline of academic and practical development. All entries are fictional."
      />
      <ol className="relative mx-auto mt-14 max-w-3xl border-l-2 border-slate-200 pl-8 dark:border-slate-700">
        {entries.map((entry) => (
          <li key={entry.period + entry.title} className="relative pb-10 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute -left-[41px] top-6 h-4 w-4 rounded-full ring-4 ring-slate-50 dark:ring-night ${accentStyle.gradient}`}
            />
            <article className="card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:hover:translate-y-0">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-bold ring-1 ${accentStyle.soft} ${accentStyle.ring}`}>
                  {entry.period}
                </span>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{entry.context}</p>
              </div>
              <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">{entry.title}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {entry.contributions.map((contribution) => (
                  <li key={contribution} className="flex gap-2">
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accentStyle.gradient}`} aria-hidden="true" />
                    {contribution}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {entry.technologies.map((technology) => (
                  <li key={technology} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200">
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
