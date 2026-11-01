import type { TeamPortfolio } from '@/types/portfolio';

export const teamPortfolio: TeamPortfolio = {
  mode: 'team',
  name: 'CodeNova',
  download: {
    label: 'Download Team Profile',
    href: '/resume-codenova-team-profile.pdf',
    fileName: 'CodeNova-Team-Profile.pdf',
  },
  hero: {
    availability: 'Accepting hackathon and workshop collaborations',
    headline: [
      [{ text: "We're " }, { text: 'CodeNova', highlight: true }, { text: ' 🚀' }],
      [{ text: 'Turning Ideas Into ' }, { text: 'Experiences', highlight: true }, { text: '.' }],
    ],
    subtitle: 'Creative Minds. Clean Code. Real Impact.',
    intro:
      "We're a team of passionate student developers who collaborate to build meaningful digital experiences. From intuitive interfaces to scalable backend solutions, we transform ideas into functional applications.",
    primaryCta: { label: 'Explore Our Projects', href: '#projects' },
    secondaryCta: { label: 'Collaborate With Us', href: '#contact' },
    images: [
      { profileKey: 'team-aarav', alt: 'Portrait of Aarav Sharma, team member', defaultAvatarIndex: 0 },
      { profileKey: 'team-priya', alt: 'Portrait of Priya Verma, team member', defaultAvatarIndex: 1 },
      { profileKey: 'team-rohan', alt: 'Portrait of Rohan Mehta, team member', defaultAvatarIndex: 2 },
    ],
  },
  about: {
    heading: 'About CodeNova',
    paragraphs: [
      'CodeNova brings together three student developers with complementary strengths. We split work by strength, review each other’s code, and ship projects that are easy to maintain.',
      'Our workflow is built on Git branches, peer code reviews, and clear weekly milestones, so every project moves from sketch to working prototype with a shared sense of quality.',
    ],
  },
  skills: {
    heading: 'Team Stack',
    description: 'The combined technologies and workflow tools the team uses across projects.',
    groups: [
      { title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'] },
      { title: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'] },
      { title: 'Workflow', items: ['JavaScript', 'Python', 'Git', 'Peer Code Reviews'] },
    ],
  },
  projects: {
    heading: 'Team Projects',
    description: 'Three collaborative prototypes built by CodeNova. All projects are fictional samples.',
    items: [
      {
        id: 'campusconnect',
        title: 'CampusConnect',
        summary: 'A college event and student community platform for discovering events and joining campus life.',
        category: 'Full-Stack',
        tags: ['React', 'Node.js', 'Express', 'MongoDB'],
        features: ['Event discovery', 'Registration interface', 'Community announcements'],
        accent: 'orange',
        icon: 'calendar',
        thumbnail: { src: '/images/projects/image copy 3.png', alt: 'CampusConnect event platform with featured events and a community feed' },
      },
      {
        id: 'ecotrack',
        title: 'EcoTrack',
        summary: 'A sustainability dashboard that helps students visualize environmental habits and track personal goals.',
        category: 'Frontend',
        tags: ['React', 'JavaScript', 'Tailwind CSS'],
        features: ['Interactive charts', 'Sustainability goals', 'Progress tracking'],
        accent: 'teal',
        icon: 'leaf',
        thumbnail: { src: '/images/projects/image copy 4.png', alt: 'EcoTrack sustainability dashboard with green progress charts and goal cards' },
      },
      {
        id: 'collabboard',
        title: 'CollabBoard',
        summary: 'A collaborative task management concept that helps student teams organize work and own responsibilities.',
        category: 'Full-Stack',
        tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
        features: ['Task organization', 'Team responsibilities', 'Project status tracking'],
        accent: 'cyan',
        icon: 'board',
        thumbnail: { src: '/images/projects/image copy 5.png', alt: 'CollabBoard Kanban board with team avatars, task status tags, and a progress sidebar' },
      },
    ],
  },
  achievements: {
    heading: 'Team Milestones',
    description: 'Clearly labeled sample milestones that reflect how CodeNova works together.',
    items: [
      {
        title: 'College Hackathon Participation',
        description: 'Participated in a 24-hour college hackathon and presented a working application prototype.',
      },
      {
        title: 'Collaborative Project Showcase',
        description: 'Demonstrated a full-stack academic project during a college technical showcase.',
      },
      {
        title: 'Team Development Milestone',
        description: 'Completed three collaborative project prototypes using Git-based version control and peer code reviews.',
      },
    ],
  },
  team: {
    heading: 'Meet Our Team',
    description: 'Three developers with complementary strengths, working as one team.',
    quickSummary: 'Three student developers who split work by strength, review each other’s code, and ship maintainable projects.',
    topSkills: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Git'],
    members: [
      {
        id: 'aarav',
        slug: 'aarav-sharma',
        name: 'Aarav Sharma',
        role: 'Frontend Developer & UI/UX Lead',
        bio: 'Passionate about creating accessible, responsive, and visually engaging user interfaces.',
        accent: 'blue',
        avatar: { profileKey: 'team-aarav', alt: 'Portrait of Aarav Sharma', defaultAvatarIndex: 0 },
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
        socials: [
          { label: 'GitHub (sample)', href: '#experience' },
          { label: 'LinkedIn (sample)', href: '#experience' },
        ],
      },
      {
        id: 'priya',
        slug: 'priya-verma',
        name: 'Priya Verma',
        role: 'Backend Developer',
        bio: 'Focused on designing reliable APIs, managing databases, and developing maintainable backend systems.',
        accent: 'orange',
        avatar: { profileKey: 'team-priya', alt: 'Portrait of Priya Verma', defaultAvatarIndex: 1 },
        skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
        socials: [
          { label: 'GitHub (sample)', href: '#experience' },
          { label: 'LinkedIn (sample)', href: '#experience' },
        ],
      },
      {
        id: 'rohan',
        slug: 'rohan-mehta',
        name: 'Rohan Mehta',
        role: 'Full-Stack Developer & Team Coordinator',
        bio: 'Enjoys connecting frontend and backend systems while coordinating collaborative development.',
        accent: 'teal',
        avatar: { profileKey: 'team-rohan', alt: 'Portrait of Rohan Mehta', defaultAvatarIndex: 2 },
        skills: ['JavaScript', 'React', 'Python', 'Git'],
        socials: [
          { label: 'GitHub (sample)', href: '#experience' },
          { label: 'LinkedIn (sample)', href: '#experience' },
        ],
      },
    ],
  },
  contact: {
    heading: "Let's Collaborate",
    description:
      'Interested in a joint project, a hackathon team, or a workshop? Send CodeNova a message and our team will reply.',
    email: 'codenova.team@example.com',
  },
};
