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
      className={`${additionalStyle} relative px-4 pt-40 md:pt-56 md:px-8 md:ml-20 xl:ml-0 xl:py-0 pb-16 xl:px-0 xl:top-1/4 xl:-right-1/3 3xl:-right-2/5 max-w-fit z-10`}
    >
      <Blobs className="fixed flex justify-center items-center -top-1/5 -right-1/10 xl:right-auto xl:top-auto xl:-left-1/10 xl:-bottom-1/5 w-[56vw] h-[36vh] xl:w-[48vw] xl:h-[54vh] 2xl:w-[40vw] 2xl:h-[64vh] -z-1" />
      <BlobsLight className="hidden fixed xl:flex justify-center items-center xl:-right-1/10 xl:-top-1/5 w-[56vw] h-[40vh] xl:w-[48vw] xl:h-[54vh] 2xl:w-[40vw] 2xl:h-[72vh] -z-1" />
      <div className="max-w-800 2xl:max-w-5xl">
        <Text type="mainTitle" className="mb-10 text-tomato">
          {title}
        </Text>
        {children}
      </div>
    </div>
  );
};

export default SecondaryLayout;
