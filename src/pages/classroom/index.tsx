import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Clock,
  Users,
  GraduationCap,
} from 'lucide-react';
import { Button, Typography } from '@/shared/ui';
import { useState } from 'react';
import { CLASSES, STUDENTS } from './dummy';

export default function TeacherDashboard() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);

  const handleClassClick = (classId: number) => {
    setSelectedClass(classId);
  };

  const handleBackToClasses = () => {
    setSelectedClass(null);
  };

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'bg-green-100 text-green-800';
    if (grade.startsWith('B')) return 'bg-blue-100 text-blue-800';
    if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const getAttendanceColor = (attendance: string) => {
    const percent = Number.parseInt(attendance);
    if (percent >= 95) return 'text-green-600';
    if (percent >= 85) return 'text-blue-600';
    if (percent >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (selectedClass) {
    const currentClass = CLASSES.find((c) => c.id === selectedClass);
    const classStudents =
      STUDENTS[selectedClass as keyof typeof STUDENTS] || [];

    return (
      <div className="min-h-screen p-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <Button variant="ghost" onClick={handleBackToClasses}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a mis clases
            </Button>

            <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex items-center gap-4">
                <div
                  className={`h-16 w-16 rounded-2xl ${currentClass?.color} flex items-center justify-center shadow-lg`}
                >
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div>
                  <Typography
                    variant="h3"
                    className="text-3xl font-bold text-gray-900"
                  >
                    {currentClass?.name}
                  </Typography>
                  <Typography variant="body2" className="text-lg text-gray-600">
                    {currentClass?.schedule} • {currentClass?.room}
                  </Typography>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex items-center gap-1 rounded-full bg-gray-300 px-4 py-2">
                  <Users className="mr-2 h-4 w-4" />
                  <Typography variant="body2" className="text-primary">
                    {classStudents.length} estudiantes
                  </Typography>
                </div>
                <Typography
                  variant="body2"
                  className="rounded-full border border-gray-200 px-4 py-2"
                >
                  {currentClass?.semester}
                </Typography>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {classStudents.map((student) => (
              <div
                key={student.id}
                className="cursor-pointer rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Avatar destacado */}
                <div className="mb-6 flex flex-col items-center">
                  <div className="relative">
                    <div className="bg-primary-lighter h-20 w-20 rounded-full shadow-lg"></div>
                    {/* Indicador de estado online */}
                    <div className="absolute -right-1 -bottom-1 h-6 w-6 rounded-full border-3 border-white bg-green-400 shadow-sm"></div>
                  </div>

                  <div className="mt-4 text-center">
                    <Typography variant="h6" className="mb-1">
                      {student.name}
                    </Typography>
                    <p className="text-sm text-gray-500">{student.email}</p>
                  </div>
                </div>

                {/* Información del estudiante */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                      <span className="text-sm font-medium text-gray-700">
                        Calificación
                      </span>
                    </div>
                    <div
                      className={`${getGradeColor(student.grade)} rounded-full px-3 py-1 font-semibold`}
                    >
                      {student.grade}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-400"></div>
                      <span className="text-sm font-medium text-gray-700">
                        Asistencia
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-semibold ${getAttendanceColor(student.attendance)}`}
                      >
                        {student.attendance}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <Typography variant="h3" className="text-primary">
                Mis Clases
              </Typography>
              <Typography variant="h6" className="font-normal">
                Gestiona tus clases y estudiantes
              </Typography>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center gap-2 rounded-full bg-gray-300 px-3 py-1">
              <BookOpen className="mr-1 h-4 w-4" />
              <Typography variant="body2" className="text-primary">
                {CLASSES.length} clases activas
              </Typography>
            </div>
            <Typography
              variant="body2"
              className="rounded-full border border-gray-200 bg-white px-3 py-1 shadow-sm"
            >
              Semestre 2024-1
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CLASSES.map((classItem) => (
            <div
              key={classItem.id}
              className="cursor-pointer rounded-lg border border-gray-200 bg-white p-6 transition-all duration-200 hover:scale-105 hover:shadow-lg"
              onClick={() => handleClassClick(classItem.id)}
            >
              <div>
                <div className="flex items-start justify-between">
                  <div
                    className={`h-10 w-10 rounded-lg ${classItem.color} mb-3 flex items-center justify-center`}
                  >
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                </div>
                <Typography variant="h5" className="text-primary">
                  {classItem.name}
                </Typography>
                <Typography
                  className="text-foreground-secondary pt-1 pb-3 font-normal"
                  variant="body2"
                >
                  {classItem.room}
                </Typography>
              </div>
              <div>
                <div className="space-y-3">
                  <div className="text-foreground-secondary flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{classItem.schedule}</span>
                  </div>
                  <div className="text-foreground-secondary flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{classItem.semester}</span>
                  </div>
                  <div className="flex items-center justify-end border-t border-gray-200 pt-2">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <Typography variant="body2" className="font-semibold">
                        {classItem.studentCount} estudiantes
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
