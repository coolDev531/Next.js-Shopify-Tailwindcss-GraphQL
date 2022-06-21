import HeroIcon, { IconName } from "_client/dynamic-hero-icon";
import { ShopifySelect } from "types/shopify";
import Server2 from "public/icons/line-icons/server-2.svg";
import Server8 from "public/icons/line-icons/server-8.svg";
import UpAlign1Light from "public/icons/line-icons/up-align-1-light.svg";
import Columns1Light from "public/icons/line-icons/columns-1-light.svg";
import LaptopStarLight from "public/icons/line-icons/laptop-star-light.svg";
import Squares1Light from "public/icons/line-icons/squares-1-light.svg";
import CubesLight from "public/icons/line-icons/cubes-light.svg";

import Brutalist from "public/icons/tw-icons/brutalist.svg";
import Colors from "public/icons/tw-icons/colors.svg";
import Elegant from "public/icons/tw-icons/elegant.svg";
import Filters from "public/icons/tw-icons/filters.svg";
import Grid from "public/icons/tw-icons/grid.svg";
import Playful from "public/icons/tw-icons/playful.svg";
import Shadows from "public/icons/tw-icons/shadows.svg";
import Simple from "public/icons/tw-icons/simple.svg";
import Sizing from "public/icons/tw-icons/sizing.svg";
import Transforms from "public/icons/tw-icons/transforms.svg";
import Typography from "public/icons/tw-icons/typography.svg";

import CalendarLight from "public/icons/tw-ui-icons/calendar-light.svg";
import ChatLight from "public/icons/tw-ui-icons/chat-light.svg";
import Code from "public/icons/tw-ui-icons/code.svg";
import DeliveryLight from "public/icons/tw-ui-icons/delivery-light.svg";
import ExchangeSimple from "public/icons/tw-ui-icons/exchange-simple.svg";
import FastCheckoutLight from "public/icons/tw-ui-icons/fast-checkout-light.svg";
import GiftCardLight from "public/icons/tw-ui-icons/gift-card-light.svg";
import PlanetLight from "public/icons/tw-ui-icons/planet-light.svg";
import Resize from "public/icons/tw-ui-icons/resize.svg";
import ReturnsLight from "public/icons/tw-ui-icons/returns-light.svg";
import ShippingSimple from "public/icons/tw-ui-icons/shipping-simple.svg";
import Stack from "public/icons/tw-ui-icons/stack.svg";
import WarrantyLight from "public/icons/tw-ui-icons/warranty-light.svg";
import WarrantySimple from "public/icons/tw-ui-icons/warranty-simple.svg";

export const heroIconItems: IconName[] = [
  "BadgeCheckIcon",
  "CameraIcon",
  "ChatAlt2Icon",
  "ColorSwatchIcon",
  "CloudIcon",
  "DesktopComputerIcon",
  "CubeTransparentIcon",
  "DeviceMobileIcon",
  "DeviceTabletIcon",
  "CursorClickIcon",
  "HeartIcon",
  "KeyIcon",
  "LightningBoltIcon",
  "LinkIcon",
  "LightBulbIcon",
  "LockClosedIcon",
  "LockOpenIcon",
  "PaperAirplaneIcon",
  "ShoppingBagIcon",
  "ShoppingCartIcon",
  "SparklesIcon",
  "TagIcon",
  "TruckIcon",
  "UserGroupIcon",
  "AnnotationIcon",
  "MailIcon",
  "MailOpenIcon",
];

const createHeroIcons = (icons: IconName[]) => {
  return icons.map((icon) => ({ value: icon, label: icon, group: "Hero Icons" }));
};

export const heroIcons = createHeroIcons(heroIconItems);

export const twIcons = [
  {
    value: "brutalist",
    label: "Brutalist",
    group: "TW Icons",
  },
  {
    value: "colors",
    label: "Colors",
    group: "TW Icons",
  },
  {
    value: "elegant",
    label: "Elegant",
    group: "TW Icons",
  },
  {
    value: "filters",
    label: "Filters",
    group: "TW Icons",
  },
  {
    value: "grid",
    label: "Grid",
    group: "TW Icons",
  },
  {
    value: "playful",
    label: "Playful",
    group: "TW Icons",
  },
  {
    value: "shadows",
    label: "Shadows",
    group: "TW Icons",
  },
  {
    value: "simple",
    label: "Simple",
    group: "TW Icons",
  },
  {
    value: "sizing",
    label: "Sizing",
    group: "TW Icons",
  },
  {
    value: "transforms",
    label: "Transforms",
    group: "TW Icons",
  },
  {
    value: "typography",
    label: "Typography",
    group: "TW Icons",
  },
] as const;

export const twUiIcons = [
  {
    value: "CalendarLight",
    label: "CalendarLight",
    group: "TW UI Icons",
  },
  {
    value: "ChatLight",
    label: "ChatLight",
    group: "TW UI Icons",
  },
  {
    value: "Code",
    label: "Code",
    group: "TW UI Icons",
  },
  {
    value: "DeliveryLight",
    label: "DeliveryLight",
    group: "TW UI Icons",
  },
  {
    value: "ExchangeSimple",
    label: "ExchangeSimple",
    group: "TW UI Icons",
  },
  {
    value: "FastCheckoutLight",
    label: "FastCheckoutLight",
    group: "TW UI Icons",
  },
  {
    value: "GiftCardLight",
    label: "GiftCardLight",
    group: "TW UI Icons",
  },
  {
    value: "PlanetLight",
    label: "PlanetLight",
    group: "TW UI Icons",
  },
  {
    value: "Resize",
    label: "Resize",
    group: "TW UI Icons",
  },
  {
    value: "ReturnsLight",
    label: "ReturnsLight",
    group: "TW UI Icons",
  },
  {
    value: "ShippingSimple",
    label: "ShippingSimple",
    group: "TW UI Icons",
  },
  {
    value: "Stack",
    label: "Stack",
    group: "TW UI Icons",
  },
  {
    value: "WarrantyLight",
    label: "WarrantyLight",
    group: "TW UI Icons",
  },
  {
    value: "WarrantySimple",
    label: "WarrantySimple",
    group: "TW UI Icons",
  },
] as const;

export const lineIcons = [
  {
    value: "server-2",
    label: "Server 2",
    group: "Line Icons",
  },
  {
    value: "server-8",
    label: "Server 8",
    group: "Line Icons",
  },
  {
    value: "up-align-1-light",
    label: "Up Align 1 Light",
    group: "Line Icons",
  },
  {
    value: "columns-1-light",
    label: "columns-1-light",
    group: "Line Icons",
  },
  {
    value: "laptop-star-light",
    label: "laptop-star-light",
    group: "Line Icons",
  },
  {
    value: "squares-1-light",
    label: "squares-1-light",
    group: "Line Icons",
  },
  {
    value: "cubes-light",
    label: "cubes-light",
    group: "Line Icons",
  },
] as const;

export const icons = [
  ...(heroIcons as unknown as ShopifySelect["options"]),
  ...(twIcons as unknown as ShopifySelect["options"]),
  ...(twUiIcons as unknown as ShopifySelect["options"]),
  ...(lineIcons as unknown as ShopifySelect["options"]),
];

export const renderIcon = (
  value:
    | typeof heroIcons[number]["value"]
    | typeof twIcons[number]["value"]
    | typeof twUiIcons[number]["value"]
    | typeof lineIcons[number]["value"],
  className = ""
) => {
  if (heroIcons.some((icon) => icon.value === value)) {
    return renderHeroIcon(value as typeof heroIcons[number]["value"], className);
  }
  if (twIcons.some((icon) => icon.value === value)) {
    return renderTwIcon(value as typeof twIcons[number]["value"], className);
  }
  if (twUiIcons.some((icon) => icon.value === value)) {
    return renderTwUiIcon(value as typeof twUiIcons[number]["value"], className);
  }
  if (lineIcons.some((icon) => icon.value === value)) {
    return renderLineIcon(value as typeof lineIcons[number]["value"], className);
  }
  return "";
};

export const renderLineIcon = (value: typeof lineIcons[number]["value"], className = "") => {
  switch (value) {
    case "server-2":
      return <Server2 className={className} />;
    case "server-8":
      return <Server8 className={className} />;
    case "up-align-1-light":
      return <UpAlign1Light className={className} />;
    case "columns-1-light":
      return <Columns1Light className={className} />;
    case "laptop-star-light":
      return <LaptopStarLight className={className} />;
    case "squares-1-light":
      return <Squares1Light className={className} />;
    case "cubes-light":
      return <CubesLight className={className} />;
  }
};

export const renderHeroIcon = (value: typeof heroIcons[number]["value"], className = "") => {
  return <HeroIcon name={value} className={className} outline={false} />;
};

export const renderTwIcon = (value: typeof twIcons[number]["value"], className = "") => {
  switch (value) {
    case "brutalist":
      return <Brutalist className={className} />;
    case "colors":
      return <Colors className={className} />;
    case "elegant":
      return <Elegant className={className} />;
    case "filters":
      return <Filters className={className} />;
    case "grid":
      return <Grid className={className} />;
    case "playful":
      return <Playful className={className} />;
    case "shadows":
      return <Shadows className={className} />;
    case "simple":
      return <Simple className={className} />;
    case "sizing":
      return <Sizing className={className} />;
    case "transforms":
      return <Transforms className={className} />;
    case "typography":
      return <Typography className={className} />;
  }
};

export const renderTwUiIcon = (value: typeof twUiIcons[number]["value"], className = "") => {
  switch (value) {
    case "CalendarLight":
      return <CalendarLight className={className} />;
    case "ChatLight":
      return <ChatLight className={className} />;
    case "Code":
      return <Code className={className} />;
    case "DeliveryLight":
      return <DeliveryLight className={className} />;
    case "ExchangeSimple":
      return <ExchangeSimple className={className} />;
    case "FastCheckoutLight":
      return <FastCheckoutLight className={className} />;
    case "GiftCardLight":
      return <GiftCardLight className={className} />;
    case "PlanetLight":
      return <PlanetLight className={className} />;
    case "Resize":
      return <Resize className={className} />;
    case "ReturnsLight":
      return <ReturnsLight className={className} />;
    case "ShippingSimple":
      return <ShippingSimple className={className} />;
    case "Stack":
      return <Stack className={className} />;
    case "WarrantyLight":
      return <WarrantyLight className={className} />;
    case "WarrantySimple":
      return <WarrantySimple className={className} />;
  }
};
