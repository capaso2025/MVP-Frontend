import { Button, Icon, Input, Typography } from '@/shared/ui';
import { useState } from 'react';
import StatisticsPanel from './components/Statistics';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const [userData, setUserData] = useState({
    name: 'Fernando Altamirano',
    email: 'fernando.altamirano@gmail.com',
    phone: '+34 612 345 678',
    location: 'Madrid, España',
    occupation: 'Estudiante de Ingeniería Informática',
    joinedDate: '2023-01-01',
    username: 'fernando.altamirano',
  });

  // Función para manejar cambios en los campos de texto
  const handleInputChange = (field: string, value: string) => {
    setUserData({
      ...userData,
      [field]: value,
    });
  };
  return (
    <>
      <Typography variant="h2" className="py-2">
        Perfil
      </Typography>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div>
          <img src="/src/assets/wolf.png" width={250} className="mx-auto" />
          <div className="mt-8">
            <p className="text-primary-2 text-2xl font-bold">{userData.name}</p>
            <p className="mt-0 font-semibold">{userData.occupation}</p>
            <div className="mt-6 flex items-center gap-3">
              <Icon name="mail" />
              <span className="text-sm">{userData.email}</span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <Icon name="phone" />
              <span className="text-sm">{userData.phone}</span>
            </div>
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
                <span>Nombre completo</span>
                <Input
                  value={userData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <span>Correo electrónico</span>
                <Input
                  type="email"
                  value={userData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <span>Teléfono</span>
                <Input
                  value={userData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <span>Ubicación</span>
                <Input
                  value={userData.location}
                  onChange={(e) =>
                    handleInputChange('location', e.target.value)
                  }
                  disabled={!isEditing}
                />
              </div>
            </div>
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
                <Input value={userData.username} disabled />
              </div>
              <div className="space-y-2">
                <span>Te uniste</span>
                <Input type="date" value={userData.joinedDate} disabled />
              </div>
            </div>
          </div>
          <div className="mt-13">
            <StatisticsPanel />
          </div>
        </div>
      </div>
    </>
  );
}
