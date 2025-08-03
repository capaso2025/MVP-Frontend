import { CategoryCard } from '../organisms/CategoryCard';
import { Button, Typography } from '@shared/ui';
import { CATEGORIES } from '../../constants/categories';
import { OnboardingLayout } from '@/shared/ui/layouts/onboarding-layout';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../hooks/use-onboarding';
import { ArrowRightIcon } from '@/shared/ui/atoms/Icon/Icon';

const CategoriesPage = () => {
  const navigate = useNavigate();
  const { category: selectedCategory, setCategory } = useOnboarding();

  return (
    <OnboardingLayout title="Selección de habilidades">
      <div className="mx-auto grid w-[90%] max-w-7xl grid-rows-[auto_max-content] py-4 xl:w-full">
        <div className="grid place-content-center">
          <h1 className="mb-8 text-center text-3xl font-bold">
            Quiero ser un CAPASO en...
          </h1>
          <div className="mx-auto flex w-full flex-wrap justify-center gap-4">
            {CATEGORIES.map((category) => (
              <CategoryCard
                className={`${
                  category.id === selectedCategory
                    ? '!bg-primary text-white shadow-2xl'
                    : ''
                }`}
                key={category.id}
                category={category}
                onClick={() => setCategory(category.id)}
              />
            ))}
          </div>
          <div className="mt-5 grid place-content-center lg:mt-10">
            {selectedCategory ? (
              <>
                <Typography variant="h4" className="mb-4">
                  Aprenderás:
                </Typography>
                <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {CATEGORIES.find(
                    (el) => el.id === selectedCategory,
                  )?.subSkills.map((subSkill) => (
                    <li
                      key={subSkill.id}
                      className="border-primary-light bg-primary-lighter flex items-center rounded-lg border p-2"
                    >
                      <span className="text-gray-700">{subSkill.name}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="h-[100px]" />
            )}
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          {selectedCategory ? (
            <Button
              className="flex w-max items-center"
              onClick={() => navigate('/onboarding')}
            >
              <Typography className="text-white">Comenzar</Typography>
              <ArrowRightIcon />
            </Button>
          ) : (
            <div className="h-[48px]" />
          )}
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default CategoriesPage;
