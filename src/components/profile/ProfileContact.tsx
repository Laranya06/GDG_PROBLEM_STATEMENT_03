import { Github, Linkedin, Mail } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { ACCENT_STYLES } from '@/lib/palette';
import type { AccentKey, MemberProfile } from '@/types/portfolio';

interface ProfileContactProps {
  email: MemberProfile['email'];
  name: string;
  accent: AccentKey;
}

const PLACEHOLDER_CLASS =
  'flex items-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 dark:border-slate-600 dark:bg-white/5';

export default function ProfileContact({ email, name, accent }: ProfileContactProps) {
  const accentStyle = ACCENT_STYLES[accent];

  return (
    <section id="contact" className="scroll-mt-32 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title={`Work with ${name.split(' ')[0]}`}
        description="Reach out about a project, a team collaboration, or a question about this portfolio."
      />
      <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-3">
        <a
          href={`mailto:${email}`}
          className="card group flex flex-col items-start gap-3 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:hover:translate-y-0 md:col-span-3"
        >
          <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${accentStyle.gradient}`}>
            <Mail aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Email (sample address)</span>
          <span className="text-base font-semibold text-slate-900 group-hover:underline dark:text-white">{email}</span>
        </a>
        <div className={PLACEHOLDER_CLASS}>
          <Github aria-hidden="true" className="h-5 w-5 shrink-0 text-slate-500 dark:text-slate-400" />
          <div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">GitHub</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Sample placeholder. No account linked.</p>
          </div>
        </div>
        <div className={PLACEHOLDER_CLASS}>
          <Linkedin aria-hidden="true" className="h-5 w-5 shrink-0 text-slate-500 dark:text-slate-400" />
          <div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">LinkedIn</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Sample placeholder. No account linked.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
