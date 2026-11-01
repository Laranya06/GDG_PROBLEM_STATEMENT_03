import { BookOpen, CalendarDays, ChartColumn, Coffee, Kanban, Leaf, type LucideIcon } from 'lucide-react';
import { ACCENT_STYLES } from '@/lib/palette';
import type { AccentKey, ProjectIconKey } from '@/types/portfolio';

interface ProjectThumbnailProps {
  icon: ProjectIconKey;
  accent: AccentKey;
  title: string;
}

const ICONS: Record<ProjectIconKey, LucideIcon> = {
  chart: ChartColumn,
  coffee: Coffee,
  notes: BookOpen,
  calendar: CalendarDays,
  leaf: Leaf,
  board: Kanban,
};

export default function ProjectThumbnail({ icon, accent, title }: ProjectThumbnailProps) {
  const Icon = ICONS[icon];
  const style = ACCENT_STYLES[accent];

  return (
    <div
      role="img"
      aria-label={`${title} dashboard preview`}
      className={`relative flex h-full w-full items-center justify-center overflow-hidden ${style.gradient}`}
    >
      <div className="absolute inset-x-6 top-6 bottom-0 overflow-hidden rounded-t-xl bg-white/90 shadow-2xl shadow-black/20 dark:bg-night/80">
        <div className="flex items-center gap-1.5 border-b border-slate-200 px-3 py-2 dark:border-slate-700">
          <span className="h-2 w-2 rounded-full bg-rose-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-teal-400" />
        </div>
        <div className="grid grid-cols-3 gap-2 p-3">
          <div className="col-span-2 space-y-2">
            <div className="h-2.5 w-3/4 rounded-full bg-slate-300 dark:bg-slate-600" />
            <div className="h-2.5 w-1/2 rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="mt-3 flex h-12 items-end gap-1">
              {[40, 70, 52, 88, 63, 96].map((height, index) => (
                <span
                  key={index}
                  className={`w-full rounded-t ${style.gradient}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
            <Icon aria-hidden="true" className={`h-8 w-8 ${style.text}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
