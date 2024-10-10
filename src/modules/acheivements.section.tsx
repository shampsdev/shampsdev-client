import { AcheivementComponent } from "@/components/acheivement";
import { Acheivement } from "@/types/acheivement.interface";

const acheivements: Acheivement[] = [
  {
    icon: "/icons/1place.png",
    sponsor: "ВкусВилл x Технопарк ИТМО",
    year: 2024,
    category: "Хакатон Помоги Даркстору",
    subcategory: "Инвентаризация 2.0",
    project: {
      name: "Проект",
      href: "",
    },
  },
  {
    icon: "/icons/1place.png",
    sponsor: "NOLABEL GROUP",
    year: 2024,
    category: "NoLabel competition",
    subcategory: "Самая прокаченная реализация",
    project: {
      name: "SightQuest",
      href: "",
    },
  },
  {
    icon: "/icons/1place.png",
    sponsor: "Young&&Yandex x ИТМО",
    year: 2024,
    category: "Creative Space",
    project: {
      name: "DishDash",
      href: "",
    },
  },
  {
    icon: "/icons/1place.png",
    sponsor: "NOLABEL GROUP x ПИШ ИТМО",
    year: 2024,
    category: "NoLabel Development Week",
    project: {
      name: "DishDash",
      href: "",
    },
  },
  {
    icon: "/icons/1place.png",
    sponsor: "NOLABEL GROUP x ПИШ ИТМО",
    year: 2024,
    category: "NoLabel Development Week",
    subcategory: "Лучшая разработка продукта",
    project: {
      name: "DishDash",
      href: "",
    },
  },
  {
    icon: "/icons/2place.png",
    sponsor: "Акселератор Возможностей x ИНТЦ МГУ Воробьевы горы",
    year: 2024,
    category: "SmartSocial",
    project: {
      name: "KolomnaGo",
      href: "",
    },
  },
  {
    icon: "/icons/money.png",
    sponsor: "Фонд содействия инновациям",
    year: 2024,
    category: "Студенческий стартап",
    subcategory: "Грант",
    project: {
      name: "SightQuest",
      href: "",
    },
  },
];

export const AcheivementsSection = () => {
  return (
    <div>
      <p className='text-center text-xl py-5'>Наши достижения</p>
      <div className='w-[90%] mx-auto flex flex-col divide-y-[1px]'>
        {acheivements.map((acheivement, index) => (
          <AcheivementComponent
            key={`${index}_${acheivement.icon}`}
            acheivement={acheivement}
          />
        ))}
      </div>
    </div>
  );
};
