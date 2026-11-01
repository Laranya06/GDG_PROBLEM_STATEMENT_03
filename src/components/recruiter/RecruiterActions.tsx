import { ArrowRight } from 'lucide-react';
import type { RecruiterSummary } from '@/lib/recruiterSummary';

interface RecruiterActionsProps {
  kind: RecruiterSummary['kind'];
  email: string;
  onContact: () => void;
  onViewPortfolio: () => void;
}

export default function RecruiterActions({ kind, email, onContact, onViewPortfolio }: RecruiterActionsProps) {
  const contactLabel = kind === 'team' ? 'Contact Team' : 'Contact Developer';

  return (
    <footer className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">Ready to reach out?</p>
        <a
          href={`mailto:${email}`}
          className="break-all text-sm text-sky-700 underline-offset-4 hover:underline dark:text-sky-300"
        >
          {email}
        </a>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={onViewPortfolio} className="btn-secondary w-full sm:w-auto">
          View Full Portfolio
        </button>
        <button type="button" onClick={onContact} className="btn-primary group w-full sm:w-auto">
          {contactLabel}
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </footer>
  );
}
