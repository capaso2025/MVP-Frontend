import { PlusIcon } from '@/shared/ui/atoms/Icon/Icon';

export default function ColegioDashboard() {
  return (
    <>
      {/* Main content */}
      <main className="p-5">
        {/* Mis Clases section */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-medium text-blue-900">Mis Clases</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Nueva clase card */}
            <div className="flex h-45 w-45 flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm">
              <button className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                <PlusIcon className="h-6 w-6" />
              </button>
              <span className="font-medium text-purple-600">Nueva clase</span>
            </div>

            {/* You can add more class cards here */}
          </div>
        </section>

        {/* Recursos section */}
        <section>
          <h2 className="mb-4 text-xl font-medium text-blue-900">Recursos</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {/* Recurso card */}
            <div className="block">
              <div className="overflow-hidden rounded-lg bg-green-100 shadow-sm">
                <div className="relative h-32 bg-green-200 p-4">
                  <div className="absolute top-4 left-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-300">
                    <div className="flex space-x-1">
                      <div className="h-4 w-2 rounded-full bg-blue-500"></div>
                      <div className="h-5 w-2 rounded-full bg-pink-500"></div>
                      <div className="h-6 w-2 rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">
                    Rincón de Actividades de Mojo
                  </h3>
                  <p className="text-sm text-gray-600">
                    Actividades divertidas para estudiantes
                  </p>
                </div>
              </div>
            </div>

            {/* You can add more resource cards here */}
          </div>
        </section>
      </main>
    </>
  );
}
