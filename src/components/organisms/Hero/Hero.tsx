import { Link } from 'gatsby';
import React from 'react';

export const Hero = () => {
  // FIXME: Review style hero
  return (
    <div className="flex flex-col items-end justify-center h-screen px-20 py-16 text-right bg-midnight">
      <h2 className="text-xl font-black uppercase select-none font-brother text-stroke-purple-ultraLight text-stroke-2 text-fill-transparent opacity-40">
        Performance
      </h2>
      <h2 className="text-xl font-black uppercase select-none font-brother text-stroke-purple-ultraLight text-stroke-2 text-fill-transparent opacity-40">
        SEO
      </h2>
      <h2 className="text-xl font-black uppercase select-none font-brother text-stroke-purple-ultraLight text-stroke-2 text-fill-transparent opacity-40">
        Back-office
      </h2>
      <Link to="/about">
        <h1 className="font-black uppercase cursor-pointer select-none text-xxxl font-brother">
          Fiona Roux
        </h1>
      </Link>
      <h2 className="text-xl font-black uppercase select-none opacity-40 font-brother text-stroke-white text-stroke-2 text-fill-transparent">
        Site internet sur-mesure
      </h2>
      <h2 className="text-xl font-black uppercase select-none font-brother text-stroke-white text-stroke-2 text-fill-transparent opacity-40">
        Webdesign
      </h2>
    </div>
  );
};
