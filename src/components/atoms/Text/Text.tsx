import { HTMLAttributes } from "react";

type TextPossibleTypes =
  | "custom" // Should be used in very rare cases
  | "heroTitle"
  | "mainTitle"
  | "title"
  | "subtitle"
  | "paragraph"
  | "paragraphLight";

export type TextProps = {
  children: React.ReactNode;
  type: TextPossibleTypes;
  className?: HTMLAttributes<HTMLImageElement>["className"];
};

export const Text = ({
  children,
  type,
  className: additionalStyle,
}: TextProps) => {
  switch (type) {
    case "heroTitle":
      return (
        <h1
          className={`font-black uppercase select-none text-[10vw] lg:text-[8vh] md:text-[8vw] xl:text-[8vh] font-brother text-shadow text-stroke-purple-ultraLight md:text-stroke-2 md:text-fill-transparent opacity-20 md:opacity-40 ${additionalStyle}`}
        >
          {children}
        </h1>
      );
    case "mainTitle":
      return (
        <h2
          className={`font-brother font-black md:text-xl 2xl:text-xxl tracking-tightest uppercase selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </h2>
      );
    case "title":
      return (
        <h3
          className={`font-brother font-medium md:text-lg 2xl:text-xlg tracking-tight selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </h3>
      );
    case "subtitle":
      return (
        <h4
          className={`font-brother font-extrabold md:text-md 2xl:text-xmd selection:bg-purple uppercase ${additionalStyle}`}
        >
          {children}
        </h4>
      );
    case "paragraph":
      return (
        <p
          className={`font-body md:text-base 2xl:text-xbase selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </p>
      );
    case "paragraphLight":
      return (
        <p
          className={`font-body font-extralight text-normal tracking-wider leading-relaxed selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </p>
      );
    case "custom":
    default:
      return <p className={additionalStyle}>{children}</p>;
  }
};
