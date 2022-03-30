import { HTMLAttributes } from "react";

type BlobsProps = {
  className?: HTMLAttributes<HTMLImageElement>["className"];
};
export const Blobs = ({ className }: BlobsProps) => {
  return (
    <div className={className}>
      <div className="absolute w-full h-full animate-movement animate-transform bg-twilight" />
      <div className="absolute w-[104%] h-[104%] animate-movement animate-transform bg-transparent border-4 border-purple blur-lg" />
      <div className="absolute w-[96%] h-[96%] animate-movement animate-transform3s bg-transparent border border-purple-ultraLight" />
      <div className="absolute w-[108%] h-[108%] animate-movement animate-transform5s bg-transparent border border-purple-light" />
      <div className="absolute w-[112%] h-[112%] animate-movement animate-transform8s bg-transparent border border-purple" />
      <div className="absolute w-[124%] h-[124%] animate-movement animate-transform8s bg-transparent border-2 border-purple-light blur-sm" />
    </div>
  );
};
