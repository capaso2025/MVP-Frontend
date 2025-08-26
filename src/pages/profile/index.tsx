import { Button, Typography } from '@/shared/ui';
import { useState } from 'react';
import StatisticsPanel from './components/Statistics';
import { useProfile } from '@/features/profile/hooks/useProfile';
import Spinner from '@/shared/ui/atoms/Spinner';
import { format } from 'date-fns';
import { MailIcon, PencilIcon, SaveIcon, XIcon } from '@/shared/ui/atoms/Icon/Icon';
import Input from '@/shared/ui/atoms/Input/Input';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const { profile, loading } = useProfile();

  if (loading)
    return (
      <div className="mt-12">
        <Spinner />
      </div>
    );
  if (!profile) return <></>;

  return (
    <div>
      <Typography variant="h2" className="py-2">
        Perfil
      </Typography>
      <div className="">
        <div className="grid grid-rows-[auto_max-content]">
          <div>
            <img
              src="/assets/characters/capito-running.png"
              width={250}
              className="mx-auto"
            />
            <div className="mt-8">
              <p className="text-primary-2 text-center text-2xl font-bold">{`${profile?.name} ${profile.lastName}`}</p>
              <div className="mt-6 flex items-center gap-3">
                <MailIcon />
                <span className="text-sm">{profile?.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:col-span-2">
          <div>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-2xl font-semibold">Información Personal</p>
                <p className="">
                  Actualiza tu información personal y de contacto
                </p>
              </div>
              <Button
                variant={isEditing ? 'outline' : 'primary'}
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2"
              >
                {isEditing ? (
                  <>
                    <XIcon /> Cancelar edición
                  </>
                ) : (
                  <>
                    <PencilIcon /> Editar perfil
                  </>
                )}
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <span>Nombre</span>
                <Input value={profile?.name} disabled={!isEditing} />
              </div>
              <div className="space-y-2">
                <span>Apellidos</span>
                <Input value={profile?.lastName} disabled={!isEditing} />
              </div>
              <div className="space-y-2">
                <span>Correo electrónico</span>
                <Input
                  type="email"
                  value={profile.email}
                  disabled={!isEditing}
                />
              </div>
              {isEditing && (
                <div className="text-right">
                  <Button className="mt-6 mr-auto ml-0">
                    <SaveIcon />
                    Guardar cambios
                  </Button>
                </div>
              )}
            </div>
            <div className="mt-13">
              <p className="text-2xl font-semibold">Información de tu Cuenta</p>
              <p className="">Aquí podrás ver la información de tu cuenta</p>
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <span>Nombre de usuario</span>
                  <Input value={profile?.name} disabled />
                </div>
                <div className="space-y-2">
                  <span>Te uniste</span>
                  <Input
                    type="date"
                    value={format(profile?.time, 'yyyy-mm-dd')}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="mt-13">
              <StatisticsPanel />
            </div>
            <div className="mt-8 hidden lg:block">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  localStorage.removeItem('t');
                  window.location.replace('/login');
                }}
              >
                Cerrar sesión
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
