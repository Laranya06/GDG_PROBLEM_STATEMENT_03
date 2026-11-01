import SectionHeading from '@/components/SectionHeading';
import { ACCENT_STYLES } from '@/lib/palette';
import { getTechIcon } from '@/lib/techIcons';
import type { AccentKey, PortfolioContent } from '@/types/portfolio';

interface SkillsProps {
  skills: PortfolioContent['skills'];
}

const GROUP_ACCENTS: AccentKey[] = ['blue', 'teal', 'yellow'];

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Skills" title={skills.heading} description={skills.description} />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {skills.groups.map((group, groupIndex) => {
          const accent = ACCENT_STYLES[GROUP_ACCENTS[groupIndex % GROUP_ACCENTS.length]];
          return (
            <div key={group.title} className="card flex flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl motion-reduce:hover:translate-y-0">
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${accent.gradient}`} aria-hidden="true" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {group.items.map((item) => {
                  const Icon = getTechIcon(item);
                  return (
                    <li
                      key={item}
                      className="group flex items-center gap-3 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200 transition duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-slate-300 motion-reduce:hover:translate-y-0 dark:bg-white/5 dark:ring-slate-700 dark:hover:ring-slate-600"
                    >
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${accent.soft}`}>
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-100">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
