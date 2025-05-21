"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Input } from "@/shared/ui/atoms/Input"
import { Typography } from "@/shared/ui/atoms/Typography"
import Spacer from "@/shared/ui/atoms/Spacer"
import { Button } from "@/shared/ui/atoms/Button"
import { useRenderStore } from "@/shared/store/render-store"
import { SchoolFinder } from "../../school-finder"

export default function TeacherSignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    title: "Sr./a",
    firstName: "",
    lastName: "",
    password: "",
    role: "Maestro",
    referral: "",
  })
  const setModalData = useRenderStore((state) => state.setModalData)
  const handleSchoolFinderModal = () => {
    setModalData({
      containerClassName: "bg-landing",
      fullScreen: true,
      title: "Encuentra tu colegio",
      children: <SchoolFinder />,
    })
  }

  const handleInscription = () => {
    handleSchoolFinderModal()
    // Aquí puedes agregar la lógica para manejar la inscripción del usuario
  }

  return (
    <div className="bg-white max-w-xl mx-auto px-8 py-4 mt-4 rounded-lg animate-fade-in">
      <div className="text-center text-md mb-4">
        ¿Ya tienes una cuenta?{" "}
        <Typography as="span" variant="h6" className="text-primary-2 hover:underline">
          Inicia sesión aquí
        </Typography>
      </div>

      <form className="space-y-4">
        <Typography variant="h5" className="text-primary font-normal">Datos Personales</Typography>
        <div className="relative">
          <label
            className={`mb-1.5 text-sm font-medium `}
          >
            Título
          </label>
          <select
            className="w-full px-4 py-3 rounded-lg border border-gray-300 appearance-none"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          >
            <option value="Sr./a">Sr./a</option>
            <option value="Dr./a">Dr./a</option>
            <option value="Prof./a">Prof./a</option>
          </select>
          <ChevronDown className="absolute right-3 top-10 w-5 h-5 text-gray-500 pointer-events-none" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            label="Nombre"
          />
          <Input
            type="text"
            label="Apellidos"
          />
        </div>
        <Spacer size="xs" />
        <Typography variant="h5" className="text-primary font-normal">Datos de Cuenta</Typography>

        <Input label="Correo electrónico"
          type="email"
          placeholder="ejemplo@gmail.com"
        />
        <Input
          type="password"
          label="Contraseña"
          placeholder="********"
        />

        <div className="relative">
          <label
            className={`mb-1.5 text-sm font-medium `}
          >
            Rol
          </label>
          <select
            className="w-full px-4 py-3 rounded-lg border border-gray-300 appearance-none"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="Maestro">Maestro</option>
            <option value="Profesor">Profesor</option>
            <option value="Instructor">Instructor</option>
          </select>
          <ChevronDown className="absolute right-3 top-10 w-5 h-5 text-gray-500 pointer-events-none" />
        </div>

        <div className="relative">
          <select
            className="w-full px-4 py-3 rounded-lg border border-gray-300 appearance-none"
          >
            <option value="" disabled selected>
              ¿Cómo te enteraste de nosotros? (opcional)
            </option>
            <option value="redes">Redes sociales</option>
            <option value="amigo">Un amigo</option>
            <option value="busqueda">Búsqueda en internet</option>
            <option value="otros">Otros</option>
          </select>
          <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
        </div>

        <div className="text-sm text-center text-gray-600 mt-4">
          Al registrarte, aceptas los{" "}
          <a href="#" className="text-primary-2 font-bold hover:underline">
            Términos de Servicio
          </a>{" "}
          y{" "}
          <a href="#" className="text-primary-2 font-bold hover:underline">
            Política de Privacidad
          </a>
          .
        </div>

        <Button size="lg" className="w-full" onClick={handleInscription}>Inscríbete</Button>
      </form>
    </div>
  )
}
