import home from '@/assets/home.png';
import calendar from '@/assets/calendar.png';
import timer from '@/assets/timer.png';
import user from '@/assets/profile.png';
import shop from '@/assets/shop.png';
import classroom from '@/assets/classroom.png';
import message from '@/assets/chat.png';
import points from '@/assets/points.png';

interface MenuItem {
  label: string;
  icon: string;
  path: string;
  include?: string[];
}

export const DEFAULT_MENU_ITEMS: MenuItem[] = [
  {
    label: 'Objetivos',
    icon: home,
    path: '/sections',
    include: ['/modules'],
  },
  {
    label: 'Calendario',
    icon: calendar,
    path: '/calendar',
  },
  {
    label: 'Timer',
    icon: timer,
    path: '/timer',
  },
  { label: 'Classroom', icon: classroom, path: '/classroom' },
  { label: 'Perfil', icon: user, path: '/profile' },
  { label: 'Tienda', icon: shop, path: '/shop' },
];
export const NO_LOGGED_DEFAULT_MENU_ITEMS: MenuItem[] = [
  {
    label: 'Objetivos',
    icon: home,
    path: '/sections',
    include: ['/modules'],
  },
  {
    label: 'Calendario',
    icon: calendar,
    path: '/calendar',
  },
  {
    label: 'Timer',
    icon: timer,
    path: '/timer',
  },
  { label: 'Classroom', icon: classroom, path: '/classroom' },
];
export const TEACHER_DEFAULT_MENU_ITEMS: MenuItem[] = [
  {
    label: 'Inicio',
    icon: home,
    path: '/classroom?role=teacher',
    include: [],
  },
  {
    label: 'Calendario',
    icon: calendar,
    path: '/calendar?role=teacher',
  },
  {
    label: 'Chats',
    icon: message,
    path: '/chats?role=teacher',
  },
  {
    label: 'Puntos',
    icon: points,
    path: '/points?role=teacher',
  },
  { label: 'Insight', icon: home, path: '/insight?role=teacher' },
];
