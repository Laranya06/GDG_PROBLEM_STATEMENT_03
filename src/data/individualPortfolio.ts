import type { IndividualPortfolio } from '@/types/portfolio';

export const individualPortfolio: IndividualPortfolio = {
  mode: 'individual',
  name: 'Aarav Sharma',
  download: {
    label: 'Download Resume',
    href: '/resume-aarav-sharma.pdf',
    fileName: 'Aarav-Sharma-Resume.pdf',
  },
  hero: {
    availability: 'Open to internships and freelance projects',
    headline: [
      [{ text: "Hey, I'm Aarav " }, { text: '👋' }],
      [{ text: 'I Build ' }, { text: 'Things', highlight: true }, { text: ' for the Web.' }],
    ],
    subtitle: 'Full-Stack Developer & Computer Science Student',
    intro:
      'I turn messy problems into clean, fast, and accessible web applications. From polished React interfaces to Node.js APIs, I care about the details users feel and the code other developers can maintain.',
    primaryCta: { label: 'View My Projects', href: '#projects' },
    secondaryCta: { label: 'Get in Touch', href: '#contact' },
    images: [{ profileKey: 'individual', alt: 'Portrait of Aarav Sharma', defaultAvatarIndex: 0 }],
  },
  about: {
    heading: 'About Me',
    paragraphs: [
      'I am a Computer Science student who enjoys building products end to end: planning the user flow, designing the interface, and wiring up the data behind it.',
      'Outside of class I experiment with accessibility, performance, and clean component design. I learn fastest by shipping small projects, reviewing my code, and asking for feedback early.',
    ],
  },
  skills: {
    heading: 'Skills & Technologies',
    description: 'The tools I use daily to design, build, and ship web applications.',
    groups: [
      { title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML & CSS', 'Figma'] },
      { title: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'] },
      { title: 'Tools & Languages', items: ['JavaScript', 'Python', 'Git', 'Vite'] },
    ],
  },
  projects: {
    heading: 'Selected Projects',
    description: 'Three individual projects that show how I approach design, data, and code quality.',
    items: [
      {
        id: 'taskflow',
        title: 'TaskFlow',
        summary:
          'A modern productivity application that helps users organize tasks, manage priorities, and track daily progress.',
        category: 'Frontend',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Local Storage'],
        features: ['Kanban task board', 'Priority indicators', 'Progress tracking'],
        accent: 'orange',
        icon: 'board',
        thumbnail: { src: '/images/projects/image.png', alt: 'TaskFlow Kanban board with To Do, In Progress, and Done columns' },
      },
      {
        id: 'weatherwise',
        title: 'WeatherWise',
        summary:
          'A beautiful, responsive weather application that helps users explore weather conditions and forecasts for different cities.',
        category: 'Frontend',
        tags: ['React', 'JavaScript', 'CSS', 'REST APIs'],
        features: ['City search', 'Five-day forecast', 'Humidity and wind details'],
        accent: 'cyan',
        icon: 'chart',
        thumbnail: { src: '/images/projects/image copy.png', alt: 'WeatherWise dashboard with a current temperature and five-day forecast' },
      },
      {
        id: 'studyhub',
        title: 'StudyHub',
        summary:
          'A student-focused learning platform for managing study resources, monitoring learning progress, and organizing academic goals.',
        category: 'Full-Stack',
        tags: ['React', 'Node.js', 'Express', 'MongoDB'],
        features: ['Course dashboard', 'Study resource cards', 'Learning progress indicators'],
        accent: 'coral',
        icon: 'notes',
        thumbnail: { src: '/images/projects/image copy 2.png', alt: 'StudyHub course dashboard with progress bars and a calendar' },
      },
    ],
  },
  journey: {
    heading: 'Learning Journey',
    description: 'How my path from first lines of code to full-stack development has unfolded.',
    items: [
      {
        period: 'Year 1',
        title: 'Started Computer Science',
        description: 'Began with C and Python, building small command-line tools to understand how programs work.',
      },
      {
        period: 'Year 2',
        title: 'Discovered Frontend Development',
        description: 'Built my first React projects and fell in love with interface craft, responsiveness, and accessibility.',
      },
      {
        period: 'Year 3',
        title: 'Full-Stack Foundations',
        description: 'Learned Node.js, Express, and MongoDB, and shipped my first end-to-end application.',
      },
      {
        period: 'Now',
        title: 'Building in Production Mode',
        description: 'Focusing on maintainable architecture, thorough testing, and polished user experiences.',
      },
    ],
  },
  achievements: {
    heading: 'Individual Achievements',
    description: 'Personal milestones from my recent work. These are sample entries for demonstration.',
    items: [
      {
        title: 'Shipped Three Complete Projects',
        description: 'Designed, built, and documented three end-to-end web applications from idea to working prototype.',
      },
      {
        title: 'Accessibility-First Redesign',
        description: 'Audited a personal project and improved keyboard navigation, focus states, and text contrast.',
      },
      {
        title: 'Consistent Build Habit',
        description: 'Maintained a steady practice of weekly commits and small, reviewable pull requests.',
      },
    ],
  },
  contact: {
    heading: "Let's Connect",
    description:
      'Have a question, an internship opportunity, or a project idea? Send me a message and I will get back to you.',
    email: 'aarav.sharma@example.com',
  },
};
