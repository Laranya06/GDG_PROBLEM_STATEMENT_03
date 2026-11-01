import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, X } from 'lucide-react';
import { AVATAR_PRESETS } from '@/data/avatarPresets';
import { useProfileAvatars } from '@/context/ProfileAvatarsContext';
import type { ProfilePhoto } from '@/types/portfolio';

interface AvatarPickerDialogProps {
  photo: ProfilePhoto;
  currentIndex: number;
  onClose: () => void;
}

export default function AvatarPickerDialog({ photo, currentIndex, onClose }: AvatarPickerDialogProps) {
  const { saveAvatarIndex } = useProfileAvatars();
  const [selectedIndex, setSelectedIndex] = useState(currentIndex);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleSelect = async (index: number) => {
    if (isSaving || index === selectedIndex) return;
    setIsSaving(true);
    setErrorMessage(null);
    try {
      await saveAvatarIndex(photo.profileKey, index);
      setSelectedIndex(index);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm motion-safe:animate-fade-in" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="avatar-picker-title"
        className="card relative w-full max-w-md p-6 motion-safe:animate-fade-in sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="avatar-picker-title" className="text-lg font-bold text-slate-900 dark:text-white">
              Choose a profile photo
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Pick one of the sample avatars below.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo picker"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-3" role="group" aria-label="Sample avatars">
          {AVATAR_PRESETS.map((preset, index) => {
            const isSelected = index === selectedIndex;
            return (
              <button
                key={preset.src}
                type="button"
                onClick={() => handleSelect(index)}
                disabled={isSaving}
                aria-pressed={isSelected}
                aria-label={`Avatar ${index + 1}: ${preset.alt}`}
                className={`relative aspect-square overflow-hidden rounded-2xl ring-2 ring-offset-2 ring-offset-white transition duration-200 hover:scale-105 disabled:cursor-wait motion-reduce:hover:scale-100 dark:ring-offset-night-card ${
                  isSelected ? 'ring-sky-600 dark:ring-sky-400' : 'ring-transparent hover:ring-slate-300 dark:hover:ring-slate-600'
                }`}
              >
                <img src={preset.src} alt="" width={940} height={650} className="h-full w-full object-cover" />
                {isSelected && (
                  <span className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-white shadow ring-2 ring-white dark:bg-sky-500 dark:ring-night-card">
                    <Check aria-hidden="true" className="h-3.5 w-3.5" />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-6 min-h-[1.25rem]" aria-live="polite">
          {isSaving && <p className="text-sm text-slate-600 dark:text-slate-400">Saving your choice...</p>}
          {errorMessage && <p className="text-sm text-rose-600 dark:text-rose-400">{errorMessage}</p>}
        </div>

        <div className="mt-4 flex justify-end">
          <button type="button" onClick={onClose} className="btn-secondary">
            Done
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
