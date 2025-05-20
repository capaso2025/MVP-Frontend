import home from '@/assets/home.svg';
import calendar from '@/assets/calendar.png';
import timer from '@/assets/timer.png';
import user from '@/assets/user.png';
import shop from '@/assets/shop.png';

interface MenuItem {
  label: string;
  icon: string;
  path: string;
  include?: string[];
}

export const MENU_ITEMS: MenuItem[] = [
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
  { label: 'Classroom', icon: home, path: '/classroom' },
  { label: 'Perfil', icon: user, path: '/profile' },
  { label: 'Tienda', icon: shop, path: '/shop' },
];
export const NO_LOGGED_MENU_ITEMS: MenuItem[] = [
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
  { label: 'Classroom', icon: home, path: '/classroom' },
];
