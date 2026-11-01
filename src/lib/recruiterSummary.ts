import { individualPortfolio } from '@/data/individualPortfolio';
import { getMemberContributions } from '@/data/teamContributions';
import { findProjectForRef, memberProfiles } from '@/data/teamMemberProfiles';
import { teamPortfolio } from '@/data/teamPortfolio';
import type {
  AccentKey,
  AchievementItem,
  ExperienceEntry,
  MemberProfile,
  MemberProjectRef,
  PortfolioMode,
  ProfilePhoto,
  ProjectItem,
  TeamMember,
} from '@/types/portfolio';

export type RecruiterScope = { kind: PortfolioMode } | { kind: 'member'; memberId: string };

export type RunAfterClose = (action: () => void) => void;

export interface RecruiterProject {
  project: ProjectItem;
  source: PortfolioMode;
  contribution?: string;
}

export interface RecruiterContribution {
  memberId: string;
  name: string;
  slug: string;
  projects: { title: string; responsibility: string }[];
}

export interface RecruiterSummary {
  kind: RecruiterScope['kind'];
  name: string;
  role: string;
  quickSummary: string;
  availability: string;
  location: string | null;
  accent: AccentKey;
  avatars: ProfilePhoto[];
  members: TeamMember[];
  topSkills: string[];
  projects: RecruiterProject[];
  contributions: RecruiterContribution[];
  experience: ExperienceEntry[];
  achievements: AchievementItem[];
  email: string;
}

const EXPERIENCE_LIMIT = 3;
const ACHIEVEMENT_LIMIT = 2;

function toRecruiterProjects(refs: MemberProjectRef[]): RecruiterProject[] {
  return refs.flatMap((ref) => {
    const project = findProjectForRef(ref.source, ref.projectId);
    return project ? [{ project, source: ref.source, contribution: ref.contribution }] : [];
  });
}

function toContributionRow(member: TeamMember): RecruiterContribution {
  return {
    memberId: member.id,
    name: member.name,
    slug: member.slug,
    projects: getMemberContributions(member.id).flatMap(({ projectId, contribution }) => {
      const project = findProjectForRef('team', projectId);
      return project ? [{ title: project.title, responsibility: contribution.responsibility }] : [];
    }),
  };
}

function buildIndividualSummary(): RecruiterSummary {
  const profile = memberProfiles.aarav;
  return {
    kind: 'individual',
    name: individualPortfolio.name,
    role: individualPortfolio.hero.subtitle,
    quickSummary: profile.quickSummary,
    availability: individualPortfolio.hero.availability,
    location: profile.location,
    accent: 'blue',
    avatars: individualPortfolio.hero.images,
    members: [],
    contributions: [],
    topSkills: profile.topSkills,
    projects: toRecruiterProjects(profile.projects),
    experience: profile.experience.slice(0, EXPERIENCE_LIMIT),
    achievements: profile.achievements.slice(0, ACHIEVEMENT_LIMIT),
    email: profile.email,
  };
}

function buildTeamSummary(): RecruiterSummary {
  const { team } = teamPortfolio;
  return {
    kind: 'team',
    name: teamPortfolio.name,
    role: teamPortfolio.hero.subtitle,
    quickSummary: team.quickSummary,
    availability: teamPortfolio.hero.availability,
    location: null,
    accent: 'blue',
    avatars: teamPortfolio.hero.images,
    members: team.members,
    contributions: team.members.map(toContributionRow),
    topSkills: team.topSkills,
    projects: teamPortfolio.projects.items.map((project) => ({ project, source: 'team' })),
    experience: [],
    achievements: teamPortfolio.achievements.items.slice(0, ACHIEVEMENT_LIMIT),
    email: teamPortfolio.contact.email,
  };
}

function buildMemberSummary(memberId: string): RecruiterSummary | null {
  const member = teamPortfolio.team.members.find((candidate) => candidate.id === memberId);
  const profile: MemberProfile | undefined = memberProfiles[memberId];
  if (!member || !profile) return null;
  return {
    kind: 'member',
    name: member.name,
    role: member.role,
    quickSummary: profile.quickSummary,
    availability: profile.status,
    location: profile.location,
    accent: member.accent,
    avatars: [member.avatar],
    members: [],
    contributions: [toContributionRow(member)],
    topSkills: profile.topSkills,
    projects: toRecruiterProjects(profile.projects),
    experience: profile.experience.slice(0, EXPERIENCE_LIMIT),
    achievements: profile.achievements.slice(0, ACHIEVEMENT_LIMIT),
    email: profile.email,
  };
}

export function buildRecruiterSummary(scope: RecruiterScope): RecruiterSummary | null {
  if (scope.kind === 'member') return buildMemberSummary(scope.memberId);
  return scope.kind === 'team' ? buildTeamSummary() : buildIndividualSummary();
}
