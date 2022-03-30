import React from 'react';

import { Menu } from '@/components/organisms/Menu';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <title>Fiona Roux | Développeur front-end</title>
      <main className="relative h-screen bg-midnight">
        <Menu />
        {children}
      </main>
    </>
  );
};

export default MainLayout;
