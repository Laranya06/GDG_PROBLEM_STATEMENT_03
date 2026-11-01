import { Download } from 'lucide-react';
import type { DownloadFile } from '@/types/portfolio';

interface DownloadResumeButtonProps {
  file: DownloadFile;
  className?: string;
  onClick?: () => void;
}

export default function DownloadResumeButton({ file, className = '', onClick }: DownloadResumeButtonProps) {
  return (
    <a
      href={file.href}
      download={file.fileName}
      onClick={onClick}
      className={`group ${className}`}
    >
      <Download aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5 motion-reduce:transition-none" />
      {file.label}
    </a>
  );
}
