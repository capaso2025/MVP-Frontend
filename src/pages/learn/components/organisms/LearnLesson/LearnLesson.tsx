import { Typography } from "@/shared/ui";
import LearnButton from "../../atoms/button/LearnButton";
import { useModal } from "@/shared/lib/hooks/useModal";
import PopoverStartLesson from "../../molecules/PopoverStartLesson";
import { useNavigate } from "react-router-dom";

function LearnLesson(props: {
  level: { level: number; title: string };
  currentLevel: number;
  currentModule: string;
  title: string;
  position?: string;
}) {
  const { level, currentLevel, currentModule, title, position = "" } = props;
  const { showModal, toggleShowModal } = useModal();
  const navigate = useNavigate();
  return <div className="relative">
    <div
      className={`absolute -top-13 z-10 -ml-5 ${position} bg-primary-2 animate-bounce rounded-full px-4 py-1 shadow-md ${currentLevel === level.level && currentModule === title ? '' : 'hidden'}`}
    >
      <Typography className="text-primary text-center">
        Empezar
      </Typography>
    </div>
    <LearnButton
      key={level.title}
      className={`${position} ${currentLevel >= level.level && currentModule === title ? '' : 'opacity-50'}`}
      onClick={toggleShowModal}
    />
    <PopoverStartLesson showModal={showModal} toggleShowModal={toggleShowModal} title={level.title} onClick={() => {
      navigate("/lesson")
    }} />
  </div>
};

export default LearnLesson;