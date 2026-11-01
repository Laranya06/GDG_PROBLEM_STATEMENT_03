import { Mail } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import type { PortfolioContent } from '@/types/portfolio';

interface ContactProps {
  contact: PortfolioContent['contact'];
}

export default function Contact({ contact }: ContactProps) {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="card grid gap-10 p-6 sm:p-10 lg:grid-cols-5 lg:gap-14 lg:p-14">
        <div className="lg:col-span-2">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {contact.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{contact.description}</p>

          <a
            href={`mailto:${contact.email}`}
            className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200 transition hover:bg-white hover:shadow-md dark:bg-white/5 dark:ring-slate-700 dark:hover:bg-white/10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
              <Mail aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="text-left">
              <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Sample email address</span>
              <span className="block text-sm font-semibold text-slate-900 dark:text-white">{contact.email}</span>
            </span>
          </a>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
