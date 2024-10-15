import { getStats } from '@/api/stats.get';
import { useStats } from '@/api/stats.ws';
import { Footer } from '@/components/footer';
import { Icons } from '@/components/icons';
import { NewsTicker } from '@/components/news-ticker';
import { News } from '@/types/news.interface';
import { useEffect, useState } from 'react';

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

const iconMapping: Record<string, JSX.Element> = {
  coffee_cups: <Icons.coffee />,
  sleepless_nights: <Icons.time />,
  commits: <Icons.dino />,
};

export const FooterSection = () => {
  const { data } = useStats();
  const [initialStats, setInitialStats] = useState<News[]>([]);

  useEffect(() => {
    const fetchInitialStats = async () => {
      const response = await getStats();
      const statsWithIcons = response?.data.stats.map((stat) => ({
        icon: iconMapping[stat.stat_id] || <>?</>,
        title: `${stat.count} ${stat.name}`,
      }));
      if (statsWithIcons) setInitialStats(statsWithIcons);
    };

    fetchInitialStats();
  }, []);

  const statsWithIcons: News[] = data?.statCreated
    ? data.statCreated.map((stat) => ({
        icon: iconMapping[stat.stat_id] || <>?</>,
        title: `${stat.count} ${stat.name}`,
      }))
    : initialStats;

  return (
    <div className='pt-24'>
      <NewsTicker newsTop={statsWithIcons} newsBottom={telegram_stats} />
      <Footer />
    </div>
  );
};
