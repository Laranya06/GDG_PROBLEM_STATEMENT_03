import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition duration-200 hover:bg-slate-100 active:scale-95 dark:bg-night-card dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800"
    >
      <Sun
        aria-hidden="true"
        className={`absolute h-5 w-5 transition-all duration-300 ease-out motion-reduce:transition-none ${
          isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
      <Moon
        aria-hidden="true"
        className={`absolute h-5 w-5 transition-all duration-300 ease-out motion-reduce:transition-none ${
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        }`}
      />
    </button>
  );
}
