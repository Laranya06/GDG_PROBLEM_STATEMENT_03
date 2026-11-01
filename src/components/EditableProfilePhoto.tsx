import { useState } from 'react';
import { Camera } from 'lucide-react';
import AvatarPickerDialog from '@/components/AvatarPickerDialog';
import { AVATAR_PRESETS } from '@/data/avatarPresets';
import { useProfileAvatars } from '@/context/ProfileAvatarsContext';
import type { ProfilePhoto } from '@/types/portfolio';

interface EditableProfilePhotoProps {
  photo: ProfilePhoto;
  className?: string;
  imageClassName: string;
}

export default function EditableProfilePhoto({ photo, className = '', imageClassName }: EditableProfilePhotoProps) {
  const { getAvatarIndex } = useProfileAvatars();
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const avatarIndex = getAvatarIndex(photo.profileKey, photo.defaultAvatarIndex);
  const preset = AVATAR_PRESETS[avatarIndex] ?? AVATAR_PRESETS[photo.defaultAvatarIndex];

  return (
    <div className={`relative inline-flex ${className}`}>
      <img
        src={preset.src}
        alt={photo.alt}
        width={200}
        height={200}
        className={`object-cover ${imageClassName}`}
      />
      <button
        type="button"
        onClick={() => setIsPickerOpen(true)}
        aria-label={`Change profile photo: ${photo.alt}`}
        title="Change photo"
        className="absolute -bottom-1 -right-1 pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg ring-2 ring-white transition duration-200 hover:scale-110 hover:bg-sky-700 motion-reduce:hover:scale-100 dark:bg-sky-500 dark:ring-night-card dark:hover:bg-sky-600"
      >
        <Camera aria-hidden="true" className="h-4 w-4" />
      </button>
      {isPickerOpen && (
        <AvatarPickerDialog
          photo={photo}
          currentIndex={avatarIndex}
          onClose={() => setIsPickerOpen(false)}
        />
      )}
    </div>
  );
}
