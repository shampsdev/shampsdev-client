import { AnimatedLogo } from '@/components/animated-logo';
import { Icons } from '@/components/icons';

export const HeroSection = () => {
  return (
    <div className='h-svh w-full flex justify-center items-center flex-col gap-y-8'>
      <AnimatedLogo />
      <p className='text-xl text-center'>
        Участвуем в хакатонах, развиваем TravelTech
      </p>
      <p className='text-muted-foreground text-lg max-w-[90%] md:max-w-[70%] text-center'>
        Мы команда Шампиньоны из Университета ИТМО. Регулярно участвуем в
        хакатонах <Icons.computer /> и почти так же регулярно выигрываем{' '}
        <Icons.trophey /> в них! Занимаемся полным циклом <Icons.spyglass />{' '}
        разработки IT проектов в области TravelTech <Icons.plane /> — от идеи до
        реализации и продвижения. Здесь мы рассказываем о наших проектах,
        достижениях и жизни команды. Всегда открыты для новых идей и
        сотрудничества <Icons.heart />
      </p>
      <button className='bg-black text-white text-lg py-3 px-10 rounded-full'>
        [Написать шампиньонам]
      </button>
    </div>
  );
};
