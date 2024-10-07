import { AnimatedLogo } from '@/components/animated-logo';

export const HeroSection = () => {
  return (
    <div className='h-svh pt-52 w-full flex justify-center items-center flex-col gap-y-8'>
      <AnimatedLogo />
      <p className='text-xl text-center'>Участвуем в хакатонах, развиваем TravelTech</p>
      <p className='text-muted-foreground max-w-[70%] text-center'>
        Мы команда Шампиньоны из Университета ИТМО. Регулярно участвуем в
        хакатонах и почти так же регулярно выигрываем в них! Занимаемся
        полным циклом разработки IT проектов в области TravelTech — от
        идеи до реализации и продвижения. Здесь мы рассказываем о наших
        проектах, достижениях и жизни команды. Всегда открыты для новых идей и
        сотрудничества
      </p>
      <button className='bg-black text-white text-lg py-3 px-10 rounded-full'>[Написать шампиньонам]</button>
    </div>
  );
};
