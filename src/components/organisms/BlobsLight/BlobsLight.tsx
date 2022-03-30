import { HTMLAttributes } from "react";

type BlobsLightProps = {
  className?: HTMLAttributes<HTMLImageElement>["className"];
};
export const BlobsLight = ({ className }: BlobsLightProps) => {
  return (
    <div className={`${className} z-0`}>
      <div className="absolute w-[104%] h-[104%] animate-movement animate-transform bg-transparent border-4 border-purple-ultraDark blur-md" />
      <div className="absolute w-[92%] h-[92%] animate-movement animate-transform bg-transparent border border-purple" />
      <div className="absolute w-[104%] h-[104%] animate-movement animate-transform3s bg-transparent border border-purple" />
      <div className="absolute w-[112%] h-[112%] animate-movement animate-transform5s bg-transparent border border-purple" />
      <div className="absolute w-[124%] h-[124%] animate-movement animate-transform8s bg-transparent border-2 border-purple-light blur-md" />
      <div className="absolute w-[80%] h-[80%] animate-movement animate-transform8s bg-transparent border-2 border-purple-light blur-md" />
    </div>
  );
};
