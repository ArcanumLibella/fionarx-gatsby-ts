import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/icons";
import { Text } from "@/components/atoms/Text";
import { HTMLAttributes } from "react";

export type ExternalLinkButtonProps = {
  side?: "left" | "right";
  label: string;
  path: string;
  className?: HTMLAttributes<HTMLImageElement>["className"];
};

export const ExternalLinkButton = ({
  side = "right",
  label,
  path,
  className: additionalStyle,
}: ExternalLinkButtonProps) => {
  const handleSideArrow = () => {
    if (side === "left") {
      return (
        <ArrowLeftIcon className="mr-1 transition-all group-hover:-translate-x-1" />
      );
    }
    return (
      <ArrowRightIcon className="ml-1 transition-all group-hover:translate-x-1" />
    );
  };

  return (
    <a
      href={path}
      target="_blank"
      className={`
        flex items-center z-30 group 
        ${side === "left" && "flex-row-reverse"}
        ${additionalStyle}
      `}
      rel="noreferrer"
    >
      <Text type="custom" className="font-bold uppercase text-tiny">
        {label}
      </Text>
      {handleSideArrow()}
    </a>
  );
};
