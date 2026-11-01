import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import RecruiterAchievements from '@/components/recruiter/RecruiterAchievements';
import RecruiterContributions from '@/components/recruiter/RecruiterContributions';
import RecruiterActions from '@/components/recruiter/RecruiterActions';
import RecruiterExperience from '@/components/recruiter/RecruiterExperience';
import RecruiterProfileHeader from '@/components/recruiter/RecruiterProfileHeader';
import RecruiterProjects from '@/components/recruiter/RecruiterProjects';
import RecruiterSkills from '@/components/recruiter/RecruiterSkills';
import { usePortfolioMode } from '@/context/PortfolioModeContext';
import { buildRecruiterSummary, type RecruiterScope, type RecruiterSummary, type RunAfterClose } from '@/lib/recruiterSummary';
import { navigateTo, scrollToSection, teamMemberPath } from '@/lib/routing';

interface RecruiterQuickViewProps {
  open: boolean;
  scope: RecruiterScope;
  onClose: () => void;
}

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export default function RecruiterQuickView({ open, scope, onClose }: RecruiterQuickViewProps) {
  const summary = open ? buildRecruiterSummary(scope) : null;
  if (!summary) return null;
  return <RecruiterDialog summary={summary} onClose={onClose} />;
}

interface RecruiterDialogProps {
  summary: RecruiterSummary;
  onClose: () => void;
}

function RecruiterDialog({ summary, onClose }: RecruiterDialogProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      const panel = panelRef.current;
      if (event.key !== 'Tab' || !panel) return;
      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      const active = document.activeElement;
      const isOutside = !(active instanceof Node) || !panel.contains(active);
      if (event.shiftKey && (active === first || isOutside)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || isOutside)) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const { setMode } = usePortfolioMode();

  const runAfterClose: RunAfterClose = (action) => {
    onClose();
    window.setTimeout(action, 0);
  };

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-stretch justify-center sm:items-center sm:p-6">
      <div aria-hidden="true" onClick={onClose} className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm motion-safe:animate-fade-in" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="recruiter-quick-view-title"
        className="relative flex h-full w-full flex-col overflow-hidden bg-white motion-safe:animate-fade-in dark:bg-night sm:h-auto sm:max-h-[90vh] sm:max-w-[900px] sm:rounded-3xl sm:shadow-2xl sm:ring-1 sm:ring-slate-200"
      >
        <header className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-8 dark:border-slate-800">
          <h2 id="recruiter-quick-view-title" className="text-base font-bold text-slate-900 sm:text-lg dark:text-white">
            Recruiter Quick View
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close Recruiter Quick View"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-8 sm:py-8">
          <div className="space-y-10">
            <RecruiterProfileHeader
              summary={summary}
              onViewMember={(slug) => runAfterClose(() => navigateTo(teamMemberPath(slug)))}
            />
            <RecruiterSkills skills={summary.topSkills} onExplore={() => runAfterClose(() => scrollToSection('skills'))} />
            <RecruiterProjects items={summary.projects} runAfterClose={runAfterClose} />
            <RecruiterContributions
              rows={summary.contributions}
              onViewMember={summary.kind === 'team' ? (slug) => runAfterClose(() => navigateTo(teamMemberPath(slug))) : undefined}
            />
            <div className="grid gap-10 md:grid-cols-2">
              {summary.experience.length > 0 && <RecruiterExperience entries={summary.experience} />}
              <RecruiterAchievements items={summary.achievements} />
            </div>
            <RecruiterActions
              kind={summary.kind}
              email={summary.email}
              onContact={() => runAfterClose(() => scrollToSection('contact'))}
              onViewPortfolio={() =>
                runAfterClose(() => {
                  setMode(summary.kind === 'individual' ? 'individual' : 'team');
                  if (window.location.pathname === '/') {
                    window.scrollTo({ top: 0 });
                    return;
                  }
                  navigateTo('/');
                })
              }
            />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
