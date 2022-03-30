import { Text } from "@/components/atoms/Text";
import { Blobs } from "@/components/organisms/Blobs";
import { BlobsLight } from "@/components/organisms/BlobsLight";
import { HTMLAttributes } from "react";

type SecondaryLayoutProps = {
  children: React.ReactNode;
  title: string;
  className?: HTMLAttributes<HTMLImageElement>["className"];
};

const SecondaryLayout = ({
  children,
  title,
  className: additionalStyle,
}: SecondaryLayoutProps) => {
  return (
    <div
      className={`${additionalStyle} relative flex justify-end xl:pt-48 xl:pr-20`}
    >
      <Blobs className="fixed xl:-left-1/10 xl:-bottom-1/5 w-[56vw] h-[40vh] lg:w-[48vw] lg:h-[54vh] xl:w-[40vw] xl:h-[64vh]" />
      <BlobsLight className="fixed flex justify-center items-center xl:-right-1/10 xl:-top-1/5 w-[56vw] h-[40vh] lg:w-[48vw] lg:h-[54vh] xl:w-[40vw] xl:h-[72vh]" />
      <div className="z-0 max-w-layout">
        <Text type="mainTitle" className="mb-10 text-tomato">
          {title}
        </Text>
        {children}
      </div>
    </div>
  );
};

export default SecondaryLayout;
