import { Play, Flame, Diamond, Star } from 'lucide-react';
import { Button } from '@/shared/ui';

export default function MotivationDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Top Section - Motivation */}
        <div className="rounded-3xl border-2 border-gray-200 p-8">
          <div className="flex items-start justify-between">
            <div className="max-w-2xl flex-1">
              <h1 className="mb-4 text-3xl font-bold text-gray-900">
                Motivación
              </h1>
              <p className="mb-8 text-lg text-gray-600">
                El que nunca ha cometido un error, nunca ha intentado nada
                nuevo.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Desafío relámpago
                </h2>
                <p className="mb-4 text-lg text-gray-700">
                  Escribe 3 cosas por las que estás agradecido hoy
                </p>
                <p className="mb-6 text-gray-500 italic">— Eleanor Roosevelt</p>
                <button className="rounded-2xl bg-orange-500 px-8 py-3 text-lg font-semibold text-white hover:bg-orange-600">
                  Lo logré
                </button>
              </div>
            </div>

            <img
              src="/assets/characters/capito-excited-2.png"
              className="w-[250px]"
            />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Explore and Inspire */}
            <div className="rounded-3xl border-2 border-gray-200 p-6">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Explora e inspírate
              </h2>

              <div className="space-y-6">
                {/* Book Recommendation */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-20 w-16 items-center justify-center rounded-lg bg-yellow-200">
                      <div className="text-center text-xs font-semibold text-gray-800">
                        <div>Los 7</div>
                        <div>hábitos</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="mb-1 text-sm text-gray-600">
                      Libro recomendado del día:
                    </p>
                    <h3 className="mb-3 font-semibold text-gray-900">
                      Los 7 hábitos de los adolescentes altamente efectivos
                    </h3>
                    <Button className="rounded-xl bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600">
                      Ver resumen
                    </Button>
                  </div>
                </div>

                {/* Video Recommendation */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="mb-1 text-sm text-gray-600">
                      🎬 Video recomendado:
                    </p>
                    <h3 className="font-semibold text-gray-900">
                      "Cómo salir de
                      <br />
                      la procrastinación
                      <br />
                      TED Talk"
                    </h3>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
                    <Play className="ml-1 h-6 w-6 text-white" fill="white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Feeling */}
            <div className="rounded-3xl border-2 border-gray-200 p-6">
              <h2 className="mb-6 text-xl font-bold text-gray-900">
                ¿Cómo te sentiste esta semana?
              </h2>

              <div className="flex justify-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-2xl">
                  😞
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-2xl">
                  😐
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-2xl">
                  🙂
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-2xl">
                  😊
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="rounded-3xl border-2 border-gray-200 p-6">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Frase del día
            </h2>

            <blockquote className="mb-8 text-lg text-gray-700 italic">
              "El futuro pertenece a quienes creen en la belleza de sus sueños."
            </blockquote>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">
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
    </div>
  );
}
