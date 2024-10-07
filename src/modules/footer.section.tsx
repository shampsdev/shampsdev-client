import { Footer } from '@/components/footer';
import { Icons } from '@/components/icons';
import { NewsTicker } from '@/components/news-ticker';
import { News } from '@/types/news.interface';

const news: News[] = [
  {
    title: 'пупупупупу',
    icon: <Icons.dino />,
  },
  {
    title: 'пупупупупу',
    icon: <Icons.time />,
  },
  {
    title: 'пупупупупу',
    icon: <Icons.coffee />,
  },
  {
    title: 'пупупупупу',
    icon: <Icons.dino />,
  },
  {
    title: 'пупупупупу',
    icon: <Icons.time />,
  },
  {
    title: 'пупупупупу',
    icon: <Icons.coffee />,
  },
  {
    title: 'пупупупупу',
    icon: <Icons.dino />,
  },
  {
    title: 'пупупупупу',
    icon: <Icons.time />,
  },
  {
    title: 'пупупупупу',
    icon: <Icons.coffee />,
  },
];

export const FooterSection = () => {
  return (
    <div className='h-fit'>
      <NewsTicker news={news} />
      <Footer />
    </div>
  );
};
