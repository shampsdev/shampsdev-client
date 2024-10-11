import { Project } from "@/types/project.interface";
import { twMerge } from "tailwind-merge";
import { ProjectTag } from "./project-tag";

interface ProjectCardProps {
  project: Project;
  float: "left" | "right";
}

export const ProjectCard = ({ project, float }: ProjectCardProps) => {
  return (
    <div
      className={twMerge(
        "flex gap-5 md:gap-20 flex-col md:flex-row",
        float == "left" ? "" : "md:flex-row-reverse"
      )}
    >
      <div className='bg-muted aspect-[76/39] rounded-xl border md:w-[60%] overflow-hidden'>
        {project.image && (
          <img
            src={project.image}
            className='w-full h-full object-fill'
            alt=''
          />
        )}
      </div>
      <div className='md:w-[40%] flex justify-between flex-col'>
        <div>
          <p className='text-xl pb-2'>{project.title}</p>
          <p className='text-lg text-muted-foreground pb-2'>{project.description}</p>
        </div>
        <div className='gap-1 flex flex-wrap'>
          {project.tags.map((title, index) => (
            <ProjectTag
              key={`${index}_${title}`}
              title={title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
