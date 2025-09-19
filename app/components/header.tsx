'use client';

import { Icons } from '@/components/icons';
import { useState } from 'react';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='w-full h-fit fixed p-5 z-10'>
      <div className='border bg-white h-fit w-full rounded-[2.3rem] pl-8 pr-10 py-4'>
        <div className='flex justify-between items-center'>
          <a href='/' className='cursor-pointer'>
            <Icons.logo className='w-[62px] h-[27px]' />
          </a>
          <div className='hidden md:flex gap-24'>
            <div className='text-lg font-consolas flex gap-10'>
              <a href='/#projects'>
                <p className='cursor-pointer'>[ Проекты ]</p>
              </a>
              <a href='/#acheivements'>
                <p className='cursor-pointer'>[ Награды ]</p>
              </a>
              <a href='/#team'>
                <p className='cursor-pointer'>[ Команда ]</p>
              </a>
              <a href='/store'>
                <p className='cursor-pointer'>[ ФУТБОЛКА ]</p>
              </a>
            </div>
            <div className='flex gap-5 items-center'>
              <a
                href='https://t.me/shampsdev'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icons.telegram />
              </a>
              <a
                href='https://www.youtube.com/@shampsdev'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icons.youtube />
              </a>
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
            open ? 'max-h-72' : 'max-h-0'
          }`}
        >
          <div className='bg-white text-center rounded-lg'>
            <div className='py-2 space-y-4'>
              <a onClick={() => setOpen(false)} href='/#projects'>
                <p className='cursor-pointer text-xl py-5'>[ Проекты ]</p>
              </a>
              <a onClick={() => setOpen(false)} href='/#acheivements'>
                <p className='cursor-pointer text-xl py-5'>[ Награды ]</p>
              </a>
              <a onClick={() => setOpen(false)} href='/#team'>
                <p className='cursor-pointer text-xl py-5'>[ Команда ]</p>
              </a>
              <a onClick={() => setOpen(false)} href='/store'>
                <p className='cursor-pointer text-xl py-5'>[ ФУТБОЛКА ]</p>
              </a>
            </div>
            <div className='flex gap-5 justify-center pb-4'>
              <a
                href='https://t.me/shampsdev'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icons.telegram className='cursor-pointer h-6 w-6' />
              </a>
              <a
                href='https://www.youtube.com/@shampsdev'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icons.youtube className='cursor-pointer h-6 w-6' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
