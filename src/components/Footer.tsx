interface FooterProps {
  name: string;
}

export default function Footer({ name }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-night-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">{name}</p>
        <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} {name}. Fictional sample portfolio for demonstration purposes only.
        </p>
      </div>
    </footer>
  );
}
