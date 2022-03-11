import React, { useState } from 'react';

import { NavButton } from '@/components/molecules/NavButton';
import { Menu } from '@/components/organisms/Menu';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="relative h-full">
      <Menu isMenuOpen={isMenuOpen} />
      <NavButton onToggleMenu={onToggleMenu} />
      {children}
    </main>
  );
};

export default MainLayout;
