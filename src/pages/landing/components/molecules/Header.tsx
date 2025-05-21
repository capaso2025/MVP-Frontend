import { Typography } from '@/shared/ui';
import Logo from '@/assets/capo-logo-dark.png';
import { MenuIcon } from 'lucide-react';
import RightMenu from '../organisms/RightMenu';
import { MENU } from '../../constants/menu';
import { useState } from 'react';


function Header() {
  const [openedMenu, setOpenMenu] = useState<boolean>(false);
  const handleOpenMenu = (value?: boolean) => {
    if (value !== undefined) return setOpenMenu(value);
    setOpenMenu(openedMenu => !openedMenu);
  }
  return (
    <>
      <header className="flex justify-between items-center pt-4">
        <img src={Logo} width={60} height={60} alt='logo de capo' color='text-primary' />
        <div className="hidden lg:flex items-center justify-end gap-6 py-4">
          {MENU.map((element) => (
            <Typography
              key={element.text}
              variant="h5"
              className="hover:text-primary-2 cursor-pointer font-normal transition-all duration-200 hover:font-bold"
            >
              <a href={element.href}>{element.text}</a>
            </Typography>
          ))}
        </div>
        <MenuIcon className='block lg:hidden' size={35} onClick={() => handleOpenMenu()} />
      </header>
      <RightMenu opened={openedMenu} handleOpened={handleOpenMenu} />
    </>
  );
}

export default Header;
