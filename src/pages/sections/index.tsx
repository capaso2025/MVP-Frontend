import { Typography } from '@/shared/ui';
import SectionCard from './components/organisms/SectionCard';
import { SOFT_SKILLS_SECTIONS } from '../../data/soft-skills';
import { useNavigate } from 'react-router-dom';
import RightSection from '@/shared/ui/organisms/right-section/RightSection';

function Sections() {
  const navigate = useNavigate();
  return (
    <section className="with-right-section">
      <div className="animate-fade-in grid grid-rows-[70px_auto] gap-2">
        <Typography variant="h2" className="py-2">
          Habilidades Blandas
        </Typography>
        <div className="flex flex-col gap-8">
          {SOFT_SKILLS_SECTIONS.map((values) => (
            <SectionCard
              {...values}
              onClick={() => {
                navigate(`/modules/${encodeURIComponent(values.id)}`);
              }}
            />
          ))}
        </div>
      </div>
      <RightSection />
    </section>
  );
}

export default Sections;
