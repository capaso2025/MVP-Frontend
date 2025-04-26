import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQuestionnaireStore } from '@features/questionnaire/model/questionnaire-store';
import type { ISkillCategory } from '@features/questionnaire/model/questionnaire-types';
import { CategoryCard } from './components/CategoryCard';
import { QuestionnaireLayout } from '@shared/ui';

/**
 * Interfaz para subcategorías de habilidades
 */
interface ISubSkill {
  id: string;
  name: string;
}

/**
 * Interfaz para categoría con subcategorías
 */
interface ISkillCategoryWithSubSkills extends ISkillCategory {
  subSkills: ISubSkill[];
}

/**
 * Página de selección de categorías
 * Permite al usuario seleccionar la categoría de habilidad para su desarrollo
 */
const CategoriesPage: FC = () => {
  const navigate = useNavigate();
  const resetQuestionnaire = useQuestionnaireStore(
    (state) => state.resetQuestionnaire,
  );
  const setCategory = useQuestionnaireStore((state) => state.setCategory);

  // Estado para manejar el hover
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Datos de las categorías (en un proyecto real vendrían de una API)
  const categories: ISkillCategoryWithSubSkills[] = [
    {
      id: 'soft-skills',
      name: 'Hoy comienza tu transformación',
      imageUrl: '/assets/icons/soft-skills.svg',
      subSkills: [
        { id: 'comm', name: 'Comunicación efectiva' },
        { id: 'team', name: 'Trabajo en equipo' },
        { id: 'adapt', name: 'Adaptabilidad y resiliencia' },
        { id: 'creative', name: 'Creatividad e innovación' },
      ],
    },
    {
      id: 'social-wellness',
      name: 'Bienestar social',
      imageUrl: '/assets/icons/social-wellness.svg',
      subSkills: [
        { id: 'self-care', name: 'Autocuidado y límites saludables' },
        { id: 'gratitude', name: 'Gratitud y reciprocidad' },
        { id: 'social-adapt', name: 'Adaptabilidad social' },
        { id: 'empathy', name: 'Empatía y conexión humana' },
      ],
    },
    {
      id: 'time-management',
      name: 'Optimización de tiempo',
      imageUrl: '/assets/icons/time-management.svg',
      subSkills: [
        { id: 'prioritization', name: 'Priorización inteligente' },
        { id: 'planning', name: 'Planificación efectiva' },
        { id: 'anti-procrastination', name: 'Técnicas anti procrastinación' },
      ],
    },
    {
      id: 'emotional-control',
      name: 'Control de emociones',
      imageUrl: '/assets/icons/emotional-control.svg',
      subSkills: [
        { id: 'emotional-awareness', name: 'Autoconciencia emocional' },
        { id: 'discomfort-tolerance', name: 'Tolerancia al malestar' },
        { id: 'self-compassion', name: 'Autocompasión' },
        { id: 'positive-emotions', name: 'Cultivo de emociones positivas' },
      ],
    },
  ];

  /**
   * Maneja la selección de una categoría
   */
  const handleCategorySelect = (category: ISkillCategoryWithSubSkills) => {
    // Limpiar estado anterior
    resetQuestionnaire();

    // Establecer la categoría seleccionada
    setCategory({
      id: category.id,
      name: category.name,
      imageUrl: category.imageUrl,
    });

    // Navegar al cuestionario
    navigate('/questionnaire');
  };

  /**
   * Maneja la salida/cancelación
   */
  const handleExit = () => {
    resetQuestionnaire();
    navigate('/');
  };

  return (
    <QuestionnaireLayout title="Selección de habilidades" onExit={handleExit}>
      <div className="flex flex-col items-center px-4 py-8 md:px-6">
        <div className="mx-auto w-full max-w-4xl">
          <h1 className="mb-8 text-center text-3xl font-bold">
            Quiero ser un CAPO en...
          </h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
                onClick={() => handleCategorySelect(category)}
              />
            ))}
          </div>
        </div>
      </div>
    </QuestionnaireLayout>
  );
};

export default CategoriesPage;
