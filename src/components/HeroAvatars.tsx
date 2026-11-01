import type { ReactNode } from 'react';
import { Atom, Code2, Laptop } from 'lucide-react';
import EditableProfilePhoto from '@/components/EditableProfilePhoto';
import type { ProfilePhoto } from '@/types/portfolio';

interface FloatingChipProps {
  className: string;
  children: ReactNode;
  label: string;
}

function FloatingChip({ className, children, label }: FloatingChipProps) {
  return (
    <div
      aria-label={label}
      role="img"
      className={`absolute flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-bold shadow-xl shadow-slate-900/10 ring-1 ring-slate-200 motion-safe:animate-float dark:bg-night-card dark:ring-slate-700 sm:h-14 sm:w-14 ${className}`}
    >
      {children}
    </div>
  );
}

export function SingleAvatarStage({ photo }: { photo: ProfilePhoto }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-orange-600 to-cyan-400 opacity-90 blur-3xl" />
      <div className="relative mx-auto flex h-full w-[82%] items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-orange-600 to-cyan-400 p-1.5 shadow-2xl shadow-orange-600/30">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-blue-50 to-orange-50 dark:from-night-card dark:to-night">
          <EditableProfilePhoto
            photo={photo}
            className="h-full w-full"
            imageClassName="h-full w-full rounded-full motion-safe:animate-float"
          />
        </div>
      </div>

      <FloatingChip label="React" className="-left-2 top-[8%] text-cyan-500 motion-safe:[animation-delay:-1s] sm:-left-4">
        <Atom aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" />
      </FloatingChip>
      <FloatingChip label="JavaScript" className="-right-1 top-[18%] bg-amber-400 text-slate-900 ring-amber-300 motion-safe:[animation-delay:-2s] sm:-right-3">
        JS
      </FloatingChip>
      <FloatingChip label="Code" className="-left-1 bottom-[14%] text-orange-600 motion-safe:[animation-delay:-3s] sm:-left-3 dark:text-orange-300">
        <Code2 aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" />
      </FloatingChip>
      <FloatingChip label="Laptop" className="-right-2 bottom-[6%] text-blue-500 motion-safe:[animation-delay:-4s] sm:-right-4">
        <Laptop aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" />
      </FloatingChip>
    </div>
  );
}

export function TeamAvatarStage({ photos }: { photos: ProfilePhoto[] }) {
  return (
    <div className="relative mx-auto flex w-full max-w-md flex-col items-center gap-6">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-orange-500/20 to-rose-300/30 blur-3xl" />
      <div className="relative flex items-center justify-center pt-6">
        {photos.map((photo, index) => (
          <EditableProfilePhoto
            key={photo.profileKey}
            photo={photo}
            className={`${index === 0 ? '' : '-ml-8 sm:-ml-10'} ${index === 1 ? 'relative -top-4' : ''} motion-safe:animate-float`}
            imageClassName="h-28 w-28 rounded-full bg-white ring-4 ring-white shadow-2xl transition-transform duration-300 hover:z-10 hover:scale-110 motion-reduce:transition-none sm:h-36 sm:w-36 dark:ring-night-card"
          />
        ))}
      </div>
      <p className="relative text-center text-sm font-medium text-slate-600 dark:text-slate-400">
        Three members. One team. Shared code reviews and weekly sprints.
      </p>
    </div>
  );
}
