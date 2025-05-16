import { Button, Typography } from "@/shared/ui";
import { useEffect } from "react";

function PopoverStartLesson(props: {
  title: string;
  onClick: () => void;
  changeClickedLesson: (lesson: string) => void;
}) {
  const { title, onClick, changeClickedLesson } = props;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        changeClickedLesson("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [changeClickedLesson]);

  return <div className="popover-start-lesson animate-zoom-in absolute z-10 w-[250px] bg-primary rounded-2xl p-4 -bottom-36 -left-34">
    <Typography className="text-white mb-4 font-bold">
      {title}
    </Typography>
    <Button className="w-full" variant="secondary" onClick={onClick}>Empezar lección</Button>
  </div>
};

export default PopoverStartLesson;