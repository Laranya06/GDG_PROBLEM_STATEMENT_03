import Footer from '@/components/Footer';
import ProfileAbout from '@/components/profile/ProfileAbout';
import ProfileAchievements from '@/components/profile/ProfileAchievements';
import ProfileContact from '@/components/profile/ProfileContact';
import ProfileContributions from '@/components/profile/ProfileContributions';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileNavbar from '@/components/profile/ProfileNavbar';
import ProfileProjects, { type MemberProject } from '@/components/profile/ProfileProjects';
import ExperienceTimeline from '@/components/profile/ExperienceTimeline';
import ProfileSkills from '@/components/profile/ProfileSkills';
import { findProjectForRef } from '@/data/teamMemberProfiles';
import type { MemberProfile, TeamMember } from '@/types/portfolio';

interface MemberProfilePageProps {
  member: TeamMember;
  profile: MemberProfile;
}

export default function MemberProfilePage({ member, profile }: MemberProfilePageProps) {
  const projects: MemberProject[] = profile.projects.flatMap((ref) => {
    const project = findProjectForRef(ref.source, ref.projectId);
    return project ? [{ ref, project }] : [];
  });

  return (
    <div className="min-h-screen motion-safe:animate-fade-in">
      <ProfileNavbar accent={member.accent} />
      <main>
        <ProfileHero member={member} profile={profile} />
        <ProfileAbout about={profile.about} />
        <ExperienceTimeline entries={profile.experience} accent={member.accent} />
        <ProfileSkills groups={profile.skillGroups} accent={member.accent} />
        <ProfileProjects projects={projects} accent={member.accent} />
        <ProfileContributions memberId={member.id} />
        <ProfileAchievements items={profile.achievements} accent={member.accent} />
        <ProfileContact email={profile.email} name={member.name} accent={member.accent} />
      </main>
      <Footer name={member.name} />
    </div>
  );
}
