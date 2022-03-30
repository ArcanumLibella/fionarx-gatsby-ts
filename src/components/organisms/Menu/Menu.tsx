import { AnimatePresence, motion, useCycle } from 'framer-motion';
import React from 'react';

import { GithubIcon, LinkedinIcon, MaltIcon } from '@/assets/icons';
import { NavButton } from '@/components/molecules/NavButton';
import { COLORS } from '@/constants/Colors';
import { useIsMobile } from '@/utils/useWindowSize';

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

const socialItemsVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.4,
      staggerDirection: -1,
    },
  },
};

const menuItemVariants = {
  closed: {
    translateX: '-10%',
    opacity: 0,
  },
  open: {
    translateX: '15%',
    opacity: 1,
  },
};

export const Menu = () => {
  const isMobile = useIsMobile();
  const [open, cycleOpen] = useCycle(false, true);

  return (
    // TODO: Style menu + add close menu if click outside (useRef ?)
    <>
      <NavButton toggleMenu={cycleOpen} />
      <AnimatePresence>
        {open && (
          <motion.nav
            key="menuAside"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            exit={{ width: '0%', transition: { delay: 0.7, duration: 0.3 } }}
            className="absolute z-40 overflow-hidden xl:max-w-8/12"
          >
            <motion.ul
              className="flex flex-col justify-center w-full h-screen bg-twilight md:ml-20"
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
                    <MenuItem toggleMenu={cycleOpen} {...item} />
                  </motion.li>
                );
              })}
            </motion.ul>
            {isMobile && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={socialItemsVariants}
                className="absolute z-50 flex items-center gap-4 h-14 right-20 bottom-2 "
              >
                <motion.a
                  href="https://www.malt.fr/profile/fionaroux"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                  variants={menuItemVariants}
                >
                  <MaltIcon
                    fill={COLORS.purple.DEFAULT}
                    height={32}
                    width={32}
                    className="transition-all duration-300 hover:fill-purple-light"
                  />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/fionaroux/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                  variants={menuItemVariants}
                >
                  <LinkedinIcon
                    fill={COLORS.purple.DEFAULT}
                    height={32}
                    width={32}
                    className="transition-all duration-300 hover:fill-purple-light"
                  />
                </motion.a>
                <motion.a
                  href="https://github.com/ArcanumLibella"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                  variants={menuItemVariants}
                >
                  <GithubIcon
                    fill={COLORS.purple.DEFAULT}
                    height={32}
                    width={32}
                    className="transition-all duration-300 hover:fill-purple-light"
                  />
                </motion.a>
              </motion.div>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
