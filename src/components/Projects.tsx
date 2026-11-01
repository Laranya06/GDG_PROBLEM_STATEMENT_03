import { useMemo, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import type { PortfolioContent } from '@/types/portfolio';

interface ProjectsProps {
  projects: PortfolioContent['projects'];
}

const ALL_PROJECTS = 'All Projects';

export default function Projects({ projects }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState(ALL_PROJECTS);

  const filters = useMemo(
    () => [ALL_PROJECTS, ...Array.from(new Set(projects.items.map((project) => project.category)))],
    [projects.items],
  );

  const visibleProjects = useMemo(
    () =>
      activeFilter === ALL_PROJECTS
        ? projects.items
        : projects.items.filter((project) => project.category === activeFilter),
    [activeFilter, projects.items],
  );

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Projects" title={projects.heading} description={projects.description} />

      <div role="group" aria-label="Filter projects" className="mt-10 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ring-1 transition duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-sky-600 to-blue-500 text-white ring-sky-600 shadow-md shadow-sky-600/25'
                  : 'bg-white text-slate-700 ring-slate-200 hover:bg-slate-100 dark:bg-night-card dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
