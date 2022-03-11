import React from 'react';

import { MenuItem } from '../../atoms/MenuItem';

type MenuProps = {
  isMenuOpen: boolean;
  // onToggleMenu: () => void;
};

export type MenuItemType = {
  label: string;
  path: string;
};

const menuItems: MenuItemType[] = [
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'About me',
    path: '/about',
  },
  {
    label: 'Skills',
    path: '/skills',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export const Menu = ({ isMenuOpen }: MenuProps) => {
  const renderedMenuItems = menuItems.map((item) => {
    return <MenuItem key={item.label} {...item} />;
  });

  return (
    // TODO: Style menu + add close menu if click outside (useRef ?)
    <div
      className={`Menu flex justify-between absolute w-8/12 z-50 transition-all ease-out duration-300 ${
        isMenuOpen ? 'left-0' : '-left-2/3'
      }`}
    >
      <div className="flex items-center flex-1 h-screen px-20 py-16 bg-twilight">
        <nav className="flex flex-col justify-center ml-32">
          {renderedMenuItems}
        </nav>
      </div>
      {/* <NavButton onToggleMenu={onToggleMenu} /> */}
    </div>
  );
};
