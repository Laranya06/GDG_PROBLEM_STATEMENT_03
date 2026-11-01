import { ArrowRight, Check } from 'lucide-react';
import EditableProfilePhoto from '@/components/EditableProfilePhoto';
import { MEMBER_THEMES } from '@/lib/contributionTheme';
import { navigateTo, teamMemberPath } from '@/lib/routing';
import type { MemberContribution, TeamMember } from '@/types/portfolio';

interface ContributionMemberCardProps {
  member: TeamMember;
  entry: MemberContribution;
  isActive: boolean;
  isDimmed: boolean;
}

export default function ContributionMemberCard({ member, entry, isActive, isDimmed }: ContributionMemberCardProps) {
  const theme = MEMBER_THEMES[member.id];
  const profilePath = teamMemberPath(member.slug);

  return (
    <article
      className={`card flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-2xl motion-reduce:hover:translate-y-0 ${
        isDimmed ? 'opacity-40' : 'opacity-100'
      } ${isActive ? `ring-2 ${theme.ring}` : ''}`}
    >
      <div aria-hidden="true" className={`h-1.5 bg-gradient-to-r ${theme.gradient}`} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4">
          <div className="pointer-events-none shrink-0">
            <EditableProfilePhoto
              photo={member.avatar}
              imageClassName="h-16 w-16 rounded-full bg-white shadow-md ring-2 ring-white dark:ring-night-card"
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
            <p className={`text-sm font-semibold ${theme.text}`}>{entry.responsibility}</p>
          </div>
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Key contributions</p>
        <ul className="mt-3 space-y-2.5">
          {entry.keyContributions.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <Check aria-hidden="true" className={`mt-0.5 h-4 w-4 shrink-0 ${theme.text}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {entry.technologies.map((tech) => (
            <li key={tech} className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${theme.badge}`}>
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={() => navigateTo(profilePath)}
            className="btn-primary group w-full px-4 py-2.5 text-sm hover:translate-y-0"
          >
            View Full Profile
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" />
          </button>
        </div>
      </div>
    </article>
  );
}
