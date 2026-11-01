import { Trophy } from 'lucide-react';
import type { AchievementItem } from '@/types/portfolio';

interface RecruiterAchievementsProps {
  items: AchievementItem[];
}

export default function RecruiterAchievements({ items }: RecruiterAchievementsProps) {
  return (
    <section>
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Key Achievements</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.title} className="flex gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200 dark:bg-white/5 dark:ring-slate-700">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-orange-400 text-slate-900">
              <Trophy aria-hidden="true" className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">All achievements are fictional sample information.</p>
    </section>
  );
}
