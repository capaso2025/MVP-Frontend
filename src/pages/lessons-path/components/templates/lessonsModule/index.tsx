import { Module } from '@/shared/types/modules.types';
// import {
//   LEARN_PATH_BUTTON_POSITIONS_LEFT,
//   LEARN_PATH_BUTTON_POSITIONS_RIGHT,
// } from '@/pages/modules/constants/learn-path-classnames';
// import Lesson from '../../organisms/lesson';

function LessonsModule(props: { module?: Module | undefined }) {
  const { module } = props;

  if (!module) return <p>No hay</p>;

  // const learnPathButtonPositions =
  //   module.imagePosition === 'left'
  //     ? LEARN_PATH_BUTTON_POSITIONS_LEFT
  //     : LEARN_PATH_BUTTON_POSITIONS_RIGHT;

  return (
    <div className="relative mt-20 mb-5 flex flex-col items-center justify-start gap-8">
      <img
        src={module.image}
        className={`absolute ${module.imagePosition === 'left' ? 'top-[40%] right-[100px]' : 'bottom-[30%] left-[100px]'} z-0 h-[150px] object-cover`}
        width={150}
        alt="capo happy"
        height={150}
      />
      {module.lessons.map(() => {
        // const position =
        //   learnPathButtonPositions[lesson.level - 1]?.position || '';
        return <p>lesson</p>;
        // return (
        // <Lesson
        //   key={lesson.title}
        //   lesson={{
        //     level: lesson.level,
        //     title: lesson.title,
        //   }}
        //   position={position}
        // />
        // );
      })}
    </div>
  );
}

export default LessonsModule;
