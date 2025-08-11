import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/atoms/Accordion';
import { Typography } from '@/shared/ui';

const faqData = [
  {
    id: 'item-1',
    question: '¿Capaso es gratis?',
    answer:
      'Sí. Puedes comenzar gratis con acceso a los primeros niveles y funcionalidades clave. También ofrecemos una versión PRO con contenido exclusivo, misiones especiales y ventajas adicionales.',
  },
  {
    id: 'item-2',
    question: '¿Para qué edades está diseñado?',
    answer:
      'Capaso está pensado para jóvenes entre 15 y 22 años, especialmente aquellos en la transición del colegio a la universidad. Sin embargo, cualquier persona interesada en mejorar sus habilidades blandas puede beneficiarse.',
  },
  {
    id: 'item-3',
    question: '¿Necesito estar en un colegio?',
    answer:
      'No. Capaso está abierto para cualquier persona que quiera crecer de forma autodidacta. Si tu colegio o universidad tiene convenio con nosotros, podrás acceder a beneficios adicionales.',
  },
  {
    id: 'item-4',
    question: '¿Cómo funciona el sistema de niveles?',
    answer:
      'Cada nivel es parte de un roadmap que te guía paso a paso en el desarrollo de una habilidad (por ejemplo: comunicación, liderazgo, gestión del tiempo). Para avanzar, debes completar lecciones, retos interactivos y mantener tu racha de progreso. Al subir de nivel, desbloqueas nuevo contenido y recompensas.',
  },
];

export default function FAQSection() {
  return (
    <div className="mx-auto max-w-4xl p-6" id="questions">
      <Typography variant="h1" className="mb-16 text-center text-white">
        Preguntas Frecuentes
      </Typography>
      <Accordion type="single" collapsible className="w-full space-y-4 pb-2">
        {faqData.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="border-secondary-light rounded-lg border px-4"
          >
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <Typography className="text-white" variant="h5">
                  ✅ {faq.question}
                </Typography>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <Typography
                variant="h6"
                className="ml-9 leading-relaxed font-normal text-white"
              >
                {faq.answer}
              </Typography>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
