import { Typography } from '@/shared/ui';
import LearnButton from '../../atoms/button/LearnButton';
import { useNavigate } from 'react-router-dom';
import { useRenderStore } from '@/shared/store/render-store';
import LessonDetails from '../LessonDetails/LessonDetails';

function LearnLesson(props: {
  level: { level: number; title: string };
  currentLevel: number;
  currentModule: string;
  moduleTitle: string;
  position?: string;
}) {
  const {
    level,
    currentLevel,
    currentModule,
    moduleTitle,
    position = '',
  } = props;
  const navigate = useNavigate();
  const setModalData = useRenderStore((state) => state.setModalData);
  const closeModal = useRenderStore((state) => state.closeModal);
  return (
    <div className="relative">
      <div
        className={`absolute -top-13 z-10 -ml-5 ${position} bg-primary-2 animate-bounce rounded-full px-4 py-1 shadow-md ${currentLevel === level.level && currentModule === moduleTitle ? '' : 'hidden'}`}
      >
        <Typography className="text-primary text-center">Empezar</Typography>
      </div>
      <LearnButton
        key={level.title}
        className={`${position} ${currentLevel >= level.level && currentModule === moduleTitle ? '' : 'opacity-50'}`}
        onClick={() => {
          setModalData({
            containerClassName: 'max-w-[800px]',
            children: (
              <LessonDetails
                level={level}
                onClick={() => {
                  closeModal();
                  navigate(
                    `/lesson/${encodeURIComponent(moduleTitle)}/${encodeURIComponent(level.title)}`,
                  );
                }}
              />
            ),
          });
        }}
      />
    </div>
  );
}

export default LearnLesson;
