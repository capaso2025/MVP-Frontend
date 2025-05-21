import { useRenderStore } from "@/shared/store/render-store"
import { Typography } from "../../atoms/Typography"
import { School } from "./data"
import UpdateTeacherEmail from "../update-teacher-email"

interface SchoolCardProps {
  school: School
}

export function SchoolCard({ school }: SchoolCardProps) {
  const setModalData = useRenderStore((state) => state.setModalData)

  const handleSelectSchool = () => {
    setModalData({
      containerClassName: "bg-landing",
      fullScreen: true,
      title: "Actualiza tu correo electrónico",
      description: "Usa tu dirección de correo electrónico institucional para que tu escuela te autorice lo antes posible",
      children: <UpdateTeacherEmail />,
    })
  }
  return (
    <div className="bg-white rounded-lg p-4 shadow flex justify-between items-center" onClick={handleSelectSchool}>
      <div className="space-y-1">
        <Typography variant="h6" className="font-medium text-primary-2">{school.name}</Typography>
        <Typography variant="body2" >{school.address}</Typography>
      </div>
      <div className="text-right">
        <Typography variant="body2">
          {school.teacherCount} {school.teacherCount === 1 ? "profesor" : "profesores"} en Capo
        </Typography>
      </div>
    </div>
  )
}
