import { Typography } from "@/shared/ui";
import { Module } from "@/pages/learn/types/modules.types";
import { LEARN_PATH_BUTTON_POSITIONS_LEFT, LEARN_PATH_BUTTON_POSITIONS_RIGHT } from "@/pages/learn/constants/learn-path-classnames";
import LearnLesson from "../../organisms/LearnLesson/LearnLesson";



function LearnModule(props: Module & { currentLevel: number, currentModule: string }) {
  const { image, imagePosition = "right", currentLevel, title, levels, currentModule } = props;

  const learnPathButtonPositions = imagePosition === "left" ? LEARN_PATH_BUTTON_POSITIONS_LEFT : LEARN_PATH_BUTTON_POSITIONS_RIGHT;

  return <div className="relative flex my-5 flex-col items-center justify-center gap-8">
    <img
      src={image}
      className={`absolute ${imagePosition === "left" ? "top-[40%] right-[100px]" : "bottom-[30%] left-[100px]"} z-0 h-[150px] object-cover`}
      width={150}
      alt="capito happy"
      height={150}
    />
    <div className="mx-auto mb-10 flex w-full items-center justify-center">
      <span className="via-secondary-light h-[1px] flex-1 bg-gradient-to-r from-transparent to-secondary-light" />
      <Typography className="text-left w-max mx-3 text-secondary">{title}</Typography>
      <span className="via-secondary-light h-[1px] flex-1 bg-gradient-to-r from-secondary-light to-transparent" />
    </div>

    {levels.map((level) => {
      const position = learnPathButtonPositions[level.level - 1]?.position || '';
      return <LearnLesson
        key={level.title}
        level={{
          level: level.level,
          title: level.title,
        }}
        currentLevel={currentLevel}
        currentModule={currentModule}
        title={title}
        position={position}
      />
      // return <div className="relative">
      //   <div
      //     className={`absolute -top-13 z-10 -ml-5 ${position} bg-primary-2 animate-bounce rounded-full px-4 py-1 shadow-md ${currentLevel === level.level && currentModule === title ? '' : 'hidden'}`}
      //   >
      //     <Typography className="text-primary text-center">
      //       Empezar
      //     </Typography>
      //   </div>
      //   <LearnButton
      //     key={level.title}
      //     className={`${position} ${currentLevel >= level.level && currentModule === title ? '' : 'opacity-50'}`}
      //   />
      // </div>
    }

    )}
  </div>
};

export default LearnModule;