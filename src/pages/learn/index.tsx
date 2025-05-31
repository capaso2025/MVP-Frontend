import LearnHeader from './components/organisms/LearnHeader/LearnHeader';
import LearnModule from './components/templates/LearnModule/LearnModule';
import { Module } from '@/shared/types/modules.types';
import { useParams } from 'react-router-dom';
import { SOFT_SKILLS_SECTIONS } from '@/data/soft-skills';

function Learn() {
  const params = useParams();

  const sectionModules = SOFT_SKILLS_SECTIONS.find(
    (el) => el.title === params.section,
  )?.modules;

  return (
    <div>
      <LearnHeader />
      {sectionModules?.map((module: Module) => (
        <LearnModule
          module={module}
          currentLevel={2}
          currentModule={'¿Por qué nadie me entiende (y cómo evitarlo)?'}
        />
      ))}
    </div>
  );
}

export default Learn;
