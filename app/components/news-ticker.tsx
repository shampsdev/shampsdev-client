import { News } from '@/types/news.interface';
import Marquee from 'react-fast-marquee';

interface NewsTickerProps {
  newsTop: News[];
  newsBottom: News[];
}

export const NewsTicker = ({ newsTop, newsBottom }: NewsTickerProps) => {
  return (
    <div className='pb-10 -mt-8'>
      <Marquee
        direction='right'
        autoFill
        className='flex justify-around py-4 gap-2'
      >
        {newsTop.map((x, index) => (
          <div
            key={`${index}_${x.title}}`}
            className='pr-10 flex items-center gap-5'
          >
            {x.icon} <span className='text-lg md:text-xl'>{x.title}</span>
          </div>
        ))}
      </Marquee>
      <Marquee autoFill className='flex justify-around py-4 gap-2'>
        {newsBottom.map((x, index) => (
          <div
            key={`${index}_${x.title}}`}
            className='pr-10 flex items-center gap-5'
          >
            {x.icon} <span className='text-lg md:text-xl'>{x.title}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
