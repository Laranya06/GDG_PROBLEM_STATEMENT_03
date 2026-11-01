import { Award } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { ACCENT_STYLES } from '@/lib/palette';
import type { AccentKey, AchievementItem } from '@/types/portfolio';

interface ProfileAchievementsProps {
  items: AchievementItem[];
  accent: AccentKey;
}

export default function ProfileAchievements({ items, accent }: ProfileAchievementsProps) {
  const accentStyle = ACCENT_STYLES[accent];

  return (
    <section id="achievements" className="scroll-mt-32 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Achievements"
        title="Milestones"
        description="Sample Portfolio Content. These milestones are fictional and provided for demonstration."
      />
      <ul className="mt-14 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <li key={item.title} className="card flex gap-5 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:hover:translate-y-0">
            <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-lg ${accentStyle.gradient} ${accentStyle.glow}`}>
              <Award aria-hidden="true" className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Sample Portfolio Content</p>
              <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
