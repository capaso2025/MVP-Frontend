import { DropdownMenuContent, DropdownMenuItem, DropdownMenuRaw, DropdownMenuTrigger } from "./dropdown-raw";

type TOption = {
  text: string;
  onClick: () => void;
};

interface IProps {
  title?: string;
  trigger: React.ReactElement;
  options: TOption[];
  contentClassname?: string;
}

import React from "react";

export default function DropdownMenu(props: IProps) {
  const { trigger, options, contentClassname } = props;
  const [open, setOpen] = React.useState(false);

  // Handler para opciones que necesitan cerrar el dropdown antes de ejecutar la acción
  const handleOptionClick = (optionOnClick: () => void) => {
    setOpen(false);
    // Ejecuta la acción después de cerrar el dropdown
    setTimeout(() => {
      optionOnClick();
    }, 0);
  };

  return (
    <DropdownMenuRaw open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className={contentClassname}>
        {options?.map((option: TOption, index: number) => (
          <DropdownMenuItem
            onClick={() => handleOptionClick(option.onClick)}
            key={index}
            className="hover:bg-black/10 transition-all duration-300"
          >
            {option.text}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenuRaw>
  );
}
