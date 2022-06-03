import { CloudIcon, ColorSwatchIcon } from "@heroicons/react/solid";
import { ShopifySection, ShopifySelect } from "types/shopify";

export const baseIcons = [
  {
    label: "test",
    value: "test",
    group: "test",
  },
  {
    label: "test2",
    value: "test2",
    group: "test",
  },
] as const;

export const icons = baseIcons as unknown as ShopifySelect["options"];

export const renderIcon = (value: typeof baseIcons[number]["value"], className = "") => {
  switch (value) {
    case "test":
      return <ColorSwatchIcon className={className} />;
    case "test2":
      return <CloudIcon className={className} />;
  }
};
