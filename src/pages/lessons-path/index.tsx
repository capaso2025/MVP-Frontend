import { useParams } from 'react-router-dom';
import LessonsModule from './components/templates/lessonsModule';
import { SOFT_SKILLS_SECTIONS } from '@/data/soft-skills';
import RightSection from '@/shared/ui/organisms/right-section/RightSection';
import LearnHeader from '../modules/components/organisms/LearnHeader/LearnHeader';

function LessonPathPage() {
  const params = useParams();

  const module = SOFT_SKILLS_SECTIONS.find(
    (section) => section.id === params.sectionId,
  )?.modules?.find((module) => module.id === params.moduleId);

  return (
    <section className="with-right-section">
      <div className="animate-fade-in">
        <LearnHeader
          backRoute={`/modules/${params.sectionId}`}
          title={`Modulo ${module?.title || ''}`}
          backRouteName="módulos"
        />
        <LessonsModule module={module} />
      </div>
      <RightSection />
    </section>
  );
}

export default LessonPathPage;
