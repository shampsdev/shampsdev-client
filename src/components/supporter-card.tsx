import { People } from '@/types/people.interface';

interface SupporterCardProps {
  person: People;
}

export const SupporterCard = ({ person }: SupporterCardProps) => {
  return (
    <div className='flex h-full w-full md:w-[22rem] rounded-full border p-2 gap-5'>
      <div className='h-24 w-24 bg-muted rounded-full overflow-hidden'>
        <img src={person.image} alt='' />
      </div>
      <div className='flex flex-col justify-around w-fit'>
        <div>
          <p className='text-lg'>{person.name}</p>
          <p className='text-muted-foreground'>{person.role}</p>
        </div>
      </div>
    </div>
  );
};
