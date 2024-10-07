import { Acheivement } from '@/types/acheivement.interface';

const acheivements: Acheivement[] = [
  {
    icon: '',
    sponsor: 'ВкусВилл x Технопарк ИТМО',
    year: 2024,
    category: 'Хакатон Помоги Даркстору',
    subcategory: 'Инвентаризация 2.0',
    project: {
      name: 'Проект',
      href: ''
    },
  },
  {
    icon: '',
    sponsor: 'NOLABEL GROUP',
    year: 2024,
    category: 'NoLabel competition',
    subcategory: 'Самая прокаченная реализация',
    project: {
      name: 'SightQuest',
      href: ''
    },
  },
  {
    icon: '',
    sponsor: 'Young&&Yandex x ИТМО',
    year: 2024,
    category: 'Хакатон Помоги Даркстору',
    subcategory: 'Инвентаризация 2.0',
    project: {
      name: 'Проект',
      href: ''
    },
  },
  {
    icon: '',
    sponsor: 'NOLABEL GROUP x ПИШ ИТМО',
    year: 2024,
    category: 'Хакатон Помоги Даркстору',
    subcategory: 'Инвентаризация 2.0',
    project: {
      name: 'Проект',
      href: ''
    },
  },
  {
    icon: '',
    sponsor: 'NOLABEL GROUP x ПИШ ИТМО',
    year: 2024,
    category: 'Хакатон Помоги Даркстору',
    subcategory: 'Инвентаризация 2.0',
    project: {
      name: 'Проект',
      href: ''
    },
  },
  {
    icon: '',
    sponsor: 'Акселератор Возможностей x ИНТЦ МГУ Воробьевы горы',
    year: 2024,
    category: 'SmartSocial',
    project: {
      name: 'KolomnaGo',
      href: ''
    },
  },
  {
    icon: '',
    sponsor: 'Фонд содействия инновациям',
    year: 2024,
    category: 'Студенческий стартап',
    subcategory: 'Грант',
    project: {
      name: 'Проект',
      href: ''
    },
  },
];

export const AcheivementsSection = () => {
  return (
    <>
      {acheivements.map(() => (
        <></>
      ))}
    </>
  );
};
