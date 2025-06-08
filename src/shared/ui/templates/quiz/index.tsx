import type React from 'react';
import { useState } from 'react';
import { CheckCircle, Volume2, Video } from 'lucide-react';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';
import { cn } from '@/shared/lib/utils';

interface Question {
  id: number;
  question: string;
  icon: React.ReactNode;
  options: string[];
  correctAnswer: number;
  points: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: '¿Cuál de estos es un ejemplo de ruido en la comunicación?',
    icon: <Volume2 className="h-6 w-6 text-orange-500" />,
    options: [
      'Un mensaje claro',
      'Una palabra mal entendida',
      'Un idioma compartido',
    ],
    correctAnswer: 1,
    points: 10,
  },
  {
    id: 2,
    question: '¿Cuál es el canal si usas una videollamada?',
    icon: <Video className="h-6 w-6 text-blue-500" />,
    options: ['Visual y auditivo', 'Código', 'Contexto'],
    correctAnswer: 0,
    points: 10,
  },
];

export default function Quiz(props: { finishCallback: () => void }) {
  const { finishCallback } = props;
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number;
  }>({});
  const [showResults, setShowResults] = useState<{ [key: number]: boolean }>(
    {},
  );

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  const handleSubmitAll = () => {
    const results: { [key: number]: boolean } = {};

    questions.forEach((question) => {
      results[question.id] = true;
    });
    setShowResults(results);
    finishCallback();
  };

  const alternativeClassnameByStatus = (
    showResult: boolean,
    isSelected: boolean,
    isCorrect: boolean,
    isWrong: boolean,
  ) => {
    return cn({
      'w-full p-4 rounded-lg border-2 text-left transition-all duration-200 disabled:cursor-not-allowed':
        true,
      'border-gray-200 bg-gray-50 text-gray-500 hover:bg-primary-lighter hover:text-primary hover:border-primary':
        !showResult && !isSelected,
      'border-primary !bg-primary-lighter': !showResult && isSelected,
      'border-green-500 !bg-green-100 !text-green-900': showResult && isCorrect,
      'border-red-300 !bg-red-50 text-red-700': showResult && isWrong,
      'border-gray-200 !bg-gray-50 text-gray-500':
        showResult && !isSelected && !isCorrect,
    });
  };

  return (
    <>
      <Typography variant="h4" className="text-primary text-center">
        Sección de Preguntas y Respuestas
      </Typography>

      <div className="grid grid-cols-2 gap-6">
        <div>
          {questions.map((question) => (
            <div key={question.id} className="border-2 border-gray-100">
              <div className="p-6">
                <div className="mb-6 flex items-start gap-3">
                  {question.icon}
                  <h2 className="text-lg leading-tight font-semibold text-gray-800">
                    {question.question}
                  </h2>
                </div>

                <div className="mb-6 space-y-3">
                  {question.options.map((option, index) => {
                    const isSelected = selectedAnswers[question.id] === index;
                    const showResult = showResults[question.id];
                    const isCorrect = index === question.correctAnswer;
                    const isWrong = showResult && isSelected && !isCorrect;
                    console.log(showResult);
                    return (
                      <Button
                        variant="ghost"
                        key={index}
                        onClick={() => {
                          if (showResult) return;
                          handleAnswerSelect(question.id, index);
                        }}
                        disabled={!!showResult}
                        className={alternativeClassnameByStatus(
                          !!showResult,
                          isSelected,
                          isCorrect,
                          !!isWrong,
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{option}</span>
                          {showResult && isCorrect && (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          )}
                        </div>
                      </Button>
                    );
                  })}
                </div>

                {showResults[question.id] && (
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <div className="flex items-center gap-2">
                      {selectedAnswers[question.id] ===
                      question.correctAnswer ? (
                        <span className="font-semibold text-green-600">
                          ¡Correcto! +{question.points} XP
                        </span>
                      ) : (
                        <div className="flex flex-col">
                          <span className="font-semibold text-red-600">
                            Incorrecto. La respuesta correcta era: "
                            {question.options[question.correctAnswer]}"
                          </span>
                          <Button variant="ghost" className="w-fit">
                            Repasar lección
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {Object.keys(showResults).length === 0 && (
            <div className="mt-8 text-center">
              <Button
                onClick={handleSubmitAll}
                variant="landing"
                disabled={
                  Object.keys(selectedAnswers).length !== questions.length
                }
              >
                Confirmar todas las respuestas
              </Button>
              <Typography className="mt-2">
                Respuestas seleccionadas: {Object.keys(selectedAnswers).length}{' '}
                de {questions.length}
              </Typography>
            </div>
          )}
        </div>
        <div className="grid place-content-center">
          <img
            src="/assets/characters/capito-excited-2.png"
            className="mask-transparent-bottom"
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
}
