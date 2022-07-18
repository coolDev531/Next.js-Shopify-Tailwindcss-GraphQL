import dynamic from "next/dynamic";
import { ComponentType, FC, HTMLAttributes } from "react";
import { IconName } from "../shopify/utils/icons";

type HeroIconProps = {
  name: IconName;
  className?: HTMLAttributes<string>["className"];
  outline?: boolean;
};

const HeroIcon: FC<HeroIconProps> = ({ name, className = "", outline = false }) => {
  const Icon: ComponentType<{ className: string }> = outline
    ? dynamic(() => import("@heroicons/react/outline").then((mod) => mod[name]))
    : dynamic(() => import("@heroicons/react/solid").then((mod) => mod[name]));

  return <Icon className={className} />;
};

export default HeroIcon;
