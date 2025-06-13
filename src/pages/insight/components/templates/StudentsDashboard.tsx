'use client';

import { useState } from 'react';
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import {
  TrendingUp,
  Award,
  BookOpen,
  ArrowLeft,
  GraduationCap,
  SortDesc,
} from 'lucide-react';
import { Button, Typography } from '@/shared/ui';
import { studentsData } from './dummy';
import Input from '@/shared/ui/atoms/Input/Input';
import { SearchIcon } from '@/shared/ui/atoms/Icon/Icon';

// Datos completos de estudiantes con historial

const SUBJECT_COLORS = {
  math: '#ef4444',
  science: '#22c55e',
  spanish: '#3b82f6',
  english: '#f59e0b',
};

const SUBJECT_NAMES = {
  math: 'Habilidades Blandas',
  science: 'Bienestar Social',
  spanish: 'Optimización de Tiempo',
  english: 'Control de Emociones',
};

export default function StudentDashboard() {
  const [selectedStudent, setSelectedStudent] = useState<
    (typeof studentsData)[0] | null
  >(null);

  if (!selectedStudent) {
    return (
      <div className="p-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <Typography variant="h3">Lista de Estudiantes</Typography>
                <Typography
                  variant="h6"
                  className="text-foreground-secondary font-normal"
                >
                  Selecciona un estudiante para ver sus métricas de progreso
                </Typography>
              </div>
            </div>
          </div>

          {/* Filtros y búsqueda */}
          <Input
            label="Nombre de estudiante"
            className="mb-4"
            icon={<SearchIcon />}
          />

          <div className="flex justify-end">
            <div className="mb-4 flex items-center gap-2">
              <SortDesc size={20} />
              <Typography variant="body2">Ordenar por</Typography>
            </div>
          </div>
          {/* Lista de estudiantes */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {studentsData.map((student) => {
              const average = Math.round(
                (student.currentGrades.math +
                  student.currentGrades.science +
                  student.currentGrades.spanish +
                  student.currentGrades.english) /
                  5,
              );

              return (
                <div
                  key={student.id}
                  className="cursor-pointer rounded-lg border border-gray-200 bg-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  onClick={() => setSelectedStudent(student)}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-[max-content_auto] gap-4">
                      <div className="bg-landing h-12 w-12 rounded-full"></div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">
                          {student.name}
                        </h3>
                        <p className="text-sm text-gray-500">{student.email}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-sm text-gray-600">
                            Promedio:
                          </span>
                          <span
                            className={`text-lg font-bold ${
                              average >= 90
                                ? 'text-green-600'
                                : average >= 80
                                  ? 'text-blue-600'
                                  : average >= 70
                                    ? 'text-yellow-600'
                                    : 'text-red-600'
                            }`}
                          >
                            {average}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Dashboard individual del estudiante
  const student = selectedStudent;
  const currentAverage = Math.round(
    (student.currentGrades.math +
      student.currentGrades.science +
      student.currentGrades.spanish +
      student.currentGrades.english) /
      5,
  );

  // Preparar datos para el radar chart
  const radarData = Object.entries(student.currentGrades).map(
    ([subject, grade]) => ({
      subject: SUBJECT_NAMES[subject as keyof typeof SUBJECT_NAMES],
      grade,
      fullMark: 100,
    }),
  );

  // Encontrar mejor y peor materia
  const grades = Object.entries(student.currentGrades);
  const bestSubject = grades.reduce((prev, current) =>
    current[1] > prev[1] ? current : prev,
  );
  const worstSubject = grades.reduce((prev, current) =>
    current[1] < prev[1] ? current : prev,
  );

  return (
    <div className="p-4">
      <div className="mx-auto max-w-7xl">
        {/* Header con botón de regreso */}
        <div className="mb-6 flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => setSelectedStudent(null)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la lista
          </Button>
          <div className="flex items-center gap-3">
            <div className="bg-landing h-12 w-12 rounded-full"></div>
            <div>
              <Typography variant="h4">{student.name}</Typography>
              <Typography variant="body1" className="text-foreground-secondary">
                Dashboard de Progreso Individual
              </Typography>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout para métricas individuales */}
        <div className="grid auto-rows-auto grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {/* Tarjeta de Promedio General - Destacada */}
          <div className="row-span-1 rounded-lg border border-blue-500 bg-gradient-to-br from-blue-300/40 to-blue-800/60 p-4 md:col-span-2 lg:col-span-2">
            <div className="pb-2">
              <Typography className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Promedio General
              </Typography>
            </div>
            <div className="pt-0">
              <Typography variant="h2">{currentAverage}</Typography>
              <Typography className="text-sm opacity-90">
                sobre 100 puntos
              </Typography>
            </div>
          </div>

          {/* Mejor Materia */}
          <div className="row-span-1 rounded-lg border border-green-500 bg-gradient-to-br from-green-300/40 to-green-800/60 p-4 md:col-span-1 lg:col-span-2">
            <div className="pb-2">
              <Typography className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                Mejor Materia
              </Typography>
            </div>
            <div className="pt-0">
              <Typography variant="h5">
                {SUBJECT_NAMES[bestSubject[0] as keyof typeof SUBJECT_NAMES]}
              </Typography>
              <Typography variant="h4" className="font-normal">
                {bestSubject[1]}
              </Typography>
            </div>
          </div>

          {/* Materia a Mejorar */}
          <div className="row-span-1 rounded-lg border border-orange-500 bg-gradient-to-br from-orange-300/40 to-orange-600/60 p-4 md:col-span-1 lg:col-span-2">
            <div className="pb-2">
              <Typography className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />A Mejorar
              </Typography>
            </div>
            <div className="pt-0">
              <div className="text-lg font-bold">
                {SUBJECT_NAMES[worstSubject[0] as keyof typeof SUBJECT_NAMES]}
              </div>
              <div className="text-2xl font-bold">{worstSubject[1]}</div>
            </div>
          </div>

          {/* Gráfico Radar de Habilidades */}
          <div className="row-span-2 rounded-lg border border-gray-200 bg-white p-4 md:col-span-2 lg:col-span-3">
            <div className="pb-2">
              <Typography variant="h5">Perfil de Habilidades</Typography>
              <Typography
                variant="body2"
                className="text-foreground-secondary mb-4"
              >
                Distribución de calificaciones por materia
              </Typography>
            </div>
            <div className="pt-0">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={{ fontSize: 10 }}
                    />
                    <Radar
                      name="Calificaciones"
                      dataKey="grade"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Progreso Mensual */}
          <div className="row-span-2 rounded-lg border border-gray-200 bg-white p-4 md:col-span-4 lg:col-span-3">
            <div className="pb-2">
              <Typography variant="h5">Evolución Mensual</Typography>
              <Typography
                variant="body2"
                className="text-foreground-secondary mb-4"
              >
                Progreso de calificaciones a lo largo del tiempo
              </Typography>
            </div>
            <div className="pt-0">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={student.monthlyProgress}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[60, 100]} />
                    <Tooltip />
                    <Legend />
                    {Object.entries(SUBJECT_COLORS).map(([subject, color]) => (
                      <Line
                        key={subject}
                        type="monotone"
                        dataKey={subject}
                        name={
                          SUBJECT_NAMES[subject as keyof typeof SUBJECT_NAMES]
                        }
                        stroke={color}
                        strokeWidth={2}
                        activeDot={{ r: 6 }}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Calificaciones por Evaluación */}
          <div className="row-span-2 rounded-lg border border-gray-200 bg-white p-4 md:col-span-4 lg:col-span-6">
            <div className="pb-2">
              <Typography variant="h5">Rendimiento por Evaluación</Typography>
              <Typography
                variant="body2"
                className="text-foreground-secondary mb-4"
              >
                Calificaciones en diferentes tipos de evaluación
              </Typography>
            </div>
            <div className="pt-0">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={student.assignments}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    {Object.entries(SUBJECT_COLORS).map(([subject, color]) => (
                      <Bar
                        key={subject}
                        dataKey={subject}
                        name={
                          SUBJECT_NAMES[subject as keyof typeof SUBJECT_NAMES]
                        }
                        fill={color}
                      />
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
