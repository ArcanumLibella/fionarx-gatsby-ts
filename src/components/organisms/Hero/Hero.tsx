import { Link } from 'gatsby';
import React from 'react';

import { Blobs } from '@/components/organisms/Blobs';
import { Text } from '@/components/atoms/Text';

export const Hero = () => {
  // FIXME: Review style hero
  return (
    <div className="z-20 flex flex-col items-center justify-center h-screen min-h-screen px-4 overflow-hidden text-center lg:py-16 md:items-end md:text-right md:px-8 lg:px-20 bg-midnight">
      <Blobs />
      <Text type="heroTitle">Performance</Text>
      <Text type="heroTitle">SEO</Text>
      <Text type="heroTitle">Back-office</Text>
      <Link to="/about" className="z-10">
        <h1 className="text-[12vw] font-black uppercase cursor-pointer select-none md:text-[10vw] lg-text-[10vh] xl:text-[12vh] font-brother">
          Fiona Roux
        </h1>
      </Link>
      <Text type="heroTitle">Site vitrine & Web App</Text>
      <Text type="heroTitle">Webdesign</Text>
    </div>
  );
};
