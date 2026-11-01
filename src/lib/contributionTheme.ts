export interface MemberTheme {
  gradient: string;
  text: string;
  badge: string;
  ring: string;
}

export const MEMBER_THEMES: Record<string, MemberTheme> = {
  aarav: {
    gradient: 'from-blue-500 to-purple-500',
    text: 'text-blue-700 dark:text-blue-300',
    badge: 'bg-blue-50 text-blue-800 ring-1 ring-blue-200 dark:bg-blue-500/15 dark:text-blue-200 dark:ring-blue-400/30',
    ring: 'ring-blue-400',
  },
  priya: {
    gradient: 'from-violet-500 to-pink-500',
    text: 'text-violet-700 dark:text-violet-300',
    badge: 'bg-violet-50 text-violet-800 ring-1 ring-violet-200 dark:bg-violet-500/15 dark:text-violet-200 dark:ring-violet-400/30',
    ring: 'ring-violet-400',
  },
  rohan: {
    gradient: 'from-teal-500 to-cyan-500',
    text: 'text-teal-700 dark:text-teal-300',
    badge: 'bg-teal-50 text-teal-800 ring-1 ring-teal-200 dark:bg-teal-500/15 dark:text-teal-200 dark:ring-teal-400/30',
    ring: 'ring-teal-400',
  },
};
