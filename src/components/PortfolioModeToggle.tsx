import { User, Users } from 'lucide-react';
import { usePortfolioMode } from '@/context/PortfolioModeContext';
import type { PortfolioMode } from '@/types/portfolio';

const OPTIONS: { value: PortfolioMode; label: string; icon: typeof User }[] = [
  { value: 'individual', label: 'Individual', icon: User },
  { value: 'team', label: 'Team', icon: Users },
];

export default function PortfolioModeToggle() {
  const { mode, setMode } = usePortfolioMode();
  const activeIndex = OPTIONS.findIndex((option) => option.value === mode);

  return (
    <div
      role="group"
      aria-label="Portfolio view"
      className="relative grid grid-cols-2 rounded-full bg-slate-200/70 p-1 ring-1 ring-slate-200 dark:bg-slate-800/80 dark:ring-slate-700"
    >
      <span
        aria-hidden="true"
        className={`absolute bottom-1 left-1 top-1 w-[calc(50%-0.25rem)] rounded-full bg-white shadow-md transition-transform duration-300 ease-out motion-reduce:transition-none dark:bg-sky-500 ${
          activeIndex === 1 ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
      {OPTIONS.map(({ value, label, icon: Icon }) => {
        const isActive = value === mode;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={isActive}
            onClick={() => setMode(value)}
            className={`relative z-10 inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold transition-colors duration-300 ${
              isActive
                ? 'text-sky-700 dark:text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            }`}
          >
            <Icon aria-hidden="true" className="h-4 w-4" />
            {label}
          </button>
        );
      })}
    </div>
  );
}
