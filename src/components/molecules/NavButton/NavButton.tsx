import React, { MouseEvent } from 'react';

import { BurgerIcon } from '@/assets/icons';

import { SocialIcons } from '../SocialIcons';

type NavButtonProps = {
  onToggleMenu: () => void;
};

export const NavButton = ({ onToggleMenu }: NavButtonProps) => {
  const handleToggleMenu = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onToggleMenu();
  };

  return (
    <div
      className="absolute left-0 flex flex-col items-center justify-between w-20 h-screen py-4 z-100 bg-purple-ultraDark"
      onClick={handleToggleMenu}
      role="button"
      aria-hidden="true"
    >
      <span className="flex-1">MENU</span>
      <div className="flex flex-1 items-center justify-end w-12">
        <BurgerIcon />
      </div>
      <SocialIcons />
    </div>
  );
};
