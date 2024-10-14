import { TextLogo } from '@/components/text-logo';
import { letters } from '@/constants/logo';
import { twMerge } from 'tailwind-merge';

export const AnimatedLogo = () => {
  return (
    <div className="hidden text-[8rem] font-['Inter'] items-center md:flex gap-x-4">
      {'</'}
      <div className='h-[8rem] flex items-end gap-x-2 pb-5'>
        {letters.map((letter, index) => (
          <div
            key={letter.char + index}
            className={twMerge('relative group', letter.width)}
          >
            <TextLogo
              char={letter.char}
              className={twMerge('group-hover:hidden', letter.extraClass)}
            />
            <img
              src={letter.imgSrc}
              alt='logo'
              className={
                'hidden mx-auto group-hover:block object-contain h-[5rem]'
              }
            />
          </div>
        ))}
      </div>
      {'>'}
    </div>
  );
};
