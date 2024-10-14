interface LetterData {
  char: "s" | "h" | "a" | "m" | "p" | "full";
  width: string;
  imgSrc: string;
  extraClass?: string;
}

export const letters: LetterData[] = [
  { char: "s", width: "w-[4rem]", imgSrc: "/logo-icons/1.png" },
  { char: "h", width: "w-[7rem]", imgSrc: "/logo-icons/2.png" },
  { char: "a", width: "w-[5rem]", imgSrc: "/logo-icons/3.png" },
  { char: "m", width: "w-[8rem]", imgSrc: "/logo-icons/4.png" },
  {
    char: "p",
    width: "w-[5.3rem]",
    imgSrc: "/logo-icons/5.png",
    extraClass: "translate-y-10",
  },
  { char: "s", width: "w-[4rem]", imgSrc: "/logo-icons/6.png" },
];
