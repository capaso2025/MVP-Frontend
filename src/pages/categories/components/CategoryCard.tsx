import { FC, MouseEvent } from 'react';
import { Icon } from '@shared/ui';

/**
 * Interfaz para subcategorías de habilidades
 */
interface ISubSkill {
  id: string;
  name: string;
}

/**
 * Interfaz para la categoría con subcategorías
 */
interface ISkillCategoryWithSubSkills {
  id: string;
  name: string;
  imageUrl: string;
  subSkills: ISubSkill[];
}

/**
 * Props para el componente CategoryCard
 */
interface ICategoryCardProps {
  /**
   * Datos de la categoría a mostrar
   */
  category: ISkillCategoryWithSubSkills;

  /**
   * Si la tarjeta está activa (hover)
   */
  isActive: boolean;

  /**
   * Evento al hacer click en la tarjeta
   */
  onClick: () => void;

  /**
   * Evento al colocar el cursor sobre la tarjeta
   */
  onMouseEnter: () => void;

  /**
   * Evento al quitar el cursor de la tarjeta
   */
  onMouseLeave: () => void;
}

/**
 * Componente para mostrar una categoría de habilidad con efecto hover
 * que muestra las subcategorías
 */
export const CategoryCard: FC<ICategoryCardProps> = ({
  category,
  isActive,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  /**
   * Manejador de click que previene propagación
   */
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onClick();
  };

  /**
   * Determina la altura dinámica basada en el número de subcategorías
   */
  const getCardHeight = (): string => {
    if (!isActive) return 'h-48'; // Altura base

    // Altura adicional basada en número de subcategorías
    const baseHeight = 48; // altura en rem cuando no está activo
    const additionalHeight = Math.min(category.subSkills.length * 2, 10); // 2rem por subcategoría, máximo 10

    return `h-${baseHeight + additionalHeight}`;
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 ${getCardHeight()} hover:shadow-md`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
    >
      <div className="flex h-full flex-col p-6">
        {/* Icono y título */}
        <div className="mb-4 flex items-center">
          <div className="mr-4 flex h-16 w-16 items-center justify-center">
            {category.imageUrl ? (
              <img
                src={category.imageUrl}
                alt={category.name}
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <div className="bg-primary-light/20 flex h-14 w-14 items-center justify-center rounded-full">
                <Icon name="info" size="lg" className="text-primary-dark" />
              </div>
            )}
          </div>
          <h2 className="text-xl font-bold">{category.name}</h2>
        </div>

        {/* Subcategorías (visibles en hover) */}
        <div
          className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <p className="mb-2 font-medium text-gray-700">Aprenderás:</p>
          <ul className="space-y-2">
            {category.subSkills.map((subSkill) => (
              <li key={subSkill.id} className="flex items-center">
                <Icon name="check" size="sm" className="text-primary mr-2" />
                <span className="text-gray-700">{subSkill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
