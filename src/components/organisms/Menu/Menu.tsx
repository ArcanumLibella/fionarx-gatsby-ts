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

export const Menu = ({ isMenuOpen /* , onToggleMenu  */ }: MenuProps) => {
  // const handleCloseMenu = () => {
  //   onToggleMenu();
  // };

  const renderedMenuItems = menuItems.map((item) => {
    return <MenuItem key={item.label} {...item} />;
  });

  return (
    // TODO: Style menu + add close menu if click outside (useRef ?)
    <div
      // onClick={handleCloseMenu}
      className={`Menu flex justify-between absolute w-full md:w-1/2 lg:w-8/12 z-50 transition-all ease-out duration-300 cursor-pointer ${
        isMenuOpen ? 'left-0' : '-left-full md:-left-1/2 lg:-left-2/3'
      }`}
      // role="button"
      // aria-hidden="true"
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
