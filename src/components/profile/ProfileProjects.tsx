import { ExternalLink } from 'lucide-react';
import ProjectPreview from '@/components/ProjectPreview';
import SectionHeading from '@/components/SectionHeading';
import { usePortfolioMode } from '@/context/PortfolioModeContext';
import { ACCENT_STYLES } from '@/lib/palette';
import { navigateTo } from '@/lib/routing';
import type { AccentKey, MemberProjectRef, ProjectItem } from '@/types/portfolio';

export interface MemberProject {
  ref: MemberProjectRef;
  project: ProjectItem;
}

interface ProfileProjectsProps {
  projects: MemberProject[];
  accent: AccentKey;
}

export default function ProfileProjects({ projects, accent }: ProfileProjectsProps) {
  const { setMode } = usePortfolioMode();
  const accentStyle = ACCENT_STYLES[accent];

  const openProject = (source: MemberProjectRef['source']) => {
    setMode(source);
    navigateTo('/#projects');
  };

  return (
    <section id="projects" className="scroll-mt-32 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Projects" title="Featured Projects" description="Projects this member helped build, with their specific contribution." />
      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map(({ ref, project }) => (
          <article key={`${ref.source}-${project.id}`} className="card group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-2xl motion-reduce:hover:translate-y-0">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-night">
              <ProjectPreview project={project} />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className={`text-xs font-semibold uppercase tracking-wider ${accentStyle.text}`}>{project.category}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.summary}</p>

              <div className={`mt-5 rounded-xl p-4 ring-1 ${accentStyle.soft} ${accentStyle.ring}`}>
                <p className="text-xs font-bold uppercase tracking-wider">My contribution (sample)</p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{ref.contribution}</p>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <a href="/#projects" onClick={(event) => { event.preventDefault(); openProject(ref.source); }} className="btn-primary px-4 py-2 text-xs hover:translate-y-0">
                  <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                  View Project
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
