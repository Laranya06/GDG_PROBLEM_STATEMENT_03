import SectionHeading from '@/components/SectionHeading';
import { getMemberContributions } from '@/data/teamContributions';
import { findProjectForRef } from '@/data/teamMemberProfiles';
import { MEMBER_THEMES } from '@/lib/contributionTheme';

interface ProfileContributionsProps {
  memberId: string;
}

export default function ProfileContributions({ memberId }: ProfileContributionsProps) {
  const theme = MEMBER_THEMES[memberId];
  const items = getMemberContributions(memberId).flatMap((item) => {
    const project = findProjectForRef('team', item.projectId);
    return project ? [{ ...item, project }] : [];
  });

  if (items.length === 0) return null;

  return (
    <section id="contributions" className="mx-auto max-w-7xl scroll-mt-32 px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contributions"
        title="My Contributions to CodeNova"
        description="The responsibilities, deliverables, and technologies behind each team project (sample)."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map(({ project, contribution, tagline }) => (
          <article key={project.id} className="card flex flex-col overflow-hidden p-6">
            <div aria-hidden="true" className={`mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r ${theme.gradient}`} />
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{project.title}</p>
            <h3 className={`mt-2 text-lg font-bold ${theme.text}`}>{contribution.responsibility}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{tagline}</p>

            <ul className="mt-5 space-y-2.5">
              {contribution.keyContributions.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  <span aria-hidden="true" className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${theme.gradient}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
              {contribution.technologies.map((tech) => (
                <li key={tech} className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${theme.badge}`}>
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
