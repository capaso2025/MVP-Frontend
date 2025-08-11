import { Typography } from '@/shared/ui';
import RightSection from '@/shared/ui/organisms/right-section/RightSection';
import { useSection } from './hooks/use-section';

function Sections() {
  const { sectionTitle } = useSection();
  return (
    <section className="with-right-section">
      <div className="animate-fade-in grid grid-rows-[70px_auto] gap-2">
        <Typography variant="h2" className="py-2">
          {sectionTitle}
        </Typography>
        <div className="flex flex-col gap-8">
          {/* {data?.map(() => (
            <SectionCard
              {...values}
              onClick={() => {
                navigate(`/modules/${encodeURIComponent(values.id)}`);
              }}
            />
          ))} */}
        </div>
      </div>
      <RightSection />
    </section>
  );
}

export default Sections;
