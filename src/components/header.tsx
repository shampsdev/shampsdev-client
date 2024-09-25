import { Icons } from '@/components/icons';

export const Header = () => {
  return (
    <div className='w-full h-fit fixed p-5'>
      <div className='bg-black h-fit w-full rounded-full pl-8 pr-10 py-4 flex justify-between items-center'>
        <Icons.logo />
        <div className='flex gap-24'>
          <div className='text-white font-consolas flex gap-10'>
            <p>[ Блог ]</p>
            <p>[ Проекты ]</p>
          </div>
          <div className='flex gap-5 items-center'>
            <Icons.instagram />
            <Icons.telegram />
            <Icons.youtube />
          </div>
        </div>
      </div>
    </div>
  );
};
