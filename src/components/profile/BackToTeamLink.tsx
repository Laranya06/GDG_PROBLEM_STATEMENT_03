import type { MouseEvent, ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { usePortfolioMode } from '@/context/PortfolioModeContext';
import { navigateTo } from '@/lib/routing';

interface BackToTeamLinkProps {
  label?: ReactNode;
  className?: string;
}

const TEAM_SECTION_HREF = '/#experience';
const DEFAULT_CLASS = 'text-sm font-semibold text-slate-700 transition hover:text-slate-950 dark:text-slate-200 dark:hover:text-white';

export default function BackToTeamLink({ label = 'Back to CodeNova Team', className = DEFAULT_CLASS }: BackToTeamLinkProps) {
  const { setMode } = usePortfolioMode();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMode('team');
    navigateTo(TEAM_SECTION_HREF);
  };

  return (
    <a href={TEAM_SECTION_HREF} onClick={handleClick} className={`group inline-flex items-center gap-2 ${className}`}>
      <ArrowLeft aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1 motion-reduce:transition-none" />
      {label}
    </a>
  );
}
