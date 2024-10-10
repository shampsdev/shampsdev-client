import { News } from "@/types/news.interface";
import Marquee from "react-fast-marquee";

interface NewsTickerProps {
  news: News[];
}

export const NewsTicker = ({ news }: NewsTickerProps) => {
  // console.log(news);

  return (
    <div className='py-10'>
      <hr className='w-[90%] mx-auto ' />
      <Marquee className='flex justify-around py-4 gap-2'>
        {news.map((x, index) => (
          <div
            className='pr-10'
            key={`${index}_${x.title}}`}
          >
            {x.icon} <span className='text-xl'>{x.title}</span>
          </div>
        ))}
      </Marquee>
      <hr className='w-[90%] mx-auto ' />
    </div>
  );
};
