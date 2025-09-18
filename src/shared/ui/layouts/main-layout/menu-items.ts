import home from '@/assets/casa-ecologica.png';
import calendar from '@/assets/calendario.png';
import timer from '@/assets/cronografo.png';
import user from '@/assets/profile.png';
import classroom from '@/assets/colegio.png';
import message from '@/assets/chat.png';

export interface MenuItem {
  label: string;
  icon: string;
  path: string;
  include?: string[];
}

export const DEFAULT_MENU_ITEMS: MenuItem[] = [
  {
    label: 'Home',
    icon: home,
    path: '/home',
    include: ['/goals', '/habits', '/learning', '/motivation'],
  },
  {
    label: 'Capómetro',
    icon: timer,
    path: '/home/timer',
  },
  { label: 'Classroom', icon: classroom, path: '/home/classroom' },
  { label: 'Perfil', icon: user, path: '/home/profile' },
];
export const NO_LOGGED_DEFAULT_MENU_ITEMS: MenuItem[] = [
  {
    label: 'Inicio',
    icon: home,
    path: '/home',
    include: ['/goals', '/habits', '/learning', '/motivation', '/objectives'],
  },
  {
    label: 'Calendario',
    icon: calendar,
    path: '/home/calendar',
  },
  {
    label: 'Capómetro',
    icon: timer,
    path: '/home/timer',
  },
  { label: 'Classroom', icon: classroom, path: '/home/classroom' },
];
export const TEACHER_DEFAULT_MENU_ITEMS: MenuItem[] = [
  {
    label: 'Inicio',
    icon: home,
    path: '/teacher/classroom',
    include: [],
  },
  {
    label: 'Calendario',
    icon: calendar,
    path: '/teacher/calendar',
  },
  {
    label: 'Chats',
    icon: message,
    path: '/chats',
  },
  { label: 'Insight', icon: home, path: '/insight' },
];
