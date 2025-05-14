import { useRenderStore } from "@/shared/store/render-store";
import { Icon } from "@/shared/ui";
import { useNavigate } from "react-router-dom";

function Lesson() {
  const navigate = useNavigate();
  const setAlertDialogData = useRenderStore(state => state.setAlertDialogData);

  const onCloseLesson = () => {
    setAlertDialogData({
      show: true,
      title: "¿Estás seguro?",
      description: "¿Quieres salir de la lección?",
      confirmText: "Sí, salir",
      onConfirm: () => {
        navigate("/learn");
      }
    })
  }
  return <div>
    <Icon name="x" onClick={onCloseLesson} />
    <p>Lesson</p>
  </div>
};

export default Lesson;