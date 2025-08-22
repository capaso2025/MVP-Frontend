import { useState } from 'react';
import { schools } from './data';
import Input from '@/shared/ui/atoms/Input/Input';
import { SchoolCard } from './school-card';
import Spacer from '../../atoms/Spacer';
import { Typography } from '../../atoms/Typography';

export function SchoolFinder() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSchools = schools.filter((school) => {
    const searchText = searchQuery.toLowerCase();
    return (
      school.name.toLowerCase().includes(searchText) ||
      school.address.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="animate-fade-in z-10 mx-auto max-w-xl">
      <Input
        placeholder="Búsqueda por nombre de la escuela o la dirección"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full"
      />
      <Spacer size="md" />
      {filteredSchools.length ? (
        <div className="h-max max-h-[calc(100vh-200px)] space-y-2 overflow-auto rounded-lg bg-white p-4 shadow-md">
          {filteredSchools.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </div>
      ) : (
        <div className="mt-10 text-center">
          <Typography variant="h5">
            Aun no tenemos registrado tu escuela
          </Typography>
        </div>
      )}
    </div>
  );
}
