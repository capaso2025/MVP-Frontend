import { Button, Progress } from '@/shared/ui';
import { ChevronUp, Dumbbell, GraduationCap } from 'lucide-react';
import Breadcrumbs from '@/shared/ui/molecules/Breadcrumbs';
import CustomCalendar from '../home/components/atoms/Calendar';

export default function Goals() {
  return (
    <>
      <Breadcrumbs
        links={[
          { text: 'Inicio', href: '/home' },
          { text: 'Metas y seguimientos', href: '/goals' },
        ]}
      />
      <div className="mx-auto w-full gap-6">
        {/* Goals and Tracking Section */}
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border-2 border-gray-200 p-6 lg:flex-row">
          <div className="mb-6 w-full">
            <h1 className="text-3xl font-bold text-gray-900">
              Metas y seguimiento
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Terminar proyecto personal de IA
            </p>
            <div className="mb-4">
              <Progress value={70} className="mb-4" />
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Fecha límite: 30 jul.</span>
                <span className="text-2xl font-bold text-gray-900">70%</span>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <Button
                variant="outline"
                className="rounded-xl bg-transparent px-6"
              >
                Actualizar progreso
              </Button>
              <Button
                variant="outline"
                className="rounded-xl bg-transparent px-6"
              >
                Editar
              </Button>
            </div>
          </div>
          <div className="hidden w-full lg:block">
            <CustomCalendar />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border-2 border-gray-200 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Historial de metas cumplidas
              </h2>
              <ChevronUp className="h-6 w-6 text-gray-400" />
            </div>

            <div className="mb-6 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Preparar examen de biología
                  </h3>
                  <p className="text-gray-600">10 abr. 2024</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800">
                  <Dumbbell className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Ir al gimnasio tres veces
                  </h3>
                  <p className="text-gray-600">25 feb. 2024</p>
                </div>
              </div>
            </div>

            <Button variant="primary" className="w-full">
              Crear nueva meta
            </Button>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full">
                  <img
                    src="/assets/characters/capito-excited.png"
                    width={40}
                    height={40}
                    alt="capo"
                    className="h-full w-[100px] object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold text-gray-900">
                    Matías, lo lograste 😊
                  </h3>
                  <p className="text-gray-600">
                    ¿Listo para tu siguiente reto? ¡Vamos!
                  </p>
                </div>
              </div>
            </div>

            {/* Objectives Timeline */}
            <div className="rounded-3xl border-2 border-gray-200 p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 py-3">
                  <span className="font-medium text-gray-900">
                    Objetivo corto plazo
                  </span>
                  <span className="text-gray-600">7 días</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 py-3">
                  <span className="font-medium text-gray-900">
                    Objetivo mediano plazo
                  </span>
                  <span className="text-gray-600">30 días</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-gray-900">
                    Objetivo largo plazo
                  </span>
                  <span className="text-gray-600">90 días</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
