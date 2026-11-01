import { Briefcase, MapPin, Sparkles } from 'lucide-react';
import { useState } from 'react';
import RecruiterQuickView from '@/components/recruiter/RecruiterQuickView';
import BackToTeamLink from '@/components/profile/BackToTeamLink';
import EditableProfilePhoto from '@/components/EditableProfilePhoto';
import { scrollToSection } from '@/lib/routing';
import { ACCENT_STYLES } from '@/lib/palette';
import type { MemberProfile, TeamMember } from '@/types/portfolio';

interface ProfileHeroProps {
  member: TeamMember;
  profile: MemberProfile;
}

export default function ProfileHero({ member, profile }: ProfileHeroProps) {
  const accent = ACCENT_STYLES[member.accent];
  const [isRecruiterOpen, setIsRecruiterOpen] = useState(false);

  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-20">
      <div className="motion-safe:animate-fade-in">
        <BackToTeamLink className="mb-8 text-sm font-semibold text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white" />
        <p className="eyebrow">CodeNova team member</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">{member.name}</h1>
        <p className={`mt-3 text-lg font-semibold ${accent.text}`}>{member.role}</p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">{member.bio}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          <li className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-night-card dark:text-slate-200 dark:ring-slate-700">
            <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
            {profile.location}
          </li>
          <li className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ring-1 ${accent.soft} ${accent.ring}`}>
            <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
            {profile.status}
          </li>
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection('projects');
            }}
            className="btn-primary px-6 py-3"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection('contact');
            }}
            className="btn-secondary px-6 py-3"
          >
            Contact
          </a>
          <button type="button" onClick={() => setIsRecruiterOpen(true)} className="btn-secondary px-6 py-3">
            <Briefcase aria-hidden="true" className="h-4 w-4" />
            Recruiter Quick View
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center overflow-hidden rounded-3xl bg-white/70 px-8 py-14 shadow-xl ring-1 ring-slate-200 dark:bg-night-card/80 dark:ring-slate-800">
        <div aria-hidden="true" className={`absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl ${accent.gradient}`} />
        <EditableProfilePhoto
          photo={member.avatar}
          className="relative"
          imageClassName="h-56 w-56 rounded-full bg-white object-cover shadow-2xl ring-8 ring-white sm:h-64 sm:w-64 dark:ring-night-card"
        />
      </div>
      <RecruiterQuickView
        open={isRecruiterOpen}
        scope={{ kind: 'member', memberId: member.id }}
        onClose={() => setIsRecruiterOpen(false)}
      />
    </section>
  );
}
