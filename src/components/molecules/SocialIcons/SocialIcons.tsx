import React from 'react';

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MaltIcon,
} from '@/assets/icons';
import { COLORS } from '@/constants/Colors';

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

export const SocialIcons = () => {
  // const renderedSocialIcons = socialIcons.map((icon) => {
  //   return <SocialIcon type={icon.icon} key={icon.label} {...icon} />;
  // });

  return (
    <div className="flex flex-col justify-end flex-1 gap-3">
      {/* {renderedSocialIcons} */}
      <a
        href="https://www.malt.fr/profile/fionaroux"
        target="_blank"
        rel="noreferrer"
      >
        <MaltIcon
          fill={COLORS.orange.DEFAULT}
          className="transition-all duration-300 hover:fill-tomato"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/fionaroux/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinIcon
          fill={COLORS.orange.DEFAULT}
          className="transition-all duration-300 hover:fill-tomato"
        />
      </a>
      <a
        href="https://github.com/ArcanumLibella"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon
          fill={COLORS.orange.DEFAULT}
          className="transition-all duration-300 hover:fill-tomato"
        />
      </a>
      <a
        href="https://www.instagram.com/sukhakulii/"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon
          fill={COLORS.orange.DEFAULT}
          className="transition-all duration-300 hover:fill-tomato"
        />
      </a>
    </div>
  );
};
