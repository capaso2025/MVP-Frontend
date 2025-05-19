import { CategoryCard } from '../organisms/CategoryCard';
import { Button, Icon, Typography } from '@shared/ui';
import { CATEGORIES } from '../../constants/categories';
import { OnboardingLayout } from '@/shared/ui/layouts/onboarding-layout';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../hooks/use-onboarding';

const CategoriesPage = () => {
  const navigate = useNavigate();
  const { category: selectedCategory, setCategory } = useOnboarding();

  return (
    <OnboardingLayout title="Selección de habilidades">
      <div className="mx-auto grid w-[90%] max-w-7xl grid-rows-[auto_max-content] py-4 xl:w-full">
        <div className="grid place-content-center">
          <h1 className="mb-8 text-center text-3xl font-bold">
            Quiero ser un CAPO en...
          </h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category) => (
              <CategoryCard
                className={`${category.id === selectedCategory?.id
                  ? '!bg-primary-lighter'
                  : ''
                  }`}
                key={category.id}
                category={category}
                onClick={() => setCategory(category)}
              />
            ))}
          </div>
          <div className="mt-5 grid place-content-center lg:mt-10">
            {selectedCategory ? (
              <>
                <Typography variant="h4" className="mb-4">
                  Aprenderás:
                </Typography>
                <ul className="h-[152px] space-y-2">
                  {CATEGORIES.find(
                    (el) => el.id === selectedCategory?.id,
                  )?.subSkills.map((subSkill) => (
                    <li key={subSkill.id} className="flex items-center">
                      <Icon
                        name="check"
                        size="sm"
                        className="text-primary mr-2"
                      />
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
        <div className="flex justify-end">
          {selectedCategory ? (
            <Button
              className="flex w-max items-center"
              size="lg"
              onClick={() => navigate('/onboarding')}
            >
              <Typography className="text-white">Comenzar</Typography>
              <Icon name="arrow-right" className="mr-2" />
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
