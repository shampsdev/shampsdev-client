import { TextLogo } from '@/components/text-logo';

export const AnimatedLogo = () => {
  return (
    <div className="text-[8rem] font-['Inter'] items-center flex gap-x-4">
      {'</'}
      <div className='h-fit flex items-end gap-x-2 pb-5'>
        <div className='relative group'>
          <TextLogo.s className='group-hover:hidden' />
          <img
            src='/logo-icons/1.png'
            alt='logo'
            className='hidden group-hover:block object-contain max-h-full'
          />
        </div>
        <div className='relative group'>
          <TextLogo.h className='group-hover:hidden' />
          <img
            src='/logo-icons/2.png'
            alt='logo'
            className='hidden group-hover:block object-contain max-h-full h-[6rem]'
          />
        </div>
        <div className='relative group'>
          <TextLogo.a className='group-hover:hidden' />
          <img
            src='/logo-icons/3.png'
            alt='logo'
            className='hidden group-hover:block h-[6rem]'
          />
        </div>
        <div className='relative group'>
          <TextLogo.m className='group-hover:hidden' />
          <img
            src='/logo-icons/4.png'
            alt='logo'
            className='hidden group-hover:block h-[6rem]'
          />
        </div>
        <div className='relative group'>
          <TextLogo.p className='translate-y-10 group-hover:hidden' />
          <img
            src='/logo-icons/5.png'
            alt='logo'
            className='hidden group-hover:block h-[6rem]'
          />
        </div>
        <div className='relative group'>
          <TextLogo.s className='group-hover:hidden' />
          <img
            src='/logo-icons/6.png'
            alt='logo'
            className='hidden group-hover:block h-[6rem]'
          />
        </div>
      </div>
      {'>'}
    </div>
  );
};