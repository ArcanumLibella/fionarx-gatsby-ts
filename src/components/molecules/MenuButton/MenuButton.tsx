import React, { MouseEvent, useState } from 'react';

// type MenuButtonProps = {
//   // onClick: () => void;
//   // onToggleMenu: () => void;
// };

export const MenuButton = () /* : MenuButtonProps  */ => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
    // onToggleMenu();
  };

  return (
    // TODO: Add burger menu
    <button
      type="button"
      className="flex items-center justify-center h-8 w-8 bg-tomato cursor-pointer"
      onClick={handleMenuOpen}
    >
      X
    </button>
  );
};

// function handleMenuOpen(e: MouseEvent<HTMLElement>) {
//   e.stopPropagation();
//   onToggleMenu();
// }
