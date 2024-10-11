import { People } from '@/types/people.interface';

interface TeamCardProps {
  person: People;
}

export const TeamCard = ({ person }: TeamCardProps) => {
  return (
    <div className='flex h-full w-full rounded-2xl border p-6 gap-5'>
      <div className='flex-shrink-0 h-32 w-32 bg-muted rounded-full overflow-hidden'>
        <img className='h-full w-full object-cover' src={person.image} alt='' />
      </div>
      <div className='flex flex-col justify-around w-fit'>
        <div>
          <p className='text-lg'>{person.name}</p>
          <p className='text-muted-foreground'>{person.role}</p>
        </div>
        <a href={person.contact} target='_blank' rel='noopener noreferrer'>
          <button className='border py-2 px-4 rounded-3xl w-fit'>
            {'telegram ->'}
          </button>
        </a>
      </div>
    </div>
  );
};
