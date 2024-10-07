import { Project } from '@/types/project.interface';
import { twMerge } from 'tailwind-merge';
import { ProjectTag } from './project-tag';

interface ProjectCardProps {
  project: Project;
  float: 'left' | 'right';
}

export const ProjectCard = ({ project, float }: ProjectCardProps) => {
  return (
    <div
      className={twMerge(
        'flex gap-5 md:gap-20 flex-col md:flex-row',
        float == 'left' ? '' : 'md:flex-row-reverse'
      )}
    >
      <div className='aspect-video bg-muted rounded-xl border md:w-[60%] overflow-hidden'>
        {project.image && <img src={project.image} className='h-full w-full object-cover' alt=''/>}
      </div>
      <div className='md:w-[40%] flex justify-between flex-col'>
        <div>
          <p className='text-xl'>{project.title}</p>
          <p className='text-muted-foreground'>{project.description}</p>
        </div>
        <div className='gap-1 flex flex-wrap'>
          {project.tags.map((title) => (
            <ProjectTag title={title} />
          ))}
        </div>
      </div>
    </div>
  );
};
