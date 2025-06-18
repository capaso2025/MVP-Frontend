import { useSection } from '@/pages/sections/hooks/use-section';
import { useDummyStore } from '@/shared/store/dummy-store';
import { useNavigate, useParams } from 'react-router-dom';

export const useLesson = () => {
  const currentLesson = useDummyStore((state) => state.currentLesson);
  const params = useParams();
  const navigate = useNavigate();
  const { data } = useSection();

  const currentLessonByParams = data
    ?.find((section) => section.id === params.sectionId)
    ?.modules?.find((module) => module.id === params.moduleId)
    ?.lessons?.find((lesson) => lesson.id === params.lessonId);

  const returnToModule = () =>
    navigate(`/modules/${params.sectionId}/${params.moduleId}`);
  const isRepeatedLesson = currentLesson > (currentLessonByParams?.level || 0);

  const handleNextLesson = () => {
    const lessons = data
      ?.find((section) => section.id === params.sectionId)
      ?.modules?.find((module) => module.id === params.moduleId)?.lessons;

    const currentLessonIndex =
      lessons?.findIndex((lesson) => lesson.id === params.lessonId) || 0;
    navigate(
      `/lesson/${params.sectionId}/${params.moduleId}/${lessons?.[currentLessonIndex + 1]?.id}`,
    );
  };
  return {
    isRepeatedLesson,
    returnToModule,
    handleNextLesson,
    currentLessonByParams,
  };
};
