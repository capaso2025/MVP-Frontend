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
      className={`hover:border-primary-lighter relative h-[350px] w-[300px] cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-200 hover:shadow-2xl ${className}`}
      onClick={handleClick}
    >
      <div className="mb-4 grid h-full">
        <div className="">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="mask-transparent-bottom mx-auto mb-8 h-[310px] w-full object-cover"
            width={200}
            height={200}
          />
        </div>
        <Typography
          variant="h5"
          className="absolute bottom-0 w-full p-1 text-center"
        >
          {category.name}
        </Typography>
      </div>
    </div>
  );
};
