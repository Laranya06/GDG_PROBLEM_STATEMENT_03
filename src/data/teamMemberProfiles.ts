import { individualPortfolio } from '@/data/individualPortfolio';
import { getMemberProjectRefs } from '@/data/teamContributions';
import { teamPortfolio } from '@/data/teamPortfolio';
import type { MemberProfile, PortfolioMode, ProjectItem } from '@/types/portfolio';

export const memberProfiles: Record<string, MemberProfile> = {
  aarav: {
    location: 'India',
    quickSummary: 'Computer Science student building responsive, accessible React interfaces and reusable component systems.',
    topSkills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML & CSS', 'Figma'],
    email: 'aarav.sharma@example.com',
    status: 'Open to Learning & Collaboration',
    about: {
      paragraphs: [
        "I'm a Computer Science student passionate about creating modern, responsive, and user-friendly web applications. I enjoy combining visual design with clean, maintainable code to build intuitive digital experiences.",
        'My primary interests include frontend engineering, UI/UX design, and accessibility.',
      ],
      highlights: [
        { label: 'Educational background', text: 'Undergraduate Computer Science student (sample details).' },
        { label: 'Technical interests', text: 'Frontend engineering, component design, and web accessibility.' },
        {
          label: 'Development philosophy',
          text: 'Interfaces should feel obvious. I build reusable, readable components that a teammate can change without fear.',
        },
        {
          label: 'Problem-solving approach',
          text: 'I start from the user goal, sketch the screen, build the smallest working version, then refine it with feedback.',
        },
        {
          label: 'Career aspirations',
          text: 'To work as a frontend engineer on products where design quality and accessibility matter.',
        },
      ],
    },
    experience: [
      {
        period: '2023',
        title: 'Frontend Development Foundations',
        context: 'Course labs and self-study (sample)',
        contributions: ['Learned HTML, CSS, and JavaScript fundamentals.', 'Built responsive pages and interactive UI components.'],
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
      },
      {
        period: '2024',
        title: 'React Application Development',
        context: 'Personal projects (sample)',
        contributions: [
          'Developed reusable React components.',
          'Explored hooks, state management, and API integration.',
          'Worked with Tailwind CSS and Git.',
        ],
        technologies: ['React', 'Tailwind CSS', 'Git'],
      },
      {
        period: '2025',
        title: 'Academic Project Development',
        context: 'CodeNova team projects (sample)',
        contributions: [
          'Contributed frontend interfaces to CodeNova projects.',
          'Designed responsive dashboards and reusable UI components.',
          'Practiced collaborative development and peer code reviews.',
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
      },
    ],
    skillGroups: [
      { title: 'Primary Technologies', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
      { title: 'Supporting Technologies', items: ['HTML5', 'CSS3'] },
      { title: 'Tools & Collaboration', items: ['Figma', 'Git'] },
    ],
    projects: [
      {
        source: 'individual',
        projectId: 'taskflow',
        contribution: 'Built the Kanban board interface and the task card components.',
      },
      {
        source: 'individual',
        projectId: 'weatherwise',
        contribution: 'Designed the forecast cards and the responsive dashboard layout.',
      },
      ...getMemberProjectRefs('aarav'),
    ],
    achievements: [
      {
        title: 'Completed Frontend Coursework',
        description: 'Finished a frontend development course covering responsive layouts and interactive components.',
      },
      {
        title: 'Built Academic Prototypes',
        description: 'Delivered multiple responsive academic project prototypes with reusable interface components.',
      },
    ],
  },
  priya: {
    location: 'India',
    quickSummary: 'Computer Science student designing reliable REST APIs and database models that keep applications fast and predictable.',
    topSkills: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'REST APIs', 'Git'],
    email: 'priya.verma@example.com',
    status: 'Open to Learning & Collaboration',
    about: {
      paragraphs: [
        "I'm a Computer Science student interested in building reliable backend applications and well-structured APIs. I enjoy understanding how software systems process information, communicate with databases, and support seamless frontend experiences.",
        'My learning focuses on Node.js, Python, REST APIs, and database design.',
      ],
      highlights: [
        { label: 'Educational background', text: 'Undergraduate Computer Science student (sample details).' },
        { label: 'Technical interests', text: 'Backend architecture, REST API design, and database modeling.' },
        {
          label: 'Development philosophy',
          text: 'A good API is predictable and well documented. I value clear contracts and validation at the edges.',
        },
        {
          label: 'Problem-solving approach',
          text: 'I start with the data: its shape, its readers, and how it changes. Then I design the endpoints and test the edge cases.',
        },
        {
          label: 'Career aspirations',
          text: 'To become a backend engineer who builds reliable services for products used by many people.',
        },
      ],
    },
    experience: [
      {
        period: '2023',
        title: 'Programming Foundations',
        context: 'Course coursework (sample)',
        contributions: ['Learned Python and JavaScript fundamentals.', 'Practiced problem-solving and data structures.'],
        technologies: ['Python', 'JavaScript'],
      },
      {
        period: '2024',
        title: 'Backend Development',
        context: 'Personal learning projects (sample)',
        contributions: [
          'Explored Node.js and Express.js.',
          'Built REST API prototypes.',
          'Practiced MongoDB queries and database modeling.',
        ],
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      },
      {
        period: '2025',
        title: 'Team Project Development',
        context: 'CodeNova academic projects (sample)',
        contributions: [
          'Contributed API designs to CodeNova academic projects.',
          'Worked on validation and backend error handling.',
          'Collaborated with frontend developers on API contracts.',
        ],
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'Postman'],
      },
    ],
    skillGroups: [
      { title: 'Primary Technologies', items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'] },
      { title: 'Supporting Technologies', items: ['Python', 'JavaScript'] },
      { title: 'Tools & Collaboration', items: ['Git', 'Postman'] },
    ],
    projects: [
      ...getMemberProjectRefs('priya'),
      {
        source: 'individual',
        projectId: 'studyhub',
        contribution: 'Built the course progress API and the MongoDB data models.',
      },
    ],
    achievements: [
      {
        title: 'Built REST API Prototypes',
        description: 'Developed REST API prototypes for academic applications, with documented routes and error responses.',
      },
      {
        title: 'Completed Backend Modules',
        description: 'Finished backend and database development learning modules covering Express and MongoDB.',
      },
    ],
  },
  rohan: {
    location: 'India',
    quickSummary: 'Computer Science student connecting frontend and backend work to deliver complete, practical web applications.',
    topSkills: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'JavaScript', 'Git'],
    email: 'rohan.mehta@example.com',
    status: 'Open to Learning & Collaboration',
    about: {
      paragraphs: [
        "I'm a Computer Science student who enjoys developing complete web applications, from frontend interfaces to backend functionality.",
        'I am particularly interested in collaborative software development, system integration, and applications that solve practical problems.',
      ],
      highlights: [
        { label: 'Educational background', text: 'Undergraduate Computer Science student (sample details).' },
        { label: 'Technical interests', text: 'Full-stack integration, collaborative workflows, and practical web applications.' },
        {
          label: 'Development philosophy',
          text: 'Software works best when the whole team understands it. I connect frontend and backend work early.',
        },
        {
          label: 'Problem-solving approach',
          text: 'I map dependencies and blockers first, then split the work into small milestones so progress stays visible.',
        },
        {
          label: 'Career aspirations',
          text: 'To lead small engineering teams and build full-stack products that solve real problems.',
        },
      ],
    },
    experience: [
      {
        period: '2023',
        title: 'Software Development Foundations',
        context: 'Course coursework (sample)',
        contributions: ['Studied JavaScript, HTML, CSS, and core programming concepts.', 'Built small web applications.'],
        technologies: ['JavaScript', 'HTML', 'CSS'],
      },
      {
        period: '2024',
        title: 'Full-Stack Development',
        context: 'Personal projects (sample)',
        contributions: [
          'Learned React and Node.js.',
          'Explored REST APIs and MongoDB.',
          'Built frontend and backend integration prototypes.',
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
      },
      {
        period: '2025',
        title: 'CodeNova Team Collaboration',
        context: 'CodeNova academic projects (sample)',
        contributions: [
          'Coordinated academic project milestones.',
          'Organized Git-based development workflows.',
          'Contributed frontend and backend features.',
        ],
        technologies: ['React', 'Express.js', 'TypeScript', 'Git'],
      },
    ],
    skillGroups: [
      { title: 'Primary Technologies', items: ['React', 'Node.js', 'Express.js', 'MongoDB'] },
      { title: 'Supporting Technologies', items: ['JavaScript', 'TypeScript', 'REST APIs'] },
      { title: 'Tools & Collaboration', items: ['Git', 'Peer Code Reviews'] },
    ],
    projects: [
      ...getMemberProjectRefs('rohan'),
    ],
    achievements: [
      {
        title: 'Coordinated Three Prototypes',
        description: 'Helped coordinate three academic project prototypes from planning through to a working demo.',
      },
      {
        title: 'Practiced Team Workflows',
        description: 'Practiced collaborative development and Git workflows with regular peer code reviews.',
      },
    ],
  },
};

const PROJECTS_BY_SOURCE: Record<PortfolioMode, ProjectItem[]> = {
  individual: individualPortfolio.projects.items,
  team: teamPortfolio.projects.items,
};

export function findProjectForRef(source: PortfolioMode, projectId: string): ProjectItem | undefined {
  return PROJECTS_BY_SOURCE[source].find((project) => project.id === projectId);
}
