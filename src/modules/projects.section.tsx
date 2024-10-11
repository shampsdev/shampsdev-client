import { ProjectCard } from '@/components/project-card';
import { Project } from '@/types/project.interface';

const projects: Project[] = [
  {
    title: 'DishDash',
    description:
      'Выбирайте интересные места для встреч с друзьями с помощью Telegram-бота DishDash. Свайпайте и открывайте новые локации с друзьями или самостоятельно.',
    tags: [
      'Golang',
      'React',
      'Github Action',
      'Traefik',
      'Watchtower',
      'Docker',
    ],
    image: '/projects/dishdash.png',
  },
  {
    title: 'ВкусВилл',
    description:
      'Решение для оптимизации бизнес-процесса инвентаризации в дарксторах.',
    tags: ['FastAPI', 'VUE', 'Google Collab'],
    image: '/projects/vkusvill.png',
  },
  {
    title: 'SightQuest',
    description:
      'Мы объединили спортивное ориентирование и догонялки в одной мобильной игре, чтобы исследовать город стало еще интереснее. Выполняйте задания, бегайте по городу и догоняйте соперников, чтобы выиграть.',
    tags: ['Django (Python)', 'React Native', 'Nginx', 'Docker'],
    image: '/projects/sightquest.png',
  },
  {
    title: 'KolomnaGo',
    description:
      'Все интересные места Коломны на одной платформе. KolomnaGo помогает туристам и местным жителям быть в курсе всех культурных событий, а организаторам — легко управлять мероприятиями.',
    tags: ['Django (Python)', 'Vue', 'Traefik', 'Docker'],
    image: '',
  },
];

export const ProjectsSection = () => {
  return (
    <div id='projects' className='pt-24'>
      <p className='text-center text-xl pb-16'>А вот наши проекты</p>
      <div className='w-[90%] mx-auto flex flex-col gap-y-10 md:gap-y-40'>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title + index}
            project={project}
            float={index % 2 == 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </div>
  );
};
