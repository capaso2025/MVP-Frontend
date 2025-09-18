import { CATEGORIES_CONFIG } from '@/shared/constants/categories';
import { Progress, Typography } from '@/shared/ui';
import { Card } from '@/shared/ui/atoms/Card';
import Spacer from '@/shared/ui/atoms/Spacer';
function Categories<T>(props: {
  data: T[] | undefined;
  nameCategoryKey: keyof T;
  progressKey: keyof T;
}) {
  console.log(props)
  // const { data, nameCategoryKey, progressKey } = props;
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
      {Object.values(CATEGORIES_CONFIG).map(({ icon, label, progressClass, id }) => {
        // const filteredElements = data?.filter(
        //   (el) => el[nameCategoryKey] === id,
        // );
        // const value = filteredElements?.length
        //   ? Math.round(
        //     filteredElements.reduce(
        //       (acc, el) => acc + +(el[progressKey] || 0),
        //       0,
        //     ) / filteredElements.length,
        //   )
        //   : 0;
        return (
          <Card key={id} className="flex-1">
            <div className="flex items-center justify-between gap-2">
              {icon}
              <Typography>{0}%</Typography>
            </div>
            <Spacer size="sm" />
            <Typography>{label}</Typography>
            <Progress value={0} className={progressClass} />
          </Card>
        );
      })}
    </div>
  );
}

export default Categories;
