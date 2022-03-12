import React from 'react';

export const Blobs = () => {
  return (
    <div className="absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[56vw] h-[40vh] lg:w-[48vw] lg:h-[54vh] xl:w-[32vw] xl:h-[56vh]">
      <div className="absolute w-full h-full animate-movement animate-transform bg-twilight" />
      <div className="absolute w-[104%] h-[104%] animate-movement animate-transform bg-transparent border-4 border-purple blur-lg" />
      <div className="absolute w-[112%] h-[112%] animate-movement animate-transform3s bg-transparent border border-purple-ultraLight" />
      <div className="absolute w-[124%] h-[124%] animate-movement animate-transform8s bg-transparent border-2 border-purple-light blur-sm" />
    </div>
  );
};
