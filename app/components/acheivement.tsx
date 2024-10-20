import { Acheivement } from '@/types/acheivement.interface';
import { Icons } from './icons';

interface AcheivementProps {
  acheivement: Acheivement;
}

export const AcheivementComponent = ({ acheivement }: AcheivementProps) => {
  return (
    <div className='py-4 flex items-center gap-5'>
      <div className='flex-shrink-0 h-9 w-9 flex border-[1px] justify-center items-center bg-secondary rounded-full p-2'>
        <img className='h-full w-full' src={acheivement.icon} alt='' />
      </div>
      <div className='md:w-[40%]'>
        <p>{acheivement.sponsor}</p>
        <p className='text-muted-foreground hidden md:block'>
          {acheivement.year}
        </p>
        <p className='text-muted-foreground md:hidden'>
          {acheivement.category}
        </p>
      </div>
      <div className='hidden md:block'>
        <p>{acheivement.category}</p>
        {acheivement.subcategory && (
          <p className='text-muted-foreground'>{acheivement.subcategory}</p>
        )}
      </div>
      <div className='ml-auto flex items-center text-muted-foreground gap-5'>
        <div className='items-center flex justify-end md:justify-between gap-5 md:w-[200px]'>
          <p className='hidden md:flex text-left'>{acheivement.project.name}</p>
          <a href={acheivement.project.href} target='_blank' rel='noopener noreferrer'>
            <Icons.arrow />
          </a>
        </div>
      </div>
    </div>
  );
};
