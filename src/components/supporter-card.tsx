import { People } from '@/types/people.interface';
import { Icons } from './icons';
import { twMerge } from 'tailwind-merge';

interface SupporterCardProps {
  person: People;
  className?: string;
}

export const SupporterCard = ({ person, className }: SupporterCardProps) => {
  return (
    <div
      className={
        'flex h-full w-full md:w-fit rounded-full border pr-8 gap-5 p-2'
      }
    >
      <div className='flex-shrink-0 h-24 w-24 bg-muted rounded-full overflow-hidden'>
        <img src={person.image} alt='' />
      </div>
      <div className='flex flex-col justify-around w-full md:w-fit'>
        <div className='w-full'>
          <p
            className={twMerge(
              'w-full text-lg flex items-center gap-10 justify-between',
              className
            )}
          >
            {person.name}{' '}
            <a href={person.contact} target='_blank' rel='noopener noreferrer'>
              <Icons.arrow className='flex-shrink-0' />
            </a>
          </p>
          <p className='text-muted-foreground'>{person.role}</p>
        </div>
      </div>
    </div>
  );
};
