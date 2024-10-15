import { getStats } from '@/api/stats.get';
import { useStats } from '@/api/stats.ws';
import { Footer } from '@/components/footer';
import { Icons } from '@/components/icons';
import { NewsTicker } from '@/components/news-ticker';
import { News } from '@/types/news.interface';
import { useEffect, useState } from 'react';

const iconMapping: Record<string, JSX.Element> = {
  coffee_cups: <Icons.coffee />,
  sleepless_nights: <Icons.time />,
  github_commit_count: <Icons.dino />,
  telegram_channel_count: <Icons.coffee />,
  telegram_channel_commented: <Icons.time />,
  telegram_channel_joined: <Icons.dino />,
};

export const FooterSection = () => {
  const { data } = useStats();
  const [initialStats, setInitialStats] = useState<News[]>([]);

  useEffect(() => {
    const fetchInitialStats = async () => {
      const response = await getStats();

      if (!response || !response.data || !response.data.stats) return;

      const stats = response.data.stats;

      const statsWithIcons = Object.keys(iconMapping).reduce<News[]>(
        (acc, key) => {
          const matchingStat = stats.find(
            (stat: { stat_id: string }) => stat.stat_id === key
          );

          if (matchingStat) {
            acc.push({
              icon: iconMapping[key],
              title: `${matchingStat.count !== 0 ? matchingStat.count : ''} ${
                matchingStat.name
              }`,
            });
          }

          return acc;
        },
        []
      );

      console.log(statsWithIcons);

      if (statsWithIcons.length > 0) setInitialStats(statsWithIcons);
    };

    fetchInitialStats();
  }, []);

  const statsWithIcons: News[] = data?.statCreated
    ? Object.keys(iconMapping).reduce<News[]>((acc, key) => {
        const matchingStat = data.statCreated.find(
          (stat: { stat_id: string }) => stat.stat_id === key
        );

        if (matchingStat) {
          acc.push({
            icon: iconMapping[key],
            title: `${matchingStat.count !== 0 ? matchingStat.count : ''} ${
              matchingStat.name
            }`,
          });
        }

        return acc;
      }, [])
    : initialStats;

  return (
    <div className='pt-24'>
      <NewsTicker
        newsTop={statsWithIcons.slice(0, 3)}
        newsBottom={statsWithIcons.slice(3, 6)}
      />
      <Footer />
    </div>
  );
};
