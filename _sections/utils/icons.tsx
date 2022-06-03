import { CloudIcon, ColorSwatchIcon } from "@heroicons/react/solid";
import HeroIcon from "_client/dynamic-hero-icon";
import { ShopifySection, ShopifySelect } from "types/shopify";

export const baseIcons = [
  {
    label: "ColorSwatchIcon",
    value: "ColorSwatchIcon",
    group: "Line Icons",
  },
  {
    label: "CloudIcon",
    value: "CloudIcon",
    group: "Line Icons",
  },
] as const;

export const icons = baseIcons as unknown as ShopifySelect["options"];

export const renderIcon = (value: typeof baseIcons[number]["value"], className = "") => {
  switch (value) {
    case "ColorSwatchIcon":
      return <HeroIcon name="ColorSwatchIcon" className={className} />;
    case "CloudIcon":
      return <HeroIcon name="CloudIcon" className={className} />;
  }
};
