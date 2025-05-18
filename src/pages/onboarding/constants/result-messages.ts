import { Category } from '../types/categories';

export const RESULT_MESSAGES: {
  [key in Category]: {
    bubble?: string;
    mainText: string;
    buttonText: string;
  }[];
} = {
  'soft-skills': [
    {
      bubble: 'Lo que ganarás siendo un Capo en esto…',
      mainText:
        'Tu voz tiene poder. Y cuando aprendes a usarla con seguridad, puedes abrirte a nuevas oportunidades, crear relaciones auténticas y liderar con confianza. Vamos a desarrollar esa versión fuerte y clara de ti.',
      buttonText: 'Siguiente',
    },
    {
      mainText:
        'Con base a tus respuestas [usuario], preparamos un roadmap hecho para ti. Cada paso te ayudará a mejorar tu forma de comunicarte, conectar con otros y sentirte más seguro en cualquier situación. ✅ Toca EMPEZAR para ver tu plan',
      buttonText: 'Empezar',
    },
  ],
  'time-management': [
    {
      bubble: 'Lo que ganarás siendo un Capo en esto…',
      mainText:
        'Tu tiempo es uno de tus recursos más valiosos. Aprender a organizarlo te da libertad: más enfoque, menos estrés y más espacio para lo que realmente te llena. Vamos a construir una rutina que te funcione de verdad',
      buttonText: 'Siguiente',
    },
    {
      mainText:
        'Con base en tus respuestas [usuario], preparamos un roadmap a tu medida. Vas a aprender a priorizar, planificar y avanzar sin sentir que estás corriendo todo ✅ el tiempo. ✅ Toca EMPEZAR para ver tu plan',
      buttonText: 'Empezar',
    },
  ],
  'personal well-being': [
    {
      bubble: 'Lo que ganarás siendo un Capo en esto…',
      mainText:
        'Tu bienestar es la base para todo lo que quieres lograr. Cuando cuidas tu cuerpo y mente, todo mejora: tu ánimo, tus relaciones y tu rendimiento. Vamos a ayudarte q construir hábitos que realmente se mantengan.',
      buttonText: 'Siguiente',
    },
    {
      mainText:
        'Con base en tus respuestas [usuario], preparamos un roadmap pensando en tu bienestar. Vas a trabajar en hábitos reales, sostenibles y adaptados a tu ritmo. ✅ Toca EMPEZAR para ver tu plan',
      buttonText: 'Empezar',
    },
  ],
  'emotional-control': [
    {
      bubble: 'Lo que ganarás siendo un Capo en esto…',
      mainText:
        'Sentir no está mal. Pero aprender a regular tus emociones te da poder real: claridad para tomar decisiones, fuerza para superar retos y calma para vivir con más ligereza. Vamos a enseñarte cómo lograrlo.',
      buttonText: 'Siguiente',
    },
    {
      mainText:
        'Con base en tus respuestas [usuario], preparamos un roadmap pensando en tu bienestar. Vas a trabajar en hábitos reales, sostenibles y adaptados a tu ritmo. ✅ Toca EMPEZAR para ver tu plan',
      buttonText: 'Empezar',
    },
  ],
};
