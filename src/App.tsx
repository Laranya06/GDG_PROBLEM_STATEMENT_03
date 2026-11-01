import PortfolioPage from '@/components/PortfolioPage';
import MemberNotFound from '@/components/profile/MemberNotFound';
import MemberProfilePage from '@/components/profile/MemberProfilePage';
import { ProfileAvatarsProvider } from '@/context/ProfileAvatarsContext';
import { PortfolioModeProvider } from '@/context/PortfolioModeContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { memberProfiles } from '@/data/teamMemberProfiles';
import { teamPortfolio } from '@/data/teamPortfolio';
import { matchTeamMemberSlug, usePathname } from '@/lib/routing';

function AppRoutes() {
  const pathname = usePathname();
  const slug = matchTeamMemberSlug(pathname);
  if (slug === null) return <PortfolioPage />;

  const member = teamPortfolio.team.members.find((candidate) => candidate.slug === slug);
  const profile = member ? memberProfiles[member.id] : undefined;
  if (!member || !profile) return <MemberNotFound />;

  return <MemberProfilePage member={member} profile={profile} />;
}

function App() {
  return (
    <ThemeProvider>
      <PortfolioModeProvider>
        <ProfileAvatarsProvider>
          <AppRoutes />
        </ProfileAvatarsProvider>
      </PortfolioModeProvider>
    </ThemeProvider>
  );
}

export default App;
