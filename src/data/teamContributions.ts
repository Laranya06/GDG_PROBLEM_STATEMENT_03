import type { MemberProjectRef, ProjectContributions } from '@/types/portfolio';

export const TEAM_CONTRIBUTIONS: ProjectContributions[] = [
  {
    projectId: 'campusconnect',
    tagline: 'Campus events, registrations, and community updates in one place.',
    members: [
      {
        memberId: 'aarav',
        focus: 'frontend',
        responsibility: 'Frontend & UI/UX',
        keyContributions: [
          'Designed the event discovery interface.',
          'Built reusable React event cards and registration UI components.',
          'Improved responsive layouts and accessibility.',
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
      },
      {
        memberId: 'priya',
        focus: 'backend',
        responsibility: 'Backend & Database',
        keyContributions: [
          'Designed REST API prototypes for events and registrations.',
          'Created MongoDB data models.',
          'Implemented validation and API error-handling patterns.',
        ],
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'Postman'],
      },
      {
        memberId: 'rohan',
        focus: 'integration',
        responsibility: 'Integration & Coordination',
        keyContributions: [
          'Connected frontend interfaces with API prototypes.',
          'Coordinated task assignments and Git workflows.',
          'Tested event registration interactions.',
        ],
        technologies: ['JavaScript', 'React', 'Git', 'REST APIs'],
      },
    ],
  },
  {
    projectId: 'ecotrack',
    tagline: 'Sustainability dashboard turning everyday habits into clear, goal-driven progress.',
    members: [
      {
        memberId: 'aarav',
        focus: 'frontend',
        responsibility: 'Dashboard UI',
        keyContributions: [
          'Designed sustainability data cards and responsive layouts.',
          'Built reusable chart containers.',
          'Improved dashboard usability.',
        ],
        technologies: ['React', 'Tailwind CSS', 'Figma'],
      },
      {
        memberId: 'priya',
        focus: 'backend',
        responsibility: 'Data Processing',
        keyContributions: [
          'Designed data-handling logic for environmental metrics.',
          'Created sample API response structures.',
          'Validated sustainability tracking inputs.',
        ],
        technologies: ['Python', 'Node.js', 'JavaScript'],
      },
      {
        memberId: 'rohan',
        focus: 'integration',
        responsibility: 'Full-Stack Integration',
        keyContributions: [
          'Integrated dashboard components with application state.',
          'Implemented goal-tracking interactions.',
          'Coordinated testing and feature integration.',
        ],
        technologies: ['React', 'JavaScript', 'Git'],
      },
    ],
  },
  {
    projectId: 'collabboard',
    tagline: 'A Kanban-style task board for organizing team work and tracking status.',
    members: [
      {
        memberId: 'aarav',
        focus: 'frontend',
        responsibility: 'Kanban Interface',
        keyContributions: [
          'Designed task cards and interactive boards.',
          'Built responsive project dashboards.',
          'Implemented visual task status indicators.',
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      },
      {
        memberId: 'priya',
        focus: 'backend',
        responsibility: 'Task APIs & Data Modeling',
        keyContributions: [
          'Designed API endpoints for task management.',
          'Created task and user data models.',
          'Added validation and error-handling patterns.',
        ],
        technologies: ['Node.js', 'Express.js', 'MongoDB'],
      },
      {
        memberId: 'rohan',
        focus: 'integration',
        responsibility: 'Application Integration',
        keyContributions: [
          'Integrated frontend and backend workflows.',
          'Implemented task assignment and status interactions.',
          'Coordinated Git-based collaboration.',
        ],
        technologies: ['React', 'JavaScript', 'Node.js', 'Git'],
      },
    ],
  },
];

export function getMemberContributions(memberId: string) {
  return TEAM_CONTRIBUTIONS.flatMap(({ projectId, tagline, members }) =>
    members.filter((entry) => entry.memberId === memberId).map((contribution) => ({ projectId, tagline, contribution })),
  );
}

export function getMemberProjectRefs(memberId: string): MemberProjectRef[] {
  return getMemberContributions(memberId).map(({ projectId, contribution }) => ({
    source: 'team',
    projectId,
    contribution: contribution.keyContributions[0],
  }));
}
