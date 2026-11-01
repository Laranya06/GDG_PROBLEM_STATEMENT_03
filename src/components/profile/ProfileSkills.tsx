import SectionHeading from '@/components/SectionHeading';
import { ACCENT_STYLES } from '@/lib/palette';
import { getTechIcon } from '@/lib/techIcons';
import type { AccentKey, SkillGroup } from '@/types/portfolio';

interface ProfileSkillsProps {
  groups: SkillGroup[];
  accent: AccentKey;
}

const GROUP_ACCENT_KEYS: AccentKey[] = ['cyan', 'yellow', 'coral'];

export default function ProfileSkills({ groups, accent }: ProfileSkillsProps) {
  const accentKeys = [accent, ...GROUP_ACCENT_KEYS];

  return (
    <section id="skills" className="scroll-mt-32 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Skills" title="Technical Skills" description="Grouped by how I use each technology day to day." />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {groups.map((group, groupIndex) => {
          const groupAccent = ACCENT_STYLES[accentKeys[groupIndex % accentKeys.length]];
          return (
            <div key={group.title} className="card p-6">
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${groupAccent.gradient}`} aria-hidden="true" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {group.items.map((item) => {
                  const Icon = getTechIcon(item);
                  return (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200 transition duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:hover:translate-y-0 dark:bg-white/5 dark:ring-slate-700"
                    >
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${groupAccent.soft}`}>
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
