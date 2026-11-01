import { ArrowRight, Github, Linkedin } from 'lucide-react';
import type { MouseEvent } from 'react';
import EditableProfilePhoto from '@/components/EditableProfilePhoto';
import { ACCENT_STYLES } from '@/lib/palette';
import { navigateTo, teamMemberPath } from '@/lib/routing';
import type { TeamMember } from '@/types/portfolio';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const accent = ACCENT_STYLES[member.accent];
  const profilePath = teamMemberPath(member.slug);

  const openProfile = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigateTo(profilePath);
  };

  return (
    <article className="card relative flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-2xl motion-reduce:hover:translate-y-0">
      <div className={`relative flex justify-center px-6 pb-4 pt-10 ${accent.gradient}`}>
        <div className="absolute inset-0 bg-white/70 dark:bg-night-card/80" aria-hidden="true" />
        <EditableProfilePhoto
          photo={member.avatar}
          className=" relative z-10"
          imageClassName="h-32 w-32 rounded-full bg-white shadow-xl ring-4 ring-white transition duration-300 hover:scale-105 motion-reduce:hover:scale-100 dark:ring-night-card"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-center text-xl font-bold text-slate-900 dark:text-white">
          <a
            href={profilePath}
            onClick={openProfile}
            className="transition-colors after:absolute after:inset-0 after:content-[''] hover:text-sky-700 focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-inset focus-visible:after:ring-sky-500 dark:hover:text-sky-300"
          >
            {member.name}
          </a>
        </h3>
        <p className={`mt-1 text-center text-sm font-semibold ${accent.text}`}>{member.role}</p>

        <p className="mt-4 text-center text-sm leading-relaxed text-slate-600 dark:text-slate-400">{member.bio}</p>

        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {member.skills.map((skill) => (
            <li key={skill} className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ${accent.soft} ${accent.ring}`}>
              {skill}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex justify-center pt-6">
          <span
            aria-hidden="true"
            className="btn-primary group/profile px-5 py-2.5 text-sm hover:translate-y-0"
          >
            View Full Profile
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/profile:translate-x-1 motion-reduce:transition-none" />
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {member.socials.map((social) => {
            const Icon = social.label.startsWith('GitHub') ? Github : Linkedin;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={`${member.name} ${social.label}`}
                className="relative z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-100 motion-reduce:hover:translate-y-0 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-white/10"
              >
                <Icon aria-hidden="true" className="h-3.5 w-3.5" />
                {social.label}
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}
