'use client';

import {
  Gift,
  Diamond,
  Star,
  Flame,
  Moon,
  Droplets,
  Dumbbell,
  Book,
  Smartphone,
  Lock,
} from 'lucide-react';
import { Button, Progress } from '@/shared/ui';
import Breadcrumbs from '@/shared/ui/molecules/Breadcrumbs';

export default function HabitBuilder() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Breadcrumbs
        links={[
          { text: 'Inicio', href: '/home' },
          { text: 'Construcción de hábitos', href: '/habits' },
        ]}
      />

      <div className="mx-auto py-6">
        {/* Header Section */}
        <div className="mb-6 rounded-3xl border-2 border-gray-200 p-8">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="mb-3 text-3xl font-bold text-gray-900">
                Constructor de hábitos
              </h1>
              <p className="mb-8 text-lg text-gray-600">
                Los hábitos que repites hoy, definen quién serás mañana
              </p>

              <div className="max-w-2xl space-y-4">
                <Button variant="outline" className="w-full">
                  Recordatorio (Señal)
                </Button>
                <Button variant="outline" className="w-full">
                  Rutina (proceso)
                </Button>
                <Button variant="outline" className="w-full">
                  Recompensa (intrínseco)
                </Button>
              </div>
            </div>

            <img
              src="/assets/characters/herramienta.png"
              alt="capito"
              className="hidden h-full w-[250px] object-cover lg:block"
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="block gap-6 md:grid md:grid-cols-12">
          {/* Left Sidebar */}
          <div className="w-full md:col-span-3">
            <div className="rounded-3xl border-0 bg-slate-700 p-6 text-white">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Gift className="h-8 w-8 text-orange-400" />
                  <span className="text-xl font-medium">Premio</span>
                </div>

                <div className="flex items-center gap-4">
                  <Diamond className="h-8 w-8 text-blue-400" />
                  <span className="text-xl font-medium">Gemas</span>
                </div>

                <div className="flex items-center gap-4">
                  <Star className="h-8 w-8 text-yellow-400" />
                  <span className="text-xl font-medium">XP total</span>
                </div>

                <div className="flex items-center gap-4">
                  <Flame className="h-8 w-8 text-orange-500" />
                  <span className="text-xl font-medium">Racha</span>
                </div>
              </div>
            </div>
          </div>

          {/* Habits Grid */}
          <div className="col-span-9 mt-6 md:mt-0">
            <div className="grid grid-cols-1 gap-6 rounded-3xl border-2 border-gray-200 p-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Sleep Habit */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Moon className="h-8 w-8 text-yellow-500" />
                  <span className="text-xl font-semibold text-gray-900">
                    Dormir bien
                  </span>
                </div>
                <div className="space-y-2">
                  <Progress value={60} className="mb-4" />
                  <span className="font-medium text-gray-600">Nivel 1</span>
                </div>
              </div>

              {/* Hydration Habit */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Droplets className="h-8 w-8 text-blue-500" />
                  <span className="text-xl font-semibold text-gray-900">
                    Hidratarse
                  </span>
                </div>
                <div className="space-y-2">
                  <Progress value={60} className="mb-4" />
                  <span className="font-medium text-gray-600">Nivel 1</span>
                </div>
              </div>

              {/* Exercise Habit */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Dumbbell className="h-8 w-8 text-purple-500" />
                  <span className="text-xl font-semibold text-gray-900">
                    Moverse
                  </span>
                </div>
                <div className="space-y-2">
                  <Progress value={60} className="mb-4" />
                  <span className="font-medium text-gray-600">Nivel 1</span>
                </div>
              </div>

              {/* Reading Habit */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Book className="h-8 w-8 text-blue-700" />
                  <span className="text-xl font-semibold text-gray-900">
                    Lectura
                  </span>
                </div>
                <div className="space-y-2">
                  <Progress value={60} className="mb-4" />
                  <span className="font-medium text-gray-600">Nivel 1</span>
                </div>
              </div>

              {/* Digital Detox Habit */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Smartphone className="h-8 w-8 text-blue-600" />
                    <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500">
                      <span className="text-xs font-bold text-white">×</span>
                    </div>
                  </div>
                  <span className="text-xl font-semibold text-gray-900">
                    Detox digital
                  </span>
                </div>
                <div className="space-y-2">
                  <Progress value={60} className="mb-4" />
                  <span className="font-medium text-gray-600">Nivel 1</span>
                </div>
              </div>

              {/* Locked Section */}
              <div className="space-y-4">
                <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-gray-100 p-6">
                  <Lock className="mb-3 h-12 w-12 text-gray-400" />
                  <span className="text-xl font-semibold text-gray-500">
                    Bloqueado
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
