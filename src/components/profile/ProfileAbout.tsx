import SectionHeading from '@/components/SectionHeading';
import type { MemberProfile } from '@/types/portfolio';

interface ProfileAboutProps {
  about: MemberProfile['about'];
}

export default function ProfileAbout({ about }: ProfileAboutProps) {
  return (
    <section id="about" className="scroll-mt-32 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="About" title="About Me" />
      <div className="mx-auto mt-10 max-w-3xl space-y-4 text-center text-base leading-relaxed text-slate-600 dark:text-slate-400">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <dl className="mt-14 grid gap-5 md:grid-cols-2">
        {about.highlights.map((highlight) => (
          <div key={highlight.label} className="card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:hover:translate-y-0">
            <dt className="text-sm font-semibold text-slate-900 dark:text-white">{highlight.label}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{highlight.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
