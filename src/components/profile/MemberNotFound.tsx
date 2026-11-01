import BackToTeamLink from '@/components/profile/BackToTeamLink';
import ThemeToggle from '@/components/ThemeToggle';

export default function MemberNotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <BackToTeamLink />
        <ThemeToggle />
      </header>
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="card max-w-md p-8 text-center">
          <p className="eyebrow">Not found</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Team member not found</h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            This profile does not exist. Return to the CodeNova team to browse our members.
          </p>
          <div className="mt-8 flex justify-center">
            <BackToTeamLink label="Back to Team" className="btn-primary px-5 py-2.5 hover:translate-y-0" />
          </div>
        </div>
      </main>
    </div>
  );
}
