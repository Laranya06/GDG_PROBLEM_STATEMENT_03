import { ArrowRight } from 'lucide-react';
import { getTechIcon } from '@/lib/techIcons';

interface RecruiterSkillsProps {
  skills: string[];
  onExplore: () => void;
}

export default function RecruiterSkills({ skills, onExplore }: RecruiterSkillsProps) {
  return (
    <section>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Skills at a Glance</h3>
        <button
          type="button"
          onClick={onExplore}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 transition hover:text-sky-900 dark:text-sky-300 dark:hover:text-white"
        >
          Explore All Skills
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2.5">
        {skills.map((skill) => {
          const Icon = getTechIcon(skill);
          return (
            <li
              key={skill}
              className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-2 text-sm font-medium text-slate-800 ring-1 ring-slate-200 dark:bg-white/10 dark:text-slate-100 dark:ring-white/10"
            >
              <Icon aria-hidden="true" className="h-4 w-4 text-sky-600 dark:text-sky-300" />
              {skill}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
