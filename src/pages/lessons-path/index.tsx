import { useParams } from 'react-router-dom';
import LessonsModule from './components/templates/lessonsModule';
import RightSection from '@/shared/ui/organisms/right-section/RightSection';
import LearnHeader from '../modules/components/organisms/LearnHeader/LearnHeader';
import { useSection } from '../sections/hooks/use-section';

function LessonPathPage() {
  const params = useParams();
  const { data } = useSection();

  const module = data
    ?.find((section) => section.id === params.sectionId)
    ?.modules?.find((module) => module.id === params.moduleId);

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
