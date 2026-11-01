import ProjectThumbnail from '@/components/ProjectThumbnail';
import type { ProjectItem } from '@/types/portfolio';

interface ProjectPreviewProps {
  project: ProjectItem;
}

const ZOOM_CLASS =
  'h-full w-full transition duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100';

export default function ProjectPreview({ project }: ProjectPreviewProps) {
  if (project.thumbnail) {
    return (
      <img
        src={project.thumbnail.src}
        alt={project.thumbnail.alt}
        width={1200}
        height={750}
        loading="lazy"
        decoding="async"
        className={`object-cover ${ZOOM_CLASS}`}
      />
    );
  }

  return (
    <div className={ZOOM_CLASS}>
      <ProjectThumbnail icon={project.icon} accent={project.accent} title={project.title} />
    </div>
  );
}
