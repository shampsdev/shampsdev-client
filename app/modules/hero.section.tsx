import { AnimatedLogo } from '@/components/animated-logo';
import { Icons } from '@/components/icons';

export const HeroSection = () => {
  return (
    <div>
      <div
        id='hero'
        className='min-h-[80vh] w-full flex justify-center pt-20 items-center flex-col gap-y-8'
      >
        <AnimatedLogo />
        <img
          className='md:hidden w-[90%] h-fit'
          src='/logo-icons/shamps.gif'
          alt=''
        />
        <p className='text-xl text-center'>
          We are the champions - Мы Шампиньоны
        </p>
        <p className='text-muted-foreground md:text-lg max-w-[90%] md:max-w-[70%] text-center'>
          Мы команда Шампиньоны из ИТМО. От побед в хакатонах <Icons.trophey />{' '}
          и создания TravelTech <Icons.plane /> решений выросли в
          IT-микроагентство. <Icons.computer /> Здесь рассказываем о наших
          проектах и достижениях. Всегда открыты для новых идей и
          сотрудничества. <Icons.heart />
        </p>
        <a
          href='https://t.me/m/Hl0aa0mKNDRi'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block bg-black text-white text-lg py-3 px-10 rounded-full text-center'
        >
          [ Написать шампиньонам ]
        </a>
      </div>
    </div>
  );
};
