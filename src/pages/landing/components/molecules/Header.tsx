import { Typography } from '@/shared/ui';
import Logo from '@/assets/capo-logo.png';
import LogoDark from '@/assets/capo-logo-dark.png';
import RightMenu from '../organisms/RightMenu';
import { MENU } from '../../constants/menu';
import { useState } from 'react';
import { useScroll } from '@/shared/hooks/use-scroll';
import Container from '@/shared/ui/atoms/Container';
import { MenuIcon } from '@/shared/ui/atoms/Icon/Icon';

function Header() {
  const [openedMenu, setOpenMenu] = useState<boolean>(false);
  const { scrolled } = useScroll({ height: 10 });

  const handleOpenMenu = (value?: boolean) => {
    if (value !== undefined) return setOpenMenu(value);
    setOpenMenu((openedMenu) => !openedMenu);
  };

  return (
    <>
      <Container
        as="header"
        className={`flex items-center justify-between transition-all duration-200 ${scrolled ? 'sticky top-4 z-[1000] rounded-full bg-[#1d20315d] px-8 py-2 pl-2 shadow-md backdrop-blur-2xl' : ''}`}
      >
        <img
          src={scrolled ? Logo : LogoDark}
          width={50}
          height={50}
          alt="logo de capo"
          color="text-primary"
          className="p-1"
        />
        <div className="hidden items-center justify-end gap-6 py-4 lg:flex">
          {MENU.map((element) => (
            <Typography
              key={element.text}
              variant="h6"
              className={`hover:text-primary-2 cursor-pointer font-normal transition-all duration-200 hover:font-bold ${
                scrolled ? 'text-white' : 'text-primary'
              }`}
            >
              <a href={element.href}>{element.text}</a>
            </Typography>
          ))}
        </div>
        <MenuIcon
          className="block lg:hidden"
          size={35}
          onClick={() => handleOpenMenu()}
        />
      </Container>
      <RightMenu opened={openedMenu} handleOpened={handleOpenMenu} />
    </>
  );
}

export default Header;
