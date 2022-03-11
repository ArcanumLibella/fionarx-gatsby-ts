import React, { VFC } from 'react';

import * as icons from '@assets/icons';

export type IconTypes = keyof typeof icons;

export const iconList = Object.keys(icons) as IconTypes[];

export const ICON_SIZES = {
  small: '1rem' /* 16px */,
  medium: '1.5rem' /* 24 px */,
  large: '3rem' /* 48 px */,
};

export interface SocialIconProps {
  type: IconTypes;
  color?: string;
  fill?: string;
  stroke?: string;
  rotate?: string | number;
  size?: keyof typeof ICON_SIZES;
  customSize?: {
    width?: string | number;
    height?: string | number;
  };
  className?: string;
}

export const SocialIcon: VFC<SocialIconProps> = ({
  type,
  color,
  fill,
  stroke,
  size = 'medium',
  customSize,
  rotate,
  className,
}) => {
  const SvgIcon = icons[type] || icons.backIcon;
  const svgSize = ICON_SIZES[size] || 'medium';

  const svgFill = fill || color || 'white';
  const svgStroke = stroke || color || 'none';
  const svgRotate = rotate ? `rotate(${rotate})` : undefined;

  return (
    <SvgIcon
      fill={svgFill}
      stroke={svgStroke}
      transform={svgRotate}
      width={customSize?.width || svgSize}
      height={customSize?.height || svgSize}
      className={className}
    />
  );
};
