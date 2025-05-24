import { Plus } from "lucide-react"

export default function ColegioDashboard() {
  return (
    <>
      {/* Main content */}
      <main className="p-5">
        {/* Mis Clases section */}
        <section className="mb-8">
          <h2 className="text-blue-900 font-medium text-xl mb-4">Mis Clases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Nueva clase card */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center justify-center h-45 w-45">
              <button className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center text-white mb-4">
                <Plus className="h-6 w-6" />
              </button>
              <span className="text-purple-600 font-medium">Nueva clase</span>
            </div>

            {/* You can add more class cards here */}
          </div>
        </section>

        {/* Recursos section */}
        <section>
          <h2 className="text-blue-900 font-medium text-xl mb-4">Recursos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Recurso card */}
            <div className="block">
              <div className="bg-green-100 rounded-lg overflow-hidden shadow-sm">
                <div className="h-32 bg-green-200 p-4 relative">
                  <div className="absolute top-4 left-4 h-16 w-16 bg-green-300 rounded-full flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="h-4 w-2 bg-blue-500 rounded-full"></div>
                      <div className="h-5 w-2 bg-pink-500 rounded-full"></div>
                      <div className="h-6 w-2 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">Rincón de Actividades de Mojo</h3>
                  <p className="text-sm text-gray-600">Actividades divertidas para estudiantes</p>
                </div>
              </div>
            </div>

            {/* You can add more resource cards here */}
          </div>
        </section>
      </main>
    </>
  )
}
