import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQuestionnaireStore } from '@features/questionnaire/model/questionnaire-store';
import type { ISkillCategory } from '@features/questionnaire/model/questionnaire-types';
import {
  CategoryGrid,
  MessageScreen,
  QuestionnaireLayout,
  Typography,
} from '@shared/ui';
import type { ICategoryItem } from '@shared/ui/organisms/CategoryGrid/CategoryGrid';

/**
 * Página de selección de categorías
 * Permite al usuario seleccionar la categoría para iniciar un cuestionario
 */
const CategoriesPage: FC = () => {
  const navigate = useNavigate();

  // Acceso al estado global del cuestionario
  const setCategory = useQuestionnaireStore((state) => state.setCategory);
  const resetQuestionnaire = useQuestionnaireStore(
    (state) => state.resetQuestionnaire,
  );

  // Estado local para categorías
  const [categories, setCategories] = useState<ISkillCategory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<ISkillCategory | null>(null);

  // Cargar categorías disponibles
  useEffect(() => {
    // Aquí normalmente se haría una llamada a la API
    // Simulamos con datos estáticos por ahora
    const fetchCategories = () => {
      try {
        setIsLoading(true);

        // Datos simulados de categorías
        const mockCategories: ISkillCategory[] = [
          {
            id: 'eng',
            name: 'Inglés',
            imageUrl: '/assets/flags/us.svg',
            subtitle: '41.7 M de estudiantes',
            languageCode: 'en',
          },
          {
            id: 'fr',
            name: 'Francés',
            imageUrl: '/assets/flags/fr.svg',
            subtitle: '7.6 M de estudiantes',
            languageCode: 'fr',
          },
          {
            id: 'pt',
            name: 'Portugués',
            imageUrl: '/assets/flags/br.svg',
            subtitle: '19.4 M de estudiantes',
            languageCode: 'pt',
          },
          {
            id: 'it',
            name: 'Italiano',
            imageUrl: '/assets/flags/it.svg',
            subtitle: '4.7 M de estudiantes',
            languageCode: 'it',
          },
          {
            id: 'de',
            name: 'Alemán',
            imageUrl: '/assets/flags/de.svg',
            subtitle: '2.8 M de estudiantes',
            languageCode: 'de',
          },
          {
            id: 'ru',
            name: 'Ruso',
            imageUrl: '/assets/flags/ru.svg',
            subtitle: '1.7 M de estudiantes',
            languageCode: 'ru',
          },
          {
            id: 'ca',
            name: 'Catalán',
            imageUrl: '/assets/flags/catalonia.svg',
            subtitle: '1.3 M de estudiantes',
            languageCode: 'ca',
          },
          {
            id: 'sv',
            name: 'Sueco',
            imageUrl: '/assets/flags/se.svg',
            subtitle: '731 mil estudiantes',
            languageCode: 'sv',
          },
        ];

        setCategories(mockCategories);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError(
          'Error al cargar las categorías. Por favor, intenta de nuevo.',
        );
        setIsLoading(false);
      }
    };

    // Limpiar estado anterior del cuestionario
    resetQuestionnaire();

    // Cargar categorías
    fetchCategories();
  }, [resetQuestionnaire]);

  // Manejar la selección de categoría
  const handleCategorySelect = (category: ICategoryItem) => {
    // Encontrar la categoría completa según el ID
    const fullCategory = categories.find((c) => c.id === category.id);

    if (fullCategory) {
      setSelectedCategory(fullCategory);
      console.log(selectedCategory);
      setCategory(fullCategory);

      // Navegar a la página de subcategorías o directamente al cuestionario
      // Por ahora, vamos directamente al cuestionario
      navigate('/questionnaire');
    }
  };

  // Manejar la salida
  const handleExit = () => {
    resetQuestionnaire();
    navigate('/');
  };

  // Mapear categorías al formato del componente
  /*  const categoryItems: ICategoryItem[] = categories.map((category) => ({
    id: category.id,
    name: category.name,
    imageUrl: category.imageUrl,
    subtitle: category.subtitle,
  })); */

  // Mostrar mensaje de error si ocurrió alguno
  if (error) {
    return (
      <QuestionnaireLayout onExit={handleExit}>
        <MessageScreen
          message="Error"
          submessage={error}
          characterMood="confused"
          onContinue={handleExit}
          continueButtonText="Volver al inicio"
        />
      </QuestionnaireLayout>
    );
  }

  // Mostrar pantalla de carga
  if (isLoading) {
    return (
      <QuestionnaireLayout showExitButton={false}>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="border-primary mb-4 h-12 w-12 animate-spin rounded-full border-4 border-t-transparent"></div>
          <p className="text-lg">Cargando categorías...</p>
        </div>
      </QuestionnaireLayout>
    );
  }

  // Renderizar la página de categorías
  return (
    <QuestionnaireLayout title="Selecciona un idioma" onExit={handleExit}>
      <div className="flex flex-col items-center px-4 py-8 md:px-6">
        <div className="mx-auto w-full max-w-4xl">
          <Typography variant="h3" component="h1" className="mb-8 text-center">
            Quiero aprender:
          </Typography>

          <CategoryGrid
            categories={[]} //TODO: Validar arreglo de categorias
            onSelectCategory={handleCategorySelect}
            columns={4}
            showBorders={true}
          />
        </div>
      </div>
    </QuestionnaireLayout>
  );
};

// Exportar como default para facilitar la carga dinámica
export default CategoriesPage;
