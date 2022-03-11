import { Link } from 'gatsby';
import React, { VFC } from 'react';

import { MenuItemType } from '@/components/organisms/Menu/Menu';

export type MenuItemProps = MenuItemType;

export const MenuItem: VFC<MenuItemProps> = ({ label, path }) => {
  return (
    <Link
      to={path}
      className="font-black uppercase cursor-pointer text-xxl font-brother text-stroke-white text-stroke-2 text-fill-transparent"
    >
      {label}
    </Link>
  );
};
