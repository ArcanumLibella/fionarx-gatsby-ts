import React from 'react';

type BlobProps = {
  type: 'fill' | 'stroke';
  height: string;
  width: string;
};

export const Blob = ({ type, width, height }: BlobProps) => {
  return (
    <div
      className={`absolute animate-movement animate-transform
        ${
          type === 'fill'
            ? 'bg-twilight'
            : 'bg-transparent border-4 border-purple'
        }
        w-${width} h-${height}
      `}
    />
  );
};
