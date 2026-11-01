import { ArrowRight, Briefcase, Sparkles } from 'lucide-react';
import DownloadResumeButton from '@/components/DownloadResumeButton';
import { SingleAvatarStage, TeamAvatarStage } from '@/components/HeroAvatars';
import type { DownloadFile, HeadlineSegment, PortfolioContent } from '@/types/portfolio';

interface HeroProps {
  hero: PortfolioContent['hero'];
  download: DownloadFile;
  onOpenRecruiter: () => void;
}

const HIGHLIGHT_CLASS =
  'bg-gradient-to-r from-sky-600 via-blue-500 to-teal-400 bg-[length:200%_auto] bg-clip-text text-transparent motion-safe:animate-gradient-x dark:from-sky-300 dark:via-blue-400 dark:to-teal-300';

function HeadlineLine({ segments }: { segments: HeadlineSegment[] }) {
  return (
    <span className="block">
      {segments.map((segment) => (
        <span key={segment.text} className={segment.highlight ? HIGHLIGHT_CLASS : undefined}>
          {segment.text}
        </span>
      ))}
    </span>
  );
}

export default function Hero({ hero, download, onOpenRecruiter }: HeroProps) {
  const isGroup = hero.images.length > 1;

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl dark:bg-orange-500/15" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-500/15" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-400/10" />
        <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-rose-200/30 blur-3xl dark:bg-rose-500/10" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="motion-safe:animate-fade-in text-center lg:text-left">
          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {hero.eyebrow && (
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 dark:bg-white/5 dark:text-slate-200 dark:ring-slate-700">
                <Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-orange-600 dark:text-orange-300" />
                {hero.eyebrow}
              </p>
            )}
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/30">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {hero.availability}
            </p>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.2] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {hero.headline.map((line, index) => (
              <HeadlineLine key={index} segments={line} />
            ))}
          </h1>
          <p className="mt-4 text-lg font-semibold text-teal-700 sm:text-xl dark:text-teal-300">{hero.subtitle}</p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 lg:mx-0 dark:text-slate-400">
            {hero.intro}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
            <a href={hero.primaryCta.href} className="btn-primary group w-full sm:w-auto">
              {hero.primaryCta.label}
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a href={hero.secondaryCta.href} className="btn-secondary w-full sm:w-auto">
              {hero.secondaryCta.label}
            </a>
            <DownloadResumeButton file={download} className="btn-secondary w-full sm:w-auto" />
            <button type="button" onClick={onOpenRecruiter} className="btn-secondary w-full sm:w-auto">
              <Briefcase aria-hidden="true" className="h-4 w-4" />
              Recruiter Quick View
            </button>
          </div>
        </div>

        <div className="motion-safe:animate-fade-in motion-safe:[animation-delay:150ms]">
          {isGroup ? <TeamAvatarStage photos={hero.images} /> : <SingleAvatarStage photo={hero.images[0]} />}
        </div>
      </div>
    </section>
  );
}
