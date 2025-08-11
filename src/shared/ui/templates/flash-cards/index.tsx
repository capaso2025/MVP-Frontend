import type React from 'react';
import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  User,
  MessageSquare,
  Radio,
  Code,
  Globe,
  Volume2,
} from 'lucide-react';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';

interface Flashcard {
  id: number;
  title: string;
  content: React.ReactNode;
  type: 'definition' | 'elements' | 'problems';
}

export default function FlashCards(props: { finishCallback?: () => void }) {
  const { finishCallback } = props;
  const [currentCard, setCurrentCard] = useState(0);

  const handleReadText = () => {
    const text =
      'Comunicar es transmitir una idea, emoción o información a otra persona.';
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };
  const flashcards: Flashcard[] = [
    {
      id: 1,
      title: '¿Qué es comunicar?',
      type: 'definition',
      content: (
        <div className="space-y-6 text-center">
          <div className="mb-4 text-2xl">👉</div>
          <p className="px-4 text-lg leading-relaxed text-gray-700">
            "Comunicar es transmitir una idea, emoción o información a otra
            persona."
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Volume2 className="h-4 w-4" onClick={handleReadText} />
            <span className="text-sm">(opcional: lectura en voz)</span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Elementos de la comunicación',
      type: 'elements',
      content: (
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="flex flex-col items-center rounded-lg bg-blue-50 p-4">
            <User className="mb-2 h-8 w-8 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Emisor</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-green-50 p-4">
            <User className="mb-2 h-8 w-8 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Receptor</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-purple-50 p-4">
            <MessageSquare className="mb-2 h-8 w-8 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Mensaje</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-orange-50 p-4">
            <Radio className="mb-2 h-8 w-8 text-orange-600" />
            <span className="text-sm font-medium text-gray-700">Canal</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-red-50 p-4">
            <Code className="mb-2 h-8 w-8 text-red-600" />
            <span className="text-sm font-medium text-gray-700">Código</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-teal-50 p-4">
            <Globe className="mb-2 h-8 w-8 text-teal-600" />
            <span className="text-sm font-medium text-gray-700">Contexto</span>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: '¿Por qué a veces fallamos al comunicarnos?',
      type: 'problems',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg bg-red-50 p-3">
              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></div>
              <span className="text-gray-700">Mal uso del canal</span>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-orange-50 p-3">
              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></div>
              <div className="text-gray-700">
                <strong>Código no compartido</strong>
                <div className="mt-1 text-sm text-gray-600">
                  (palabras técnicas, lenguaje emocional mal interpretado)
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-yellow-50 p-3">
              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-500"></div>
              <span className="text-gray-700">Falta de escucha</span>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-purple-50 p-3">
              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500"></div>
              <div className="text-gray-700">
                <strong>Ruido</strong>
                <div className="mt-1 text-sm text-gray-600">
                  (interno o externo)
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
  };

  const prevCard = () => {
    setCurrentCard(
      (prev) => (prev - 1 + flashcards.length) % flashcards.length,
    );
  };

  const goToCard = (index: number) => {
    setCurrentCard(index);
  };

  useEffect(() => {
    if (currentCard === flashcards.length - 1 && finishCallback) {
      finishCallback();
    }
  }, [currentCard]);

  return (
    <div className="grid place-content-center gap-4 p-4 lg:grid-cols-2">
      <div>
        <img
          src="/assets/characters/capito-default.png"
          className="mx-auto hidden lg:block"
          width={400}
          height={400}
        />
      </div>
      <div>
        <div className="mx-auto w-full max-w-md">
          {/* Flashcard Container */}
          <div className="">
            <div className="grid h-[455px] grid-rows-[max-content_auto] rounded-3xl bg-white shadow-lg">
              {/* Card Header */}
              <div className="bg-landing-dark rounded-t-3xl p-6 text-center">
                <Typography
                  className="text-foreground font-normal"
                  variant="h5"
                >
                  {flashcards[currentCard]?.title}
                </Typography>
              </div>

              <div className="relative flex items-center p-8">
                {flashcards[currentCard]?.content}
                <Button
                  className="absolute top-1/2 -left-7 h-[50px] w-[50px] -translate-y-1/2 !rounded-full !p-0"
                  onClick={prevCard}
                  disabled={currentCard === 0}
                >
                  <ChevronLeft size={20} />
                </Button>

                <Button
                  className="absolute top-1/2 -right-7 h-[50px] w-[50px] -translate-y-1/2 !rounded-full !p-0"
                  onClick={nextCard}
                  disabled={currentCard === flashcards.length - 1}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {flashcards.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentCard
                    ? 'bg-primary-2 scale-125'
                    : index < currentCard
                      ? 'bg-primary'
                      : 'bg-secondary/20'
                }`}
                onClick={() => goToCard(index)}
              />
            ))}
          </div>

          {/* Card Counter */}
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              {currentCard + 1} de {flashcards.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
