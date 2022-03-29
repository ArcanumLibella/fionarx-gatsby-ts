import React, { HTMLAttributes } from 'react';

type TextPossibleTypes =
  | 'custom' // Should be used in very rare cases
  | 'heroTitle'
  | 'mainTitle'
  | 'title'
  | 'subtitle'
  | 'paragraph';

export type TextProps = {
  children: React.ReactNode;
  type: TextPossibleTypes;
  className?: HTMLAttributes<HTMLImageElement>['className'];
};

export const Text = ({
  children,
  type,
  className: additionalStyle,
}: TextProps) => {
  switch (type) {
    case 'heroTitle':
      return (
        <h1
          className={`font-black uppercase select-none text-[10vw] lg:text-[8vh] md:text-[8vw] xl:text-[8vh] font-brother text-shadow text-stroke-purple-ultraLight md:text-stroke-2 md:text-fill-transparent opacity-20 md:opacity-40 ${additionalStyle}`}
        >
          {children}
        </h1>
      );
    case 'mainTitle':
      return (
        <h2
          className={`font-brother font-black md:text-xl tracking-wide ${additionalStyle}`}
        >
          {children}
        </h2>
      );
    case 'title':
      return (
        <h3 className={`font-display font-bold text-2xl ${additionalStyle}`}>
          {children}
        </h3>
      );
    case 'subtitle':
      return (
        <h4
          className={`font-display font-bold md:text-2xl text-1.25xl ${additionalStyle}`}
        >
          {children}
        </h4>
      );
    case 'paragraph':
      return (
        <p
          className={`font-display font-bold md:text-slg text-lg ${additionalStyle}`}
        >
          {children}
        </p>
      );
    case 'custom':
    default:
      return <p className={additionalStyle}>{children}</p>;
  }
};
