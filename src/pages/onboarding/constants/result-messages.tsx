import { ReactNode } from 'react';
import { Category } from '../types/categories';

export const RESULT_MESSAGES: {
  [key in Category]: {
    bubble?: string;
    mainText: ReactNode;
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
      mainText: (
        <>
          ¡Tenemos un plan para ti! <br /> Según lo que respondiste, armamos una
          guía paso a paso para ayudarte a comunicarte mejor, conectar con otros
          y sentirte más seguro. <br />✅ Toca EMPEZAR y ve lo que puedes
          lograr.
        </>
      ),
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
      mainText: (
        <>
          ¡Tenemos un plan para ti! <br /> Según lo que respondiste, armamos una
          guía paso a paso para ayudarte a comunicarte mejor, conectar con otros
          y sentirte más seguro.
          <br />✅ Toca EMPEZAR y ve lo que puedes lograr.
        </>
      ),
      buttonText: 'Empezar',
    },
  ],
  'capaso-ia': [
    {
      bubble: '¿Qué gana el usuario con Capaso IA?',
      mainText:
        'Con Capaso IA, conviertes la inteligencia artificial en tu mano derecha. Organiza tu vida, aprende más rápido y crea hábitos poderosos, todo con un asistente que piensa contigo, no por ti. No es solo tecnología. Es tu ventaja secreta.',
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
      mainText: (
        <>
          ¡Tenemos un plan para ti! <br /> Según lo que respondiste, armamos una
          guía paso a paso para ayudarte a comunicarte mejor, conectar con otros
          y sentirte más seguro.
          <br />✅ Toca EMPEZAR y ve lo que puedes lograr.
        </>
      ),
      buttonText: 'Empezar',
    },
  ],
};
