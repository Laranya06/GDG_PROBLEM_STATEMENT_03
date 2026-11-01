import { Atom, Braces, Code2, Database, FileCode, Figma, GitBranch, Layers, Network, Route, Server, Terminal, Users, Wind, Zap, type LucideIcon } from 'lucide-react';

const TECH_ICONS: Record<string, LucideIcon> = {
  React: Atom,
  TypeScript: FileCode,
  'Tailwind CSS': Wind,
  'HTML & CSS': Code2,
  Figma,
  'Node.js': Server,
  'Express.js': Route,
  MongoDB: Database,
  'REST APIs': Network,
  JavaScript: Braces,
  Python: Terminal,
  Git: GitBranch,
  Vite: Zap,
  'Peer Code Reviews': Users,
};

export function getTechIcon(name: string): LucideIcon {
  return TECH_ICONS[name] ?? Layers;
}
