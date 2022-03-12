import React from 'react';

import { BurgerIcon } from '@/assets/icons';

import { SocialIcons } from '../SocialIcons';

type NavButtonProps = {
  toggleMenu: () => void;
};

export const NavButton = ({ toggleMenu }: NavButtonProps) => {
  return (
    <div
      className="absolute left-0 flex-col items-center justify-between hidden w-20 h-screen py-4 md:flex z-100 bg-purple-ultraDark"
      onClick={toggleMenu}
      role="button"
      aria-hidden="true"
    >
      <span className="flex justify-start flex-1">MENU</span>
      <div className="flex items-center justify-end flex-1 w-12">
        <BurgerIcon />
      </div>
      <SocialIcons />
    </div>
  );
};
