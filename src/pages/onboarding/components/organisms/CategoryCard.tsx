import { FC, MouseEvent } from 'react';
import { Typography } from '@shared/ui';

interface ISubSkill {
  id: string;
  name: string;
}
interface ISkillCategoryWithSubSkills {
  id: string;
  name: string;
  imageUrl: string;
  subSkills: ISubSkill[];
}

interface ICategoryCardProps {
  category: ISkillCategoryWithSubSkills;
  onClick: () => void;
  className?: string;
}
export const CategoryCard: FC<ICategoryCardProps> = ({
  category,
  onClick,
  className = '',
}) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <div
      className={`relative rounded-lg border-gray-200 bg-white hover:shadow-2xl hover:border-primary-lighter overflow-hidden w-[300px] transition-all h-[350px] duration-200 cursor-pointer border ${className}`}
      onClick={handleClick}
    >
      <div className="mb-4 grid h-full">
        <div className='grid place-content-start'>
          <img
            src={category.imageUrl}
            alt={category.name}
            className="object-cover w-full mx-auto h-[310px] mask-transparent mb-8"
            width={200}
            height={200}
          />
        </div>
        <Typography variant='h5' className='absolute p-1 bottom-0 w-full text-center'>{category.name}</Typography>
      </div>
    </div>
  );
};
