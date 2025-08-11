// import { Typography } from '@/shared/ui';
// import LearnButton from '../../atoms/lesson-button';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useRenderStore } from '@/shared/store/render-store';
// import LessonDetails from '@/pages/modules/components/organisms/LessonDetails/LessonDetails';
// import { useDummyStore } from '@/shared/store/dummy-store';
// import { useSection } from '@/pages/sections/hooks/use-section';
// function Lesson(props: {
//   lesson: { level: number; title: string };
//   position?: string;
// }) {
//   const { lesson, position = '' } = props;
//   const navigate = useNavigate();
//   const params = useParams();
//   const { data } = useSection();
//   const setModalData = useRenderStore((state) => state.setModalData);
//   const closeModal = useRenderStore((state) => state.closeModal);
//   const currentLesson = useDummyStore((state) => state.currentLesson);
//   const currentModule = data
//     ?.find((section) => section.id === params.sectionId)
//     ?.modules?.find((module) => module.id === params.moduleId);
//   // const currentModule = {
//   // id: params.moduleId,
//   // lessons: data.find((section) => section.id === params.sectionId)?.
//   // }

//   const enabledLesson = currentLesson >= lesson.level;

//   return (
//     <div className="relative">
//       <div
//         className={`absolute -top-13 z-10 -ml-5 ${position} bg-primary-2 animate-bounce rounded-full px-4 py-1 shadow-md ${currentLesson === lesson.level ? '' : 'hidden'}`}
//       >
//         <Typography className="text-primary text-center">Empezar</Typography>
//       </div>
//       <LearnButton
//         key={lesson.title}
//         className={`${position} ${enabledLesson ? '' : 'opacity-50'}`}
//         onClick={() => {
//           if (!enabledLesson) return;
//           setModalData({
//             containerClassName: 'max-w-[800px]',
//             children: (
//               <LessonDetails
//                 lesson={lesson}
//                 onClick={() => {
//                   closeModal();
//                   navigate(
//                     `/lesson/${params.sectionId}/${currentModule?.id}/${currentModule?.lessons[lesson.level - 1]?.id}`,
//                   );
//                 }}
//               />
//             ),
//           });
//         }}
//       />
//     </div>
//   );
// }

// export default Lesson;

function Index() {
  return <p>Index</p>;
}

export default Index;
