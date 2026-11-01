import type { AccentKey } from '@/types/portfolio';

export interface AccentStyle {
  gradient: string;
  text: string;
  soft: string;
  ring: string;
  glow: string;
}

export const ACCENT_STYLES: Record<AccentKey, AccentStyle> = {
  blue: {
    gradient: 'bg-gradient-to-br from-blue-500 to-cyan-400',
    text: 'text-blue-700 dark:text-blue-300',
    soft: 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300',
    ring: 'ring-blue-200 dark:ring-blue-500/30',
    glow: 'shadow-blue-500/25',
  },
  orange: {
    gradient: 'bg-gradient-to-br from-orange-500 to-rose-400',
    text: 'text-orange-700 dark:text-orange-300',
    soft: 'bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300',
    ring: 'ring-orange-200 dark:ring-orange-500/30',
    glow: 'shadow-orange-500/25',
  },
  cyan: {
    gradient: 'bg-gradient-to-br from-cyan-500 to-blue-500',
    text: 'text-cyan-700 dark:text-cyan-300',
    soft: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300',
    ring: 'ring-cyan-200 dark:ring-cyan-500/30',
    glow: 'shadow-cyan-500/25',
  },
  coral: {
    gradient: 'bg-gradient-to-br from-rose-400 to-pink-500',
    text: 'text-rose-600 dark:text-rose-300',
    soft: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300',
    ring: 'ring-rose-200 dark:ring-rose-500/30',
    glow: 'shadow-rose-400/25',
  },
  yellow: {
    gradient: 'bg-gradient-to-br from-amber-400 to-orange-400',
    text: 'text-amber-700 dark:text-amber-300',
    soft: 'bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300',
    ring: 'ring-amber-200 dark:ring-amber-400/30',
    glow: 'shadow-amber-400/25',
  },
  teal: {
    gradient: 'bg-gradient-to-br from-teal-500 to-emerald-400',
    text: 'text-teal-700 dark:text-teal-300',
    soft: 'bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300',
    ring: 'ring-teal-200 dark:ring-teal-500/30',
    glow: 'shadow-teal-500/25',
  },
};
