interface TagProps {
  title: string;
}

export const ProjectTag = ({ title }: TagProps) => {
  return (
    <div className='py-1 px-4 rounded-full bg-muted text-muted-foreground w-fit text-sm'>
      {title}
    </div>
  );
};
