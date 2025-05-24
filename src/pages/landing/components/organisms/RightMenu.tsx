import { useResize } from "@/shared/hooks/use-resize";
import { MENU } from "../../constants/menu";
import { MenuIcon } from "lucide-react";
import Logo from '@/assets/capo-logo-dark.png';
import { useEffect } from "react";
import { Typography } from "@/shared/ui";

function RightMenu(props: {
  opened: boolean;
  handleOpened: (value?: boolean) => void;
}) {
  const { opened, handleOpened } = props;
  const { isMobile } = useResize({
    mobileWidth: 768,
  });

  const handleOverflow = () => {
    if (opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
  useEffect(() => {
    handleOverflow()
  }, [opened]);

  useEffect(() => {
    if (!isMobile) {
      handleOpened(false);
    }
  }, [isMobile]);

  if (!isMobile || !opened) {
    return <></>;
  }

  return <div className={`fixed top-0 left-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-[#ced8df] to-[#42455a] text-black transition-all ${opened ? 'animate-slide-x' : '-translate-x-full'}`}>
    <div className="h-screen grid grid-rows-[max-content_auto] gap-8 w-full p-4">
      <div className="flex items-center justify-between w-full px-4">
        <img src={Logo} width={60} height={60} alt='logo de capo' />
        <MenuIcon size={35} onClick={() => handleOpened()} className='text-primary' />
      </div>
      <div className="grid place-content-center">
        <ul className="flex flex-col gap-4 -mt-20">
          {MENU.map((element) => (
            <Typography
              key={element.text
              }
              as="li"
              onClick={() => handleOpened()}
              variant="h3"
              className="hover:text-primary-2 text-white cursor-pointer font-normal transition-all text-center duration-200 hover:font-bold"
            >
              <a href="#">{element.text}</a>
            </Typography>
          ))}
        </ul>
      </div>
    </div>
  </div>
};

export default RightMenu;