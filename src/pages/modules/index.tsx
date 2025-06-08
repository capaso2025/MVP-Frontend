import LearnHeader from './components/organisms/LearnHeader/LearnHeader';
import { Module } from '@/shared/types/modules.types';
import { useNavigate, useParams } from 'react-router-dom';
import { SOFT_SKILLS_SECTIONS } from '@/data/soft-skills';
import RightSection from '@/shared/ui/organisms/right-section/RightSection';
import SectionCard from '../sections/components/organisms/SectionCard';

function Modules() {
  const params = useParams();
  const navigate = useNavigate();

  const section = SOFT_SKILLS_SECTIONS.find((el) => el.id === params.sectionId);

  return (
    <section className="with-right-section">
      <div className="animate-fade-in">
        <LearnHeader
          backRoute="/sections"
          backRouteName="secciones"
          title={`Sección ${section?.title || ''}`}
        />
        <div className="mt-4 grid gap-4">
          {section?.modules?.map((module: Module, index) => (
            <SectionCard
              title={module.title}
              isActive={index === 0}
              onClick={() => {
                navigate(`/modules/${params.sectionId}/${module.id}`);
              }}
              image="/assets/characters/capito-default.png"
            />
          ))}
        </div>
      </div>
      <RightSection />
    </section>
  );
}

export default Modules;
