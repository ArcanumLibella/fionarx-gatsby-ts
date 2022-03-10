import React, { useState } from 'react';

import { Title } from '@/components/atoms/Title';
import { Menu } from '@/components/organisms/Menu';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="App">
      <Menu onToggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} />
      <Title>Hello TypeScript!</Title>
    </main>
  );
};

export default Home;
