import { Icons } from '@/components/icons';
import { useState } from 'react';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='w-full h-fit fixed p-5'>
      <div className='bg-black text-white h-fit w-full rounded-[2.3rem] pl-8 pr-10 py-4'>
        <div className='flex justify-between items-center'>
          <Icons.logo className='w-[93px] h-[41px] md:w-[62px] md:h-[27px]' />
          <div className='hidden md:flex gap-24'>
            <div className='text-lg font-consolas flex gap-10'>
              <p className='cursor-pointer'>[ Блог ]</p>
              <p className='cursor-pointer'>[ Проекты ]</p>
            </div>
            <div className='flex gap-5 items-center'>
              <Icons.instagram className='cursor-pointer' />
              <Icons.telegram className='cursor-pointer' />
              <Icons.youtube className='cursor-pointer' />
            </div>
          </div>
          <div className='md:hidden h-8 w-8'>
            {open ? (
              <Icons.cross
                onClick={() => setOpen(false)}
                className='h-full w-full active:scale-90'
              />
            ) : (
              <Icons.menu
                onClick={() => setOpen(true)}
                className='h-full w-full active:scale-90'
              />
            )}
          </div>
        </div>
        <div
          className={`md:hidden transition-all duration-200 ease-in-out overflow-hidden ${
            open ? 'max-h-36' : 'max-h-0'
          }`}
        >
          <div className='bg-black text-center text-white rounded-lg'>
            <div className='pb-4 pt-2 space-y-4'>
              <p className='cursor-pointer text-2xl font-consolas'>[ Блог ]</p>
              <p className='cursor-pointer text-2xl font-consolas'>
                [ Проекты ]
              </p>
            </div>
            <div className='flex gap-5 justify-center pb-2'>
              <Icons.instagram className='cursor-pointer h-8 w-8' />
              <Icons.telegram className='cursor-pointer h-8 w-8' />
              <Icons.youtube className='cursor-pointer h-8 w-8' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
