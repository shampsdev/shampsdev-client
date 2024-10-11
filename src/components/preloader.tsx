import React from 'react';

import { TextLogo } from './text-logo';
import { twMerge } from 'tailwind-merge';
import { letters } from '@/constants/logo';
import { useLoadingStatus } from '@/hooks/useLoadingStatus';

const Preloader: React.FC = () => {
  const { progress } = useLoadingStatus();

  const shouldFlip = (index: number) => {
    if (progress < 11) {
      return [0].includes(index);
    } else if (progress < 18) {
      return [0, 1].includes(index);
    } else if (progress < 30) {
      return [0, 1, 2].includes(index);
    } else if (progress < 31) {
      return [1, 2].includes(index);
    } else if (progress < 37) {
      return [1, 2, 3].includes(index);
    } else if (progress < 56) {
      return [1, 2, 3, 5].includes(index);
    } else if (progress < 61) {
      return [1, 2, 5].includes(index);
    } else if (progress < 74) {
      return [0, 2, 5].includes(index);
    } else if (progress < 83) {
      return [0, 2].includes(index);
    } else if (progress < 87) {
      return [0, 2, 4].includes(index);
    } else if (progress < 95) {
      return [4].includes(index);
    }
    return false;
  };

  return (
    <div className='flex h-[100vh] justify-center items-center flex-col'>
      <div className='hidden md:flex items-center gap-x-4 text-[8rem] font-inter'>
        {'</'}
        <div className='h-[8rem] flex items-end gap-x-2 pb-5'>
          {letters.map((letter, index) => (
            <div
              key={letter.char + index}
              className={twMerge('relative', letter.width)}
            >
              {/* Условный рендеринг TextLogo или img */}
              {shouldFlip(index) ? (
                <img
                  src={letter.imgSrc}
                  alt='logo'
                  className='mx-auto object-contain h-[5rem] transition-transform duration-500 ease-in-out rotate-y-180'
                />
              ) : (
                <TextLogo
                  char={letter.char}
                  className={twMerge('group-hover:hidden', letter.extraClass)}
                />
              )}
            </div>
          ))}
        </div>
        {'>'}
      </div>
      <p className='text-[3rem] font-sans mt-4'>{progress}%</p>
    </div>
  );
};

export default Preloader;
