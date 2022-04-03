import { HTMLAttributes } from "react";

type TextPossibleTypes =
  | "custom" // Should be used in very rare cases
  | "heroTitle"
  | "mainTitle"
  | "secondTitle"
  | "title"
  | "subtitle"
  | "paragraph"
  | "paragraphSmall"
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
          className={`font-brother font-black text-mxl md:text-xl 2xl:text-xxl tracking-tight md:tracking-tightest uppercase selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </h2>
      );
    case "secondTitle":
      return (
        <h3
          className={`font-brother font-extrabold text-lg md:text-xlg 2xl:text-xxlg leading-none selection:bg-purple text-tomato ${additionalStyle}`}
        >
          {children}
        </h3>
      );
    case "title":
      return (
        <h4
          className={`font-brother font-medium text-mlg md:text-lg 2xl:text-xlg md:tracking-tight selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </h4>
      );
    case "subtitle":
      return (
        <h5
          className={`font-brother font-extrabold text-mmd md:text-md 2xl:text-xmd selection:bg-purple uppercase ${additionalStyle}`}
        >
          {children}
        </h5>
      );
    case "paragraph":
      return (
        <p
          className={`font-body text-mbase md:text-base 2xl:text-xbase selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </p>
      );
    case "paragraphSmall":
      return (
        <p
          className={`font-body text-normal 2xl:text-base font-light selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </p>
      );
    case "paragraphLight":
      return (
        <p
          className={`font-body font-extralight text-normal 2xl:text-base tracking-wider leading-relaxed selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </p>
      );
    case "custom":
    default:
      return <p className={additionalStyle}>{children}</p>;
  }
};
