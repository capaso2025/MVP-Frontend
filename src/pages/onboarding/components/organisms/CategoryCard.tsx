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
      className={`rounded-lg border-gray-200 bg-white shadow-sm hover:shadow-2xl hover:border-primary-lighter transition-all duration-200 cursor-pointer border ${className}`}
      onClick={handleClick}
    >
      <div className="mb-4 p-4">
        <img
          src={category.imageUrl}
          alt={category.name}
          className="mb-4 mx-auto"
          width={150}
          height={150}
        />
        <Typography variant='h4' className='text-center'>{category.name}</Typography>
      </div>
    </div>
  );
};
