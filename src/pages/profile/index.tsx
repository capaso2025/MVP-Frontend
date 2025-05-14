import { Button, Icon, Input, Typography } from '@/shared/ui';
import { useState } from 'react';
import StatisticsPanel from './components/Statistics';
import { useLogin } from '@/features/auth/login/hooks/useLogin';
import { useProfile } from '@/features/profile/hooks/useProfile';
import Spinner from '@/shared/ui/atoms/Spinner/Spinner';
import { format } from 'date-fns';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const { executeLogout } = useLogin();
  const { profile, loading } = useProfile()

  if (loading) return <div className="mt-12">
    <Spinner />
  </div>
  if (!profile) return <></>

  return (
    <div>
      <Typography variant="h2" className="py-2">
        Perfil
      </Typography>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className='h-auto lg:h-[calc(100vh-120px)] grid grid-rows-[auto_max-content]'>
          <div>
            <img src="/src/assets/wolf.png" width={250} className="mx-auto" />
            <div className="mt-8">
              <p className="text-primary-2 text-2xl font-bold">{`${profile?.name} ${profile.lastName}`}</p>
              <p className="mt-0 font-semibold">{"OCUPACIÓN"}</p>
              <div className="mt-6 flex items-center gap-3">
                <Icon name="mail" />
                <span className="text-sm">{profile?.email}</span>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <Icon name="phone" />
                <span className="text-sm">{"FALTA"}</span>
              </div>
            </div>
          </div>
          <div className='hidden lg:block'>
            <Button variant='outline' className='w-full' onClick={executeLogout}>Cerrar sesión</Button>
          </div>
        </div>

        <div className="lg:col-span-2">
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
                    <Icon name="x" /> Cancelar edición
                  </>
                ) : (
                  <>
                    <Icon name="pencil" /> Editar perfil
                  </>
                )}
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <span>Nombre</span>
                <Input
                  value={profile?.name}
                  // onChange={(e) => handleInputChange('name', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <span>Apellidos</span>
                <Input
                  value={profile?.lastName}
                  // onChange={(e) => handleInputChange('name', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <span>Correo electrónico</span>
                <Input
                  type="email"
                  value={profile.email}
                  // onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              {/* <div className="space-y-2">
                <span>Teléfono</span>
                <Input
                  value={profile?.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <span>Ubicación</span>
                <Input
                  value={"FALTA"}
                  onChange={(e) =>
                    handleInputChange('location', e.target.value)
                  }
                  disabled={!isEditing}
                />
              </div>
            </div> */}
              {isEditing && (
                <div className="text-right">
                  <Button className="mt-6 mr-auto ml-0">
                    <Icon name="save" />
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
                  <Input type="date" value={format(profile?.time, "yyyy-mm-dd")} disabled />
                </div>
              </div>
            </div>
            <div className="mt-13">
              <StatisticsPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
