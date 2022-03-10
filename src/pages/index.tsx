import React, { useState } from 'react';

import { Hero } from '@/components/organisms/Hero';
import { Menu } from '@/components/organisms/Menu';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="App relative bg-purple-dark h-full">
      <Menu onToggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} />
      <Hero />
    </main>
  );
};

export default HomePage;
