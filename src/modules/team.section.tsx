import { SupporterCard } from '@/components/supporter-card';
import { TeamCard } from '@/components/team-card';
import { People } from '@/types/people.interface';

const team: People[] = [
  {
    name: 'Настя Богданова',
    role: 'бизнес-аналитик',
    contact: 'https://t.me/learn_how_to_use_a_cart',
    image: '/people/nastya.jpeg',
  },
  {
    name: 'Мишель Де Джофрой',
    role: 'frontend-разработчик',
    contact: 'https://t.me/mikedegeofroy',
    image: '/people/mike.jpeg',
  },
  {
    name: 'Саша Дьяконов',
    role: 'backend-разработчик',
    contact: 'https://t.me/keine_salz',
    image: '/people/sasha.png',
  },
  {
    name: 'Вика Кулешова',
    role: 'UX/UI дизайнер',
    contact: 'https://t.me/vktorriaa',
    image: '/people/vika.png',
  },
  {
    name: 'Митя Мамченко',
    role: 'frontend-разработчик',
    contact: 'https://t.me/aliasmityai',
    image: '/people/mitya.jpeg',
  },
  {
    name: 'Ваня Тарасов',
    role: 'backend-разработчик',
    contact: 'https://t.me/vaniog',
    image: '/people/vanya.jpeg',
  },
];

const supporters: People[] = [
  {
    name: 'Женя Сальников',
    role: 'frontend-разработчик',
    contact: '',
    image: '/people/zhenya.png',
  },
  {
    name: 'Лиза Мордвина-Щодро',
    role: 'оператор-монтажер',
    contact: '',
    image: '',
  },
  {
    name: 'Олег Селянта',
    role: 'frontend-разработчик',
    contact: '',
    image: '',
  },
  {
    name: 'Аня Цветкова',
    role: 'режиссер',
    contact: '',
    image: '',
  },
  {
    name: 'Лиля Яфарова',
    role: 'UX/UI дизайнер',
    contact: '',
    image: '',
  },
];

export const TeamSection = () => {
  return (
    <div className='min-h-screen'>
      <p className='text-center text-xl py-5'>Команда</p>
      <div className='grid md:grid-cols-3 w-[90%] mx-auto gap-5'>
        {team.map((person) => (
          <TeamCard person={person} />
        ))}
      </div>
      <p className='text-center text-xl pt-5'>
        Отдельное спасибо тем, кто поддержал нас!
      </p>
      <p className='text-center text-muted-foreground text-xl pb-5'>
        Целуем в носик за ваши пару строчек
      </p>
      <div>
        {supporters.map((person) => (
          <SupporterCard person={person} />
        ))}
      </div>
    </div>
  );
};
