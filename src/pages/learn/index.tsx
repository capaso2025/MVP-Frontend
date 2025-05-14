import LearnHeader from './components/organisms/LearnHeader/LearnHeader';
import LearnModule from './components/templates/LearnModule/LearnModule';
import { MODULES } from './constants/modules';

function Learn() {
  return (
    <div>
      <LearnHeader />
      {MODULES.map((module) => (
        <LearnModule
          title={module.title}
          objective={module.objective}
          image={module.image}
          imagePosition={module.imagePosition}
          currentLevel={2}
          currentModule={"¿Por qué nadie me entiende (y cómo evitarlo)?"}
          levels={module.levels}
        />
      ))}
    </div>
  );
}

export default Learn;
