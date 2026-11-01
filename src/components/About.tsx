import type { PortfolioContent } from '@/types/portfolio';

interface AboutProps {
  about: PortfolioContent['about'];
}

export default function About({ about }: AboutProps) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <p className="eyebrow">About</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {about.heading}
          </h2>
          <span className="mt-6 block h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-teal-400" aria-hidden="true" />
        </div>
        <div className="card p-6 sm:p-10 lg:col-span-3">
          <div className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
