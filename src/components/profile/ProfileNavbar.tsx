import { ChevronRight } from 'lucide-react';
import { ACCENT_STYLES } from '@/lib/palette';
import { scrollToSection } from '@/lib/routing';
import BackToTeamLink from '@/components/profile/BackToTeamLink';
import ThemeToggle from '@/components/ThemeToggle';
import type { AccentKey } from '@/types/portfolio';

const PROFILE_SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

interface ProfileNavbarProps {
  accent: AccentKey;
}

export default function ProfileNavbar({ accent }: ProfileNavbarProps) {
  const accentStyle = ACCENT_STYLES[accent];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50/95 backdrop-blur-md dark:border-slate-800 dark:bg-night/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <BackToTeamLink label="Back to Team" />
        <div className="flex items-center gap-3">
          <span className={`hidden h-2 w-2 rounded-full sm:block ${accentStyle.gradient}`} aria-hidden="true" />
          <ThemeToggle />
        </div>
      </div>
      <nav aria-label="Profile sections" className="border-t border-slate-200/70 dark:border-slate-800/70">
        <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 sm:px-6 lg:px-8">
          {PROFILE_SECTIONS.map((section) => (
            <li key={section.id} className="shrink-0">
              <a
                href={`#${section.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(section.id);
                }}
                className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {section.label}
                <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 opacity-50" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
