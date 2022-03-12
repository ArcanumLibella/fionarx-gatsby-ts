import { AnimatePresence, motion, useCycle } from 'framer-motion';
import React from 'react';

import { NavButton } from '@/components/molecules/NavButton';

import { MenuItem } from '../../atoms/MenuItem';

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

const menuItemsVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const menuItemVariants = {
  closed: {
    translateX: '-10%',
    opacity: 0,
  },
  open: {
    translateX: '20%',
    opacity: 1,
  },
};

export const Menu = () => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    // TODO: Style menu + add close menu if click outside (useRef ?)
    <div>
      <NavButton toggleMenu={cycleOpen} />
      <AnimatePresence>
        {open && (
          <motion.nav
            key="menuAside"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            exit={{ width: '0%', transition: { delay: 0.7, duration: 0.3 } }}
            className="absolute z-50 flex justify-between xl:max-w-8/12"
          >
            <motion.ul
              className="flex flex-col justify-center w-full h-screen py-16 bg-twilight"
              key="menuUl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuItemsVariants}
            >
              {menuItems.map((item) => {
                return (
                  <motion.li
                    key={item.label}
                    variants={menuItemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <MenuItem {...item} />
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};
