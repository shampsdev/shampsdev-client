import { News } from '@/types/news.interface';
import Marquee from 'react-fast-marquee';

interface NewsTickerProps {
  newsTop: News[];
  newsBottom: News[];
}

export const NewsTicker = ({ newsTop, newsBottom }: NewsTickerProps) => {
  return (
    <div className='py-10'>
      {/* <hr className='w-[90%] mx-auto ' /> */}
      <Marquee
        direction='right'
        autoFill
        className='flex justify-around py-4 gap-2'
      >
        {newsTop.map((x) => (
          <div className='pr-10 flex items-center gap-5'>
            {x.icon} <span className='text-xl'>{x.title}</span>
          </div>
        ))}
      </Marquee>
      {/* <hr className='w-[90%] mx-auto ' /> */}
      <Marquee autoFill className='flex justify-around py-4 gap-2'>
        {newsBottom.map((x) => (
          <div className='pr-10 flex items-center gap-5'>
            {x.icon} <span className='text-xl'>{x.title}</span>
          </div>
        ))}
      </Marquee>
      {/* <hr className='w-[90%] mx-auto ' /> */}
    </div>
  );
};
