import Input from '@/shared/ui/atoms/Input/Input';
import Breadcrumbs from '@/shared/ui/molecules/Breadcrumbs';
import {
  Play,
  CheckSquare,
  Heart,
  Users,
  Music,
  Book,
  Mountain,
  Hourglass,
  Flame,
  Diamond,
  Star,
} from 'lucide-react';

export default function LearningPage() {
  return (
    <>
      <Breadcrumbs
        links={[
          { text: 'Inicio', href: '/home' },
          { text: 'Aprendizaje y reflexión', href: '/learning' },
        ]}
      />
      <div className="mx-auto space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left - Learning and Reflection */}
          <div className="rounded-3xl border-2 border-gray-200 p-8">
            <h1 className="mb-4 text-3xl font-bold text-gray-900">
              Aprendizaje y Reflexión
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              El que nunca ha cometido un error, nunca ha intentado nada nuevo.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded bg-gray-800">
                  <span className="text-sm text-white">✏️</span>
                </div>
                <div className="flex-1">
                  <h2 className="mb-3 text-xl font-bold text-gray-900">
                    Diario Capaso
                  </h2>
                  <ul className="mb-4 space-y-2">
                    <li className="text-gray-700">• ¿Cómo fue tu semana?</li>
                    <li className="text-gray-700">• ¿Qué aprendiste hoy?</li>
                  </ul>
                </div>
              </div>

              <Input
                placeholder="Respuesta escrita + XP"
                className="h-12 w-full rounded-xl border-2 border-gray-300 text-gray-600"
              />
            </div>
          </div>

          {/* Right - Personal Notes */}
          <div className="rounded-3xl border-2 border-gray-200 p-8">
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-amber-600">
                <span className="text-sm text-white">📝</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Tus notas personales
              </h2>
            </div>

            <ul className="mb-6 space-y-2">
              <li className="text-gray-700">• Mis aprendizajes</li>
              <li className="text-gray-700">• Favoritos</li>
            </ul>

            <Input
              placeholder="📌 Marcar como sabiduría dorada"
              className="mb-6 h-12 w-full rounded-xl border-2 border-gray-800"
            />

            {/* Mascot Illustration */}
            <img
              src="/assets/characters/capito-ladders.png"
              alt="Capito"
              className="mx-auto w-[200px]"
            />
          </div>
        </div>

        {/* Bottom Section - Modules */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border-2 border-gray-200 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-400 font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Vive el ahora
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Play className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">
                    Mini práctica guiada de mindfulness
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700">
                      ¿Estoy en el presente o en el pasado?
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700">
                      ¿Qué está pasando ahora que puedo disfrutar?
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border-2 border-gray-200 p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400 font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Aprende del ayer
                </h3>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-amber-50 p-4 text-center">
                  <span className="font-medium text-gray-700">
                    Diario interactivo
                  </span>
                </div>
                <div className="rounded-xl bg-orange-50 p-4 text-center">
                  <span className="font-medium text-gray-700">
                    Ejercicio compasivo
                  </span>
                  <Heart className="mx-auto mt-2 h-6 w-6 text-orange-500" />
                </div>
              </div>
            </div>
            <div className="rounded-3xl border-2 border-gray-200 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-400 font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Nuevas experiencias
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                    <Book className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-xs text-gray-700">Libro recome-</span>
                </div>

                <div className="text-center">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                    <Mountain className="h-6 w-6 text-purple-600" />
                  </div>
                  <span className="text-xs text-gray-700">Desafío semanal</span>
                </div>

                <div className="text-center">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                    <Play className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-xs text-gray-700">Video externo</span>
                </div>

                <div className="text-center">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <span className="text-xs text-gray-700">Acción social</span>
                </div>

                <div className="text-center">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                    <Hourglass className="h-6 w-6 text-amber-600" />
                  </div>
                  <span className="text-xs text-gray-700">Temporizador</span>
                </div>

                <div className="text-center">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                    <Music className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-xs text-gray-700">
                    Playlist emocional
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border-2 border-gray-200 p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 font-bold text-white">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Domina tus pensamientos
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-blue-50 p-4 text-center">
                  <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded bg-blue-200">
                    <span className="text-sm text-blue-800">🧩</span>
                  </div>
                  <span className="text-sm text-gray-700">
                    Juego de sustitución
                  </span>
                </div>
                <div className="rounded-xl bg-yellow-50 p-4 text-center">
                  <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded bg-yellow-200">
                    <span className="text-sm text-yellow-800">😊</span>
                  </div>
                  <span className="text-sm text-gray-700">Temporizador</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 space-y-6">
            {/* Quote */}
            <div className="rounded-3xl border-2 border-gray-200 p-6">
              <blockquote className="text-center text-lg text-gray-700 italic">
                "La única forma de hacer un gran trabajo es amar lo que haces."
              </blockquote>
            </div>

            {/* Progress */}
            <div className="rounded-3xl border-2 border-gray-200 p-6">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Progreso del módulo:
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Flame className="h-6 w-6 text-orange-500" />
                  <span className="font-medium text-gray-700">
                    Racha: 3 días
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Diamond className="h-6 w-6 text-blue-500" />
                  <span className="font-medium text-gray-700">Gemas: 8</span>
                </div>

                <div className="flex items-center gap-3">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <span className="font-medium text-gray-700">
                    Nivel introspectivo: Intermedio
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
