import { useEffect, useState } from 'react';

const LOCATION_CHANGE_EVENT = 'locationchange';
const TEAM_MEMBER_PATH = /^\/team\/([^/]+)\/?$/;

export function usePathname(): string {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const handleChange = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handleChange);
    window.addEventListener(LOCATION_CHANGE_EVENT, handleChange);
    return () => {
      window.removeEventListener('popstate', handleChange);
      window.removeEventListener(LOCATION_CHANGE_EVENT, handleChange);
    };
  }, []);

  return pathname;
}

export function navigateTo(href: string) {
  window.history.pushState(null, '', href);
  if (!href.includes('#')) window.scrollTo({ top: 0, behavior: 'instant' });
  window.dispatchEvent(new Event(LOCATION_CHANGE_EVENT));
}

export function teamMemberPath(slug: string): string {
  return `/team/${slug}`;
}

export function matchTeamMemberSlug(pathname: string): string | null {
  const match = TEAM_MEMBER_PATH.exec(pathname);
  return match ? match[1] : null;
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  window.history.replaceState(window.history.state, '', `#${id}`);
}
