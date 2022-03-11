import { Link } from 'gatsby';
import React from 'react';

import { Blobs } from '@/components/atoms/Blobs';

export const Hero = () => {
  // FIXME: Review style hero
  return (
    <>
      <Blobs />
      <div className="z-20 flex flex-col items-center justify-center h-screen p-4 overflow-hidden text-center lg:py-16 md:items-end md:text-right md:px-8 lg:px-20 bg-midnight">
        <h2 className="font-black uppercase select-none text-[12vw] lg:text-[8vh] md:text-[8vw] xl:text-[8vh] font-brother text-shadow text-stroke-purple-ultraLight md:text-stroke-2 md:text-fill-transparent opacity-20 md:opacity-40">
          Performance
        </h2>
        <h2 className="font-black uppercase select-none text-[12vw] lg:text-[8vh] md:text-[8vw] xl:text-[8vh] font-brother text-shadow text-stroke-purple-ultraLight md:text-stroke-2 md:text-fill-transparent opacity-20 md:opacity-40">
          SEO
        </h2>
        <h2 className="font-black uppercase bg-clip-text text-purple-ultraLight select-none text-[12vw] lg:text-[8vh] md:text-[8vw] xl:text-[8vh] font-brother text-stroke-purple-ultraLight md:text-stroke-2 md:text-fill-transparent opacity-20 md:opacity-40">
          Back-office
        </h2>
        <Link to="/about" className="z-10">
          <h1 className="text-[12vw] font-black uppercase cursor-pointer select-none md:text-[10vw] lg-text-[10vh] xl:text-[12vh] font-brother">
            Fiona Roux
          </h1>
        </Link>
        <h2 className="font-black uppercase select-none text-[12vw] lg:text-[8vh] md:text-[8vw] xl:text-[8vh] opacity-20 md:opacity-40 font-brother text-shadow text-stroke-purple-ultraLight md:text-stroke-2 md:text-fill-transparent">
          Site internet sur-mesure
        </h2>
        <h2 className="font-black uppercase select-none text-[12vw] lg:text-[8vh] md:text-[8vw] xl:text-[8vh] font-brother text-shadow text-stroke-purple-ultraLight md:text-stroke-2 md:text-fill-transparent opacity-20 md:opacity-40">
          Webdesign
        </h2>
      </div>
    </>
  );
};
