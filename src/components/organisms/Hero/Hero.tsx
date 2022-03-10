import React from 'react';

export const Hero = () => {
  return (
    <div className="HomePage flex flex-col justify-center items-end px-20 py-16 h-screen bg-midnight text-right">
      <h2 className="font-brother font-black text-xl text-stroke-white text-stroke-2 text-fill-transparent uppercase cursor-pointer">
        SEO | Accessibility | Performance
      </h2>
      <h2 className="font-brother font-black text-xl text-stroke-white text-stroke-2 text-fill-transparent uppercase cursor-pointer">
        Strapi
      </h2>
      <h1 className="font-brother font-black text-xl uppercase">Fiona Roux</h1>
      <h2 className="font-brother font-black text-xl text-stroke-white text-stroke-2 text-fill-transparent uppercase cursor-pointer">
        React | TypeScript | Gatsby
      </h2>
      <h2 className="font-brother font-black text-xl text-stroke-white text-stroke-2 text-fill-transparent uppercase cursor-pointer">
        UI-UX Design
      </h2>
      <h2 className="font-brother font-black text-xl text-stroke-white text-stroke-2 text-fill-transparent uppercase cursor-pointer">
        TypeScript
      </h2>
    </div>
  );
};
