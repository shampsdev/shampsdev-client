import { Footer } from '@/components/footer';
import { Icons } from '@/components/icons';
import { NewsTicker } from '@/components/news-ticker';
import { News } from '@/types/news.interface';

const iconMapping: Record<string, JSX.Element> = {
  coffee_cups: <Icons.coffee />,
  sleepless_nights: <Icons.time />,
  github_commit_count: <Icons.dino />,
  telegram_channel_count: <Icons.coffee />,
  telegram_channel_commented: <Icons.time />,
  telegram_channel_joined: <Icons.dino />,
  last_subscriber: <Icons.dino />,
};

// Захардкоженные значения для бегущих строк
const hardcodedStats = [
  {
    stat_id: 'sleepless_nights',
    name: '',
    count: 126,
    title: '126 ночей без сна',
  },
  {
    stat_id: 'github_commit_count',
    name: '',
    count: 1786,
    title: '1786 контрибуций',
  },
  {
    stat_id: 'coffee_cups',
    name: '',
    count: 650,
    title: '650 кружек кофе',
  },
  {
    stat_id: 'last_subscriber',
    name: '',
    count: 0,
    title: 'последний подписчик — Homik🪬',
  },
  {
    stat_id: 'telegram_channel_count',
    name: '',
    count: 349,
    title: '349 в телеграм канале',
  },
];

export const FooterSection = () => {
  const statsWithIcons: News[] = hardcodedStats.map(stat => ({
    icon: iconMapping[stat.stat_id],
    title: stat.title,
  }));

  return (
    <div className='pt-24'>
      <NewsTicker
        newsTop={statsWithIcons.slice(0, 3)}
        newsBottom={statsWithIcons.slice(3, 5)}
      />
      <Footer />
    </div>
  );
};
