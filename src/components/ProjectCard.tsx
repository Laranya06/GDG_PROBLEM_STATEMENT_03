import { Code2, ExternalLink } from 'lucide-react';
import ProjectPreview from '@/components/ProjectPreview';
import { ACCENT_STYLES } from '@/lib/palette';
import type { ProjectItem } from '@/types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const accent = ACCENT_STYLES[project.accent];

  return (
    <article className="card group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-2xl motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-night">
        <ProjectPreview project={project} />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm dark:bg-night/90 dark:text-slate-100">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="flex items-start justify-between gap-3 text-xl font-bold text-slate-900 dark:text-white">
          {project.title}
          <ExternalLink aria-hidden="true" className={`mt-1 h-4 w-4 shrink-0 ${accent.text}`} />
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.summary}</p>

        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.gradient}`} aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ${accent.soft} ${accent.ring}`}>
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <a
            href="#projects"
            aria-label={`Sample demo for ${project.title} (placeholder link)`}
            className="btn-primary px-4 py-2 text-xs hover:translate-y-0"
          >
            <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
            Sample Demo
          </a>
          <a
            href="#projects"
            aria-label={`Sample source code for ${project.title} (placeholder link)`}
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-300 transition hover:bg-slate-100 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-white/10"
          >
            <Code2 aria-hidden="true" className="h-3.5 w-3.5" />
            Sample Code
          </a>
        </div>
      </div>
    </article>
  );
}
