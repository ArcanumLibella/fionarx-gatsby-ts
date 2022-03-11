import React, { MouseEvent } from 'react';

// import { BurgerIcon } from '@/assets/icons';

// import { SocialIcons } from '../SocialIcons';

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
      className="absolute left-0 flex-col items-center justify-between hidden w-20 h-screen py-4 md:flex z-100 bg-purple-ultraDark"
      onClick={handleToggleMenu}
      role="button"
      aria-hidden="true"
    >
      <span className="flex justify-start flex-1">MENU</span>
      <div className="flex items-center justify-end flex-1 w-12">
        {/* <BurgerIcon /> */}
      </div>
      {/* <SocialIcons /> */}
    </div>
  );
};
