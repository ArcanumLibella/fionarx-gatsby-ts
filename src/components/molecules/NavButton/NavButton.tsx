import React from 'react';

import { BurgerIcon } from '@/assets/icons';

import { SocialIcons } from '../SocialIcons';

type NavButtonProps = {
  toggleMenu: () => void;
};

export const NavButton = ({ toggleMenu }: NavButtonProps) => {
  return (
    <div
      className="absolute flex-col items-center justify-between bottom-2 right-2 md:bottom-0 md:py-4 md:left-0 md:w-20 md:h-screen md:flex z-100 md:bg-purple-ultraDark"
      onClick={toggleMenu}
      role="button"
      aria-hidden="true"
    >
      <span className="flex items-center justify-center p-2 font-bold border-2 rounded-full font-brother w-14 h-14 text-tiny md:justify-start md:items-start md:flex-1 border-purple-light md:border-none">
        MENU
      </span>
      <div className="items-center justify-end flex-1 hidden w-12 md:flex">
        <BurgerIcon />
      </div>
      <SocialIcons />
    </div>
  );
};
