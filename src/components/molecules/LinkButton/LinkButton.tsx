import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/icons";
import { Text } from "@/components/atoms/Text";
import { COLORS } from "@/constants/Colors";
import { Link } from "gatsby";
import { HTMLAttributes } from "react";

export type LinkButtonProps = {
  side?: "left" | "right";
  label: string;
  path: string;
  className?: HTMLAttributes<HTMLImageElement>["className"];
};

export const LinkButton = ({
  side = "right",
  label,
  path,
  className: additionalStyle,
}: LinkButtonProps) => {
  const handleSideArrow = () => {
    if (side === "left") {
      return (
        <ArrowLeftIcon
          fill={COLORS.white.DEFAULT}
          className="transition-all group-hover:-translate-x-1 mr-4"
        />
      );
    }
    return (
      <ArrowRightIcon
        fill={COLORS.white.DEFAULT}
        className="transition-all group-hover:translate-x-1 ml-4"
      />
    );
  };

  return (
    <Link
      to={path}
      className={`
        flex items-center z-100 group 
        ${side === "left" && "flex-row-reverse"}
        ${additionalStyle}
      `}
    >
      <Text type="custom" className="font-bold uppercase">
        {label}
      </Text>
      {handleSideArrow()}
    </Link>
  );
};
