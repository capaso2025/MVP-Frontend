import { Typography } from '@/shared/ui';
import { Module } from '@/shared/types/modules.types';
import {
  LEARN_PATH_BUTTON_POSITIONS_LEFT,
  LEARN_PATH_BUTTON_POSITIONS_RIGHT,
} from '@/pages/learn/constants/learn-path-classnames';
import LearnLesson from '../../organisms/LearnLesson/LearnLesson';

function LearnModule(
  props: {
    currentLevel: number;
    currentModule: string;
    changeClickedLesson: (lesson: string) => void;
    clickedLesson: string;
    module: Module;
  },
) {
  const {
    currentLevel,
    currentModule,
    changeClickedLesson,
    clickedLesson,
    module
  } = props;

  const learnPathButtonPositions =
    module.imagePosition === 'left'
      ? LEARN_PATH_BUTTON_POSITIONS_LEFT
      : LEARN_PATH_BUTTON_POSITIONS_RIGHT;

  return (
    <div className="relative my-5 flex flex-col items-center justify-center gap-8">
      <img
        src={module.image}
        className={`absolute ${module.imagePosition === 'left' ? 'top-[40%] right-[100px]' : 'bottom-[30%] left-[100px]'} z-0 h-[150px] object-cover`}
        width={150}
        alt="capito happy"
        height={150}
      />
      <div className="mx-auto mb-10 flex w-full items-center justify-center">
        <span className="via-secondary-light to-secondary-light h-[1px] flex-1 bg-gradient-to-r from-transparent" />
        <Typography className="text-secondary mx-3 w-max text-left">
          {module.title}
        </Typography>
        <span className="via-secondary-light from-secondary-light h-[1px] flex-1 bg-gradient-to-r to-transparent" />
      </div>

      {module.lessons.map((lesson) => {
        const position =
          learnPathButtonPositions[lesson.level - 1]?.position || '';
        return (
          <LearnLesson
            key={lesson.title}
            level={{
              level: lesson.level,
              title: lesson.title,
            }}
            currentLevel={currentLevel}
            currentModule={currentModule}
            title={module.title}
            position={position}
            changeClickedLesson={changeClickedLesson}
            clickedLesson={clickedLesson}
          />
        );
      })}
    </div>
  );
}

export default LearnModule;
