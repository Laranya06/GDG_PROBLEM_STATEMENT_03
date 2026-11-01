import { Award, Lightbulb, Rocket, type LucideIcon } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { ACCENT_STYLES } from '@/lib/palette';
import type { AccentKey, PortfolioContent } from '@/types/portfolio';

interface AchievementsProps {
  achievements: PortfolioContent['achievements'];
}

const ITEM_ICONS: LucideIcon[] = [Rocket, Award, Lightbulb];
const ITEM_ACCENTS: AccentKey[] = ['blue', 'orange', 'yellow'];

export default function Achievements({ achievements }: AchievementsProps) {
  return (
    <section id="achievements" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Fictional Demo Achievements" title={achievements.heading} description={achievements.description} />
      <ol className="mt-14 grid gap-6 md:grid-cols-3">
        {achievements.items.map((item, index) => {
          const accent = ACCENT_STYLES[ITEM_ACCENTS[index % ITEM_ACCENTS.length]];
          const Icon = ITEM_ICONS[index % ITEM_ICONS.length];
          return (
            <li key={item.title} className="card flex flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl motion-reduce:hover:translate-y-0 sm:p-8">
              <div className="flex items-center justify-between">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg ${accent.gradient} ${accent.glow}`}>
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
