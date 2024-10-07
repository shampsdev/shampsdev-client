import { People } from '@/types/people.interface';

interface SupporterCardProps {
  person: People;
}

export const SupporterCard = ({ person }: SupporterCardProps) => {
  return (
    <div className='flex h-full w-full rounded-2xl border p-5 gap-5'>
      <div className='h-28 w-28 bg-muted rounded-full overflow-hidden'>
        <img src={person.image} alt=''/>
      </div>
      <div className='flex flex-col justify-around w-fit'>
        <div>
          <p>{person.name}</p>
          <p className='text-muted-foreground'>{person.role}</p>
        </div>
        <button className='border py-2 px-4 rounded-3xl w-fit'>{'telegram ->'}</button>
      </div>
    </div>
  );
};
