import { ExternalLink } from 'lucide-react';
import ProjectPreview from '@/components/ProjectPreview';
import { usePortfolioMode } from '@/context/PortfolioModeContext';
import { navigateTo, scrollToSection } from '@/lib/routing';
import type { RecruiterProject, RunAfterClose } from '@/lib/recruiterSummary';
import type { PortfolioMode } from '@/types/portfolio';

interface RecruiterProjectsProps {
  items: RecruiterProject[];
  runAfterClose: RunAfterClose;
}

export default function RecruiterProjects({ items, runAfterClose }: RecruiterProjectsProps) {
  const { setMode } = usePortfolioMode();

  const openProject = (source: PortfolioMode) =>
    runAfterClose(() => {
      setMode(source);
      if (window.location.pathname === '/') {
        scrollToSection('projects');
        return;
      }
      navigateTo('/#projects');
    });

  return (
    <section>
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Featured Projects</h3>
      <ul className="mt-4 grid gap-5 md:grid-cols-3">
        {items.map(({ project, source, contribution }) => (
          <li
            key={`${source}-${project.id}`}
            className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 dark:bg-white/5 dark:ring-slate-700"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-night">
              <ProjectPreview project={project} />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">{project.title}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.summary}</p>
              {contribution && (
                <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-xs leading-relaxed text-slate-700 dark:bg-white/5 dark:text-slate-200">
                  <span className="font-semibold">Contribution (sample):</span> {contribution}
                </p>
              )}
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4">
                <button type="button" onClick={() => openProject(source)} className="btn-primary px-4 py-2 text-xs hover:translate-y-0">
                  <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                  View Project
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
