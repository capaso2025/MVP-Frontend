import { Typography } from '@/shared/ui';
import Logo from '@/assets/capo-logo.png';
import RightMenu from '../organisms/RightMenu';
import { MENU } from '../../constants/menu';
import { useState } from 'react';
import Container from '@/shared/ui/atoms/Container';
import { MenuIcon } from '@/shared/ui/atoms/Icon/Icon';

function Header() {
  const [openedMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = (value?: boolean) => {
    if (value !== undefined) return setOpenMenu(value);
    setOpenMenu((openedMenu) => !openedMenu);
  };

  return (
    <>
      <Container
        as="header"
        className={`bg-custom-blur sticky top-4 z-[99] flex items-center justify-between rounded-full border border-white/10 px-8 py-2 pl-2 shadow-md transition-all duration-200`}
      >
        <img
          src={Logo}
          width={50}
          height={50}
          alt="logo de capo"
          color="text-primary"
          className="p-1 pt-2"
        />
        <div className="hidden items-center justify-end gap-6 py-4 lg:flex">
          {MENU.map((element) => (
            <Typography
              key={element.text}
              variant="h6"
              className={`hover:text-primary-2 cursor-pointer font-normal text-white transition-all duration-200 hover:font-bold`}
            >
              <a href={element.href}>{element.text}</a>
            </Typography>
          ))}
        </div>
        <MenuIcon
          className="block text-white lg:hidden"
          size={35}
          onClick={() => handleOpenMenu()}
        />
      </Container>
      <RightMenu opened={openedMenu} handleOpened={handleOpenMenu} />
    </>
  );
}

export default Header;
