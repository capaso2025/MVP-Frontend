import { useState } from 'react';
import LearnHeader from './components/organisms/LearnHeader/LearnHeader';
import LearnModule from './components/templates/LearnModule/LearnModule';
import { Module } from '@/shared/types/modules.types';
import { useParams } from 'react-router-dom';
import { SOFT_SKILLS_SECTIONS } from '@/data/soft-skills';

function Learn() {
  const [clickedLesson, setClickedLesson] = useState<string>("");
  const params = useParams();

  const sectionModules = SOFT_SKILLS_SECTIONS.find(el => el.title === params.section)?.modules;

  const handleLessonClick = (lesson: string) => {
    setClickedLesson(lesson);
  };

  return (
    <div>
      <LearnHeader />
      {sectionModules?.map((module: Module) => (
        <LearnModule
          module={module}
          changeClickedLesson={handleLessonClick}
          currentLevel={2}
          currentModule={"¿Por qué nadie me entiende (y cómo evitarlo)?"}
          clickedLesson={clickedLesson}
        />
      ))}
    </div>
  );
}

export default Learn;
