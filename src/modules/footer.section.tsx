import { Footer } from '@/components/footer';
import { Icons } from '@/components/icons';
import { NewsTicker } from '@/components/news-ticker';
import { News } from '@/types/news.interface';

const telegram_stats: News[] = [
  {
    icon: <Icons.dino />,
    title: '128 подписчиков в телеграм канале',
  },
  {
    icon: <Icons.time />,
    title: 'Вика присоеденилась в телегам канал',
  },
  {
    icon: <Icons.coffee />,
    title:
      'Макар прокоментировал "жесть история кайфовая… такие вы милашики, я не могу."',
  },
];

const stats: News[] = [
  {
    icon: <Icons.dino />,
    title: '1203 коммита',
  },
  {
    icon: <Icons.time />,
    title: '34 ночей без сна',
  },
  {
    icon: <Icons.coffee />,
    title: '603 выпитых кружек кофе',
  },
];

export const FooterSection = () => {
  return (
    <div className='pt-24'>
      <NewsTicker newsTop={stats} newsBottom={telegram_stats} />
      <Footer />
    </div>
  );
};
