import SectionHeading from '@/components/SectionHeading';
import TeamMemberCard from '@/components/TeamMemberCard';
import type { TeamPortfolio } from '@/types/portfolio';

interface TeamMembersProps {
  team: TeamPortfolio['team'];
}

export default function TeamMembers({ team }: TeamMembersProps) {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Our Team" title={team.heading} description={team.description} />
      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {team.members.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
