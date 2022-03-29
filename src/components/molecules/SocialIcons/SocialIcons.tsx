import React, { HTMLAttributes } from 'react';

import { GithubIcon, LinkedinIcon, MaltIcon } from '@/assets/icons';
import { COLORS } from '@/constants/Colors';

type SocialIconProps = {
  className: HTMLAttributes<HTMLImageElement>['className'];
};

// export type SocialIconType = {
//   label: string;
//   path: string;
//   icon: string;
// };

// const socialIcons: SocialIconType[] = [
//   {
//     label: 'Linkedin',
//     path: '/projects',
//     icon: 'Linkedin',
//   },
//   {
//     label: 'Malt',
//     path: '/about',
//     icon: 'Malt',
//   },
//   {
//     label: 'Github',
//     path: '/skills',
//     icon: 'Github',
//   },
//   {
//     label: 'Instagram',
//     path: '/contact',
//     icon: 'Instagram',
//   },
// ];

// FIXME: Replace with Icon.tsx
export const SocialIcons = ({
  className: additionalStyle,
}: SocialIconProps) => {
  // const renderedSocialIcons = socialIcons.map((icon) => {
  //   return <SocialIcon type={icon.icon} key={icon.label} {...icon} />;
  // });

  return (
    <div className={additionalStyle}>
      {/* {renderedSocialIcons} */}
      <a
        href="https://www.malt.fr/profile/fionaroux"
        target="_blank"
        rel="noreferrer"
      >
        <MaltIcon
          fill={COLORS.white.DEFAULT}
          className="transition-all duration-300 hover:fill-tomato"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/fionaroux/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinIcon
          fill={COLORS.white.DEFAULT}
          className="transition-all duration-300 hover:fill-tomato"
        />
      </a>
      <a
        href="https://github.com/ArcanumLibella"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon
          fill={COLORS.white.DEFAULT}
          className="transition-all duration-300 hover:fill-tomato"
        />
      </a>
      {/* <a
        href="https://www.instagram.com/sukhakulii/"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon
          fill={COLORS.white.DEFAULT}
          className="transition-all duration-300 hover:fill-tomato"
        />
      </a> */}
    </div>
  );
};
