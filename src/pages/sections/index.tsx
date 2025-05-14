import { Typography } from '@/shared/ui';
import SectionCard from './components/organisms/SectionCard';
import { CARDS_SECTIONS } from './dummy';
import { useNavigate } from 'react-router-dom';

function Learn() {
  const navigate = useNavigate();
  return (
    <section className="grid grid-rows-[70px_auto] gap-2">
      <Typography variant="h2" className="py-2">
        Habilidades Blandas
      </Typography>
      <div className="flex flex-col gap-8">
        {CARDS_SECTIONS.map((values) => (
          <SectionCard {...values} onClick={() => {
            navigate("/learn")
          }} />
        ))}
      </div>
    </section>
  );
}

export default Learn;
