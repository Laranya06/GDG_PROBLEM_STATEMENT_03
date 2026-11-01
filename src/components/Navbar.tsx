import { useEffect, useState } from 'react';
import { Code2, Download, Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import PortfolioModeToggle from '@/components/PortfolioModeToggle';
import DownloadResumeButton from '@/components/DownloadResumeButton';
import type { DownloadFile } from '@/types/portfolio';

interface NavbarProps {
  name: string;
  download: DownloadFile;
  isTeamMode: boolean;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const CONTRIBUTIONS_LINK = { label: 'Contributions', href: '#contributions' };

const CONTACT_BUTTON_CLASS = 'btn-primary px-5 py-2.5 hover:translate-y-0';

export default function Navbar({ name, download, isTeamMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = isTeamMode ? [...NAV_LINKS.slice(0, 3), CONTRIBUTIONS_LINK, ...NAV_LINKS.slice(3)] : NAV_LINKS;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-50/90 shadow-lg shadow-slate-900/5 backdrop-blur-md dark:bg-night/90 dark:shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2.5" onClick={closeMenu}>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-blue-500 text-white shadow-md shadow-sky-600/30">
            <Code2 aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="truncate text-base font-bold tracking-tight">{name}</span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200/60 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:block">
            <PortfolioModeToggle />
          </div>
          <a
            href={download.href}
            download={download.fileName}
            aria-label={download.label}
            title={download.label}
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition duration-200 hover:bg-slate-100 active:scale-95 md:inline-flex dark:bg-night-card dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800"
          >
            <Download aria-hidden="true" className="h-4 w-4" />
          </a>
          <ThemeToggle />
          <a href="#contact" className={`${CONTACT_BUTTON_CLASS} hidden md:inline-flex`}>
            Contact
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-100 xl:hidden dark:bg-night-card dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800"
          >
            {isMenuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="motion-safe:animate-fade-in border-t border-slate-200 bg-slate-50/95 shadow-xl backdrop-blur-md xl:hidden dark:border-slate-800 dark:bg-night/95"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6">
            <div className="md:hidden">
              <PortfolioModeToggle />
            </div>
            <DownloadResumeButton
              file={download}
              onClick={closeMenu}
              className="btn-secondary w-full md:hidden"
            />
            <ul className="grid gap-1 sm:grid-cols-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="flex min-h-11 items-center rounded-xl px-4 text-base font-medium text-slate-700 transition-colors hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={closeMenu} className={`${CONTACT_BUTTON_CLASS} w-full md:hidden`}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
