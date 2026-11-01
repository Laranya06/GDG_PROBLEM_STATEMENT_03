import { useState } from 'react';
import ContributionFlow from '@/components/contributions/ContributionFlow';
import ContributionMemberCard from '@/components/contributions/ContributionMemberCard';
import ProjectPreview from '@/components/ProjectPreview';
import SectionHeading from '@/components/SectionHeading';
import { TEAM_CONTRIBUTIONS } from '@/data/teamContributions';
import type { ContributionFocus, ProjectItem, TeamMember } from '@/types/portfolio';

type ContributionFilter = 'all' | ContributionFocus;

const FILTERS: { value: ContributionFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'integration', label: 'Integration' },
];

interface TeamContributionExplorerProps {
  projects: ProjectItem[];
  members: TeamMember[];
}

export default function TeamContributionExplorer({ projects, members }: TeamContributionExplorerProps) {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id);
  const [filter, setFilter] = useState<ContributionFilter>('all');
  const [activeMemberId, setActiveMemberId] = useState<string | null>(null);

  const project = projects.find((item) => item.id === selectedProjectId) ?? projects[0];
  const contributions = TEAM_CONTRIBUTIONS.find((item) => item.projectId === project?.id);
  if (!project || !contributions) return null;

  const rows = contributions.members.flatMap((entry) => {
    const member = members.find((item) => item.id === entry.memberId);
    return member ? [{ entry, member }] : [];
  });

  const isDimmed = (focus: ContributionFocus) => filter !== 'all' && focus !== filter;

  const selectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setActiveMemberId(null);
  };

  const toggleMember = (memberId: string) => {
    setActiveMemberId((current) => (current === memberId ? null : memberId));
  };

  return (
    <section id="contributions" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Team Contributions"
        title="Behind the Build — Who Built What?"
        description="Great products are built together. Explore the people, skills, and contributions behind every CodeNova project."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {projects.map((item) => {
          const isSelected = item.id === project.id;
          const tagline = TEAM_CONTRIBUTIONS.find((entry) => entry.projectId === item.id)?.tagline;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => selectProject(item.id)}
              className={`group flex flex-col overflow-hidden rounded-2xl bg-white text-left ring-1 transition duration-300 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 dark:bg-white/5 ${
                isSelected ? 'shadow-xl ring-2 ring-sky-500' : 'ring-slate-200 hover:shadow-lg dark:ring-slate-700'
              }`}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-night">
                <ProjectPreview project={item} />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-base font-bold text-slate-900 dark:text-white">{item.title}</p>
                  {isSelected && (
                    <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-800 dark:bg-sky-500/20 dark:text-sky-200">
                      Selected
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{tagline}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div key={project.id} className="motion-safe:animate-fade-in mt-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="chip w-fit">Sample Project Contributions</span>
          <div role="group" aria-label="View by Contribution" className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-semibold text-slate-600 dark:text-slate-300">View by Contribution</span>
            {FILTERS.map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={filter === option.value}
                onClick={() => setFilter(option.value)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold ring-1 transition duration-200 ${
                  filter === option.value
                    ? 'bg-sky-600 text-white ring-sky-600'
                    : 'bg-white text-slate-700 ring-slate-300 hover:bg-slate-100 dark:bg-white/5 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-white/10'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <ContributionFlow
            projectTitle={project.title}
            rows={rows}
            activeMemberId={activeMemberId}
            onSelect={toggleMember}
            isDimmed={isDimmed}
          />
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rows.map(({ entry, member }) => (
            <li key={member.id} className="flex">
              <ContributionMemberCard
                member={member}
                entry={entry}
                isActive={activeMemberId === member.id}
                isDimmed={isDimmed(entry.focus)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
