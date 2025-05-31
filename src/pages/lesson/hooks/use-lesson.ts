import { getLessonsByModuleName } from '@/shared/lib/utils';
import { Lesson } from '@/shared/types/lesson.types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type LessonsState = {
  currentLesson: Lesson | undefined;
  nextLesson: Lesson | undefined;
};

export const useLesson = (params: { module: string; lesson: string }) => {
  const { module, lesson } = params;
  const navigate = useNavigate();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [currentAndNextLesson, setCurrentAndNextLesson] =
    useState<LessonsState>({
      currentLesson: undefined,
      nextLesson: undefined,
    });

  useEffect(() => {
    const lessons = getLessonsByModuleName(module || '');
    setLessons(lessons);
    if (lessons?.length > 0) {
      const currentLessonIndex = lessons.findIndex((l) => l.title === lesson);
      if (currentLessonIndex < 0) return;
      const currentLesson = lessons[currentLessonIndex]!;
      const nextLesson =
        currentLessonIndex < lessons.length - 1
          ? lessons[currentLessonIndex + 1]
          : undefined;
      setCurrentAndNextLesson({
        currentLesson,
        nextLesson,
      });
    }
  }, [module, lesson]);

  const handleNextLesson = () => {
    navigate(
      `/lesson/${encodeURIComponent(module)}/${encodeURIComponent(currentAndNextLesson?.nextLesson?.title || '')}`,
    );
  };

  const handleBackLesson = () => {
    const newCurrentAndNextLesson: LessonsState = {
      currentLesson: undefined,
      nextLesson: undefined,
    };
    if (currentAndNextLesson?.currentLesson) {
      newCurrentAndNextLesson.nextLesson = currentAndNextLesson.currentLesson;
    }
    const newCurrentLessonIndex = lessons.findIndex(
      (lesson) => lesson.title === newCurrentAndNextLesson.nextLesson?.title,
    );
    const newCurrentLesson =
      newCurrentLessonIndex > 0
        ? lessons[newCurrentLessonIndex - 1]
        : undefined;
    newCurrentAndNextLesson.currentLesson = newCurrentLesson;
    navigate(
      `/lesson/${encodeURIComponent(module)}/${encodeURIComponent(newCurrentAndNextLesson?.currentLesson?.title || '')}`,
    );
  };

  return {
    lessons,
    currentAndNextLesson,
    handleNextLesson,
    handleBackLesson,
  };
};
