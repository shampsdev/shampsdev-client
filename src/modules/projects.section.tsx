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
    image: '',
  },
  {
    title: 'SightQuest',
    description:
      'Выполняйте задания, бегайте по городу и догоняйте соперников, чтобы выиграть.',
    tags: ['Django (Python)', 'React Native', 'Nginx', 'Docker'],
    image: '',
  },
  {
    title: 'KolomnaGo',
    description:
      'Помогает туристам и местным жителям быть в курсе всех культурных событий, а организаторам — легко управлять мероприятиями.',
    tags: ['Django (Python)', 'Vue', 'Traefik', 'Docker'],
    image: '',
  },
];

export const ProjectsSection = () => {
  return (
    <>
      {projects.map((x) => (
        <>{x.title}</>
      ))}
    </>
  );
};
