export type PortfolioMode = 'individual' | 'team';

export interface LinkItem {
  label: string;
  href: string;
}

export interface ImageItem {
  src: string;
  alt: string;
}

export type ProfileKey = 'individual' | 'team-aarav' | 'team-priya' | 'team-rohan';

export type AccentKey = 'blue' | 'orange' | 'cyan' | 'coral' | 'yellow' | 'teal';

export type ProjectIconKey = 'chart' | 'coffee' | 'notes' | 'calendar' | 'leaf' | 'board';

export interface HeadlineSegment {
  text: string;
  highlight?: boolean;
}

export interface ProfilePhoto {
  profileKey: ProfileKey;
  alt: string;
  defaultAvatarIndex: number;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  features: string[];
  accent: AccentKey;
  icon: ProjectIconKey;
  thumbnail?: ImageItem;
}

export interface AchievementItem {
  title: string;
  description: string;
}

export interface JourneyItem {
  period: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  accent: AccentKey;
  avatar: ProfilePhoto;
  skills: string[];
  socials: LinkItem[];
}

export interface DownloadFile {
  label: string;
  href: string;
  fileName: string;
}

interface PortfolioBase {
  name: string;
  download: DownloadFile;
  hero: {
    eyebrow?: string;
    availability: string;
    headline: HeadlineSegment[][];
    subtitle: string;
    intro: string;
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
    images: ProfilePhoto[];
  };
  about: {
    heading: string;
    paragraphs: string[];
  };
  skills: {
    heading: string;
    description: string;
    groups: SkillGroup[];
  };
  projects: {
    heading: string;
    description: string;
    items: ProjectItem[];
  };
  achievements: {
    heading: string;
    description: string;
    items: AchievementItem[];
  };
  contact: {
    heading: string;
    description: string;
    email: string;
  };
}

export interface IndividualPortfolio extends PortfolioBase {
  mode: 'individual';
  journey: {
    heading: string;
    description: string;
    items: JourneyItem[];
  };
}

export interface TeamPortfolio extends PortfolioBase {
  mode: 'team';
  team: {
    heading: string;
    description: string;
    quickSummary: string;
    topSkills: string[];
    members: TeamMember[];
  };
}

export interface MemberAboutHighlight {
  label: string;
  text: string;
}

export interface ExperienceEntry {
  period: string;
  title: string;
  context: string;
  contributions: string[];
  technologies: string[];
}

export interface MemberProjectRef {
  source: PortfolioMode;
  projectId: string;
  contribution: string;
}

export interface MemberProfile {
  location: string;
  status: string;
  quickSummary: string;
  topSkills: string[];
  email: string;
  about: {
    paragraphs: string[];
    highlights: MemberAboutHighlight[];
  };
  experience: ExperienceEntry[];
  skillGroups: SkillGroup[];
  projects: MemberProjectRef[];
  achievements: AchievementItem[];
}

export type ContributionFocus = 'frontend' | 'backend' | 'integration';

export interface MemberContribution {
  memberId: string;
  focus: ContributionFocus;
  responsibility: string;
  keyContributions: string[];
  technologies: string[];
}

export interface ProjectContributions {
  projectId: string;
  tagline: string;
  members: MemberContribution[];
}

export type PortfolioContent = IndividualPortfolio | TeamPortfolio;
