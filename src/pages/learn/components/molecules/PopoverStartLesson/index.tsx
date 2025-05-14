import { Button, Typography } from "@/shared/ui";
import { useEffect } from "react";

function PopoverStartLesson(props: {
  title: string;
  showModal: boolean;
  toggleShowModal: () => void;
  onClick: () => void;
}) {
  const { title, showModal, toggleShowModal, onClick } = props;

  useEffect(() => {
    if (!showModal) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggleShowModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }
    , [toggleShowModal]);

  return showModal ? <div className="animate-zoom-in absolute z-10 w-[250px] bg-primary rounded-2xl p-4 -bottom-36 -left-34">
    <Typography className="text-white mb-4 font-bold">
      {title}
    </Typography>
    <Button className="w-full" variant="secondary" onClick={onClick}>Empezar lección</Button>
  </div> : <></>
};

export default PopoverStartLesson;