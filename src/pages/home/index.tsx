import { Button, Progress } from '@/shared/ui';
import RightSection from '@/shared/ui/organisms/right-section/RightSection';

export default function Component() {
  const weeklyData = [
    { day: 1, height: 40 },
    { day: 2, height: 60 },
    { day: 3, height: 75 },
    { day: 4, height: 85 },
    { day: 5, height: 100 },
  ];

  return (
    <div className="with-right-section">
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="mx-auto max-w-6xl space-y-6">
          {/* Main Header Card */}
          <div className="p-8">
            <div className="flex items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="/assets/characters/capito-excited.png"
                  alt="Capito"
                  width={200}
                />
              </div>
              <div className="flex-1">
                <h1 className="mb-4 text-5xl font-bold text-gray-900">
                  CAPASO IA
                </h1>
                <p className="mb-6 text-xl text-gray-600">
                  Te recomiendo practicar
                  <br />
                  la escucha activa hoy
                </p>
                <Button>Elige un desafío</Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Objectives Card */}
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div>
                <h2 className="text-2xl font-bold">Objetivos</h2>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-gray-900">60%</div>
                <div className="space-y-2">
                  <Progress value={60} className="h-4" />
                  <p className="text-lg text-gray-600">Productividad</p>
                </div>
              </div>
            </div>

            {/* Challenges Card */}
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div>
                <h2 className="text-2xl font-bold">Desafíos</h2>
              </div>
              <div>
                <div className="flex h-32 items-center justify-center text-gray-400">
                  {/* Empty state for challenges */}
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Progress Card */}
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div>
              <h2 className="text-2xl font-bold">Progreso semanal</h2>
            </div>
            <div>
              <div className="space-y-4">
                <div className="space-y-2 text-lg">
                  <div>1) Usuario 1</div>
                  <div>2) Usuario 2</div>
                  <div>3) Usuario 3</div>
                </div>
                <div className="mt-8 flex h-32 items-end gap-4">
                  {weeklyData.map((data, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-lg border-2 border-blue-600 bg-blue-400"
                      style={{ height: `${data.height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightSection />
    </div>
  );
}
