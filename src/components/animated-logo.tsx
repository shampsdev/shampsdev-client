import { TextLogo } from '@/components/text-logo';

export const AnimatedLogo = () => {
  return (
    <div className="text-[8rem] font-['Inter'] items-center flex gap-x-4">
      {'</'}
      <div className='h-[8rem] flex items-end gap-x-2 pb-5'>
        <div className='relative group w-[4rem]'>
          <TextLogo.s className='group-hover:hidden' />
          <img
            src='/logo-icons/1.png'
            alt='logo'
            className='hidden mx-auto group-hover:block object-contain h-[5rem]'
          />
        </div>
        <div className='relative group w-[7rem]'>
          <TextLogo.h className='group-hover:hidden' />
          <img
            src='/logo-icons/2.png'
            alt='logo'
            className='hidden mx-auto group-hover:block object-contain h-[5rem]'
          />
        </div>
        <div className='relative group w-[5rem]'>
          <TextLogo.a className='group-hover:hidden' />
          <img
            src='/logo-icons/3.png'
            alt='logo'
            className='hidden mx-auto group-hover:block object-contain h-[5rem]'
          />
        </div>
        <div className='relative group w-[8rem]'>
          <TextLogo.m className='group-hover:hidden' />
          <img
            src='/logo-icons/4.png'
            alt='logo'
            className='hidden mx-auto group-hover:block h-[5rem]'
          />
        </div>
        <div className='relative group w-[5rem]'>
          <TextLogo.p className='translate-y-10 group-hover:hidden' />
          <img
            src='/logo-icons/5.png'
            alt='logo'
            className='hidden mx-auto group-hover:block h-[5rem]'
          />
        </div>
        <div className='relative group w-[5rem]'>
          <TextLogo.s className='group-hover:hidden' />
          <img
            src='/logo-icons/6.png'
            alt='logo'
            className='hidden mx-auto group-hover:block h-[6rem]'
          />
        </div>
      </div>
      {'>'}
    </div>
  );
};