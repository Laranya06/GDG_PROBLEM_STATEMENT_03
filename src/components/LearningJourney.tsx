import SectionHeading from '@/components/SectionHeading';
import type { IndividualPortfolio } from '@/types/portfolio';

interface LearningJourneyProps {
  journey: IndividualPortfolio['journey'];
}

export default function LearningJourney({ journey }: LearningJourneyProps) {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Experience" title={journey.heading} description={journey.description} />
      <ol className="relative mt-14 space-y-8 border-l-2 border-sky-200 pl-8 sm:pl-10 dark:border-sky-500/30">
        {journey.items.map((item) => (
          <li key={item.title} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[2.6rem] top-1.5 h-4 w-4 rounded-full bg-gradient-to-br from-sky-600 to-cyan-400 ring-4 ring-slate-50 sm:-left-[3.1rem] dark:ring-night"
            />
            <div className="card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl motion-reduce:hover:translate-y-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                {item.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
