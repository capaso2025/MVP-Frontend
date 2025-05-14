interface MenuItem {
  label: string;
  icon: string;
  path: string;
  include?: string[];
}

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Objetivos',
    icon: '/src/assets/home.svg',
    path: '/sections',
    include: ['/learn'],
  },
  {
    label: 'Calendario',
    icon: '/src/assets/calendar.png',
    path: '/calendar',
  },
  {
    label: 'Timer',
    icon: '/src/assets/timer.png',
    path: '/timer',
  },
  { label: 'Perfil', icon: '/src/assets/user.png', path: '/profile' },
  { label: 'Tienda', icon: '/src/assets/shop.png', path: '/shop' },
];
