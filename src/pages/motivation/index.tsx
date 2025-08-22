import { Button, Typography } from '@/shared/ui';
import { Card } from '@/shared/ui/atoms/Card';
import ModuleTitle from '@/shared/ui/atoms/ModuleTitle';
import Spacer from '@/shared/ui/atoms/Spacer';
import Breadcrumbs from '@/shared/ui/molecules/Breadcrumbs';
import { Book } from 'lucide-react';

export default function MotivationPage() {
  return (
    <div>
      <ModuleTitle text="Motivación" />
      <Spacer size="md" />
      <Breadcrumbs
        links={[
          { text: 'Inicio', href: '/home' },
          { text: 'Motivación', href: '/home/motivation' },
        ]}
      />
      <Spacer size="lg" />
      <div>
        <Card>
          <Typography className="font-bold" variant="h4">
            Desafío relámpago
          </Typography>
          <Typography>
            Escribe tres cosas por las que estás agradecido hoy
          </Typography>
          <Spacer size="lg" />
          <Button>Lo logré</Button>
        </Card>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <ModuleTitle text="Explora e inspírate" />
            <Spacer size="sm" />
            <Card className="flex gap-4">
              <div className="h-max rounded-md bg-gray-200 p-2">
                <Book className="text-orange-400" />
              </div>
              <div>
                <Typography className="font-semibold" variant="h6">
                  How to Not Always Be Working
                </Typography>
                <Typography>
                  Having free time encourages you to focus on your health and
                  well-being.
                </Typography>
                <div className="mt-2 flex justify-end">
                  <Button size="sm">Empezar</Button>
                </div>
              </div>
            </Card>
            <Spacer size="md" />
            <Card className="flex gap-4">
              <div className="h-max rounded-md bg-gray-200 p-2">
                <Book className="text-orange-400" />
              </div>
              <div>
                <Typography className="font-semibold" variant="h6">
                  How to Not Always Be Working
                </Typography>
                <Typography>
                  Having free time encourages you to focus on your health and
                  well-being.
                </Typography>
                <div className="mt-2 flex justify-end">
                  <Button size="sm">Empezar</Button>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <ModuleTitle text="Video recomendado" />
            <Spacer size="sm" />
            <Card className="overflow-hidden" withNoPadding>
              <iframe
                src="https://www.youtube.com/embed/th6bih9JVcY"
                title="La Disciplina Es Poder."
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-[200px] w-full"
              ></iframe>
              <div className="p-6">
                <Typography variant="h6">
                  David Goggins - How To Stay Motivated In The Darkest Times
                </Typography>
                <Spacer size="sm" />
                <Button className="w-full">Ver video</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
