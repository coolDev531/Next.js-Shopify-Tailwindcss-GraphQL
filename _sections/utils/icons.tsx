import HeroIcon from "_client/dynamic-hero-icon";
import dynamic from "next/dynamic";
import { ShopifySelect } from "types/shopify";
import Server2 from "public/icons/line-icons/server-2.svg";
import Server8 from "public/icons/line-icons/server-8.svg";
import Sizing from "public/icons/tw-icons/sizing.svg";

export const heroIcons = [
  {
    label: "ColorSwatchIcon",
    value: "ColorSwatchIcon",
    group: "Hero Icons",
  },
  {
    label: "CloudIcon",
    value: "CloudIcon",
    group: "Hero Icons",
  },
] as const;

export const twIcons = [
  {
    label: "Sizing",
    value: "sizing",
    group: "TW Icons",
  },
  {
    label: "Colors",
    value: "colors",
    group: "TW Icons",
  },
  {
    label: "Typography",
    value: "typography",
    group: "TW Icons",
  },
  {
    label: "Shadows",
    value: "shadows",
    group: "TW Icons",
  },
  {
    label: "Filters",
    value: "filters",
    group: "TW Icons",
  },
  {
    label: "Layout Simple",
    value: "layout_simple",
    group: "TW Icons",
  },
  {
    label: "Layout Playful",
    value: "layout_playful",
    group: "TW Icons",
  },
  {
    label: "Layout Elegant",
    value: "layout_elegant",
    group: "TW Icons",
  },
  {
    label: "Layout Responsive",
    value: "layout_responsive",
    group: "TW Icons",
  },
  {
    label: "Layout Grid",
    value: "layout_grid",
    group: "TW Icons",
  },
  {
    label: "Layout Floating",
    value: "layout_floating",
    group: "TW Icons",
  },
] as const;

export const lineIcons = [
  {
    label: "Server 2",
    value: "server-2",
    group: "Line Icons",
  },
  {
    label: "Server 8",
    value: "server-8",
    group: "Line Icons",
  },
] as const;

export const icons = [
  ...(heroIcons as unknown as ShopifySelect["options"]),
  ...(twIcons as unknown as ShopifySelect["options"]),
  ...(lineIcons as unknown as ShopifySelect["options"]),
];

export const renderIcon = (
  value:
    | typeof heroIcons[number]["value"]
    | typeof twIcons[number]["value"]
    | typeof lineIcons[number]["value"],
  className = ""
) => {
  if (heroIcons.some((icon) => icon.value === value)) {
    return renderHeroIcon(value as typeof heroIcons[number]["value"], className);
  }
  if (twIcons.some((icon) => icon.value === value)) {
    return renderTwIcon(value as typeof twIcons[number]["value"], className);
  }
  if (lineIcons.some((icon) => icon.value === value)) {
    return renderLineIcon(value as typeof lineIcons[number]["value"], className);
  }
  return "";
};

export const renderHeroIcon = (value: typeof heroIcons[number]["value"], className = "") => {
  switch (value) {
    case "ColorSwatchIcon":
      return <HeroIcon name="ColorSwatchIcon" className={className} />;
    case "CloudIcon":
      return <HeroIcon name="CloudIcon" className={className} />;
  }
};

export const renderLineIcon = (value: typeof lineIcons[number]["value"], className = "") => {
  switch (value) {
    case "server-2":
      return <Server2 className={className} />;
    case "server-8":
      return <Server8 className={className} />;
  }
};

export const renderTwIcon = (value: typeof twIcons[number]["value"], className = "") => {
  switch (value) {
    case "filters":
      return (
        <svg fill="none" aria-hidden="true" className={className}>
          <path
            d="M31 30c0-7.18-5.82-13-13-13m-5.009 1C8.298 19.961 5 24.596 5 30c0 7.18 5.82 13 13 13 5.404 0 10.039-3.298 12-7.991"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <circle
            cx="30"
            cy="18"
            r="13"
            fill="currentColor"
            fillOpacity="0"
            stroke="currentColor"
            strokeWidth="2"
          ></circle>
          <path
            d="m26 30 4-4M21 27l6-6M18 22l4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      );
    case "layout_grid":
      return (
        <svg fill="none" aria-hidden="true" className={className}>
          <path
            d="M5 13a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6ZM5 29a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6ZM19 29a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-6ZM33 29a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-6ZM19 13a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H22a3 3 0 0 1-3-3v-6Z"
            fill="currentColor"
            fillOpacity=".1"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
      );
    case "layout_floating":
      return (
        <svg fill="none" aria-hidden="true" className={className}>
          <path
            d="M5.632 11.725a3 3 0 0 1 2.554-3.388l3.96-.557a3 3 0 0 1 3.389 2.554l.835 5.941a3 3 0 0 1-2.553 3.388l-3.961.557a3 3 0 0 1-3.389-2.553l-.835-5.942ZM1 29a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6ZM20 34a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-6ZM36.728 27.026a3 3 0 0 1 3.558-2.31l3.913.831a3 3 0 0 1 2.31 3.558l-1.247 5.87a3 3 0 0 1-3.558 2.31l-3.913-.832a3 3 0 0 1-2.31-3.558l1.247-5.869ZM22.236 9.17a3 3 0 0 1 3.202-2.783l17.956 1.255a3 3 0 0 1 2.784 3.202l-.419 5.986a3 3 0 0 1-3.202 2.783l-17.956-1.255a3 3 0 0 1-2.784-3.202l.419-5.986Z"
            fill="currentColor"
            fillOpacity="0"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
      );
    case "layout_simple":
      return (
        <svg fill="none" aria-hidden="true" className={className}>
          <path
            d="M5 11a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11Z"
            fill="currentColor"
            fillOpacity=".1"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
          <path d="M15 7v34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        </svg>
      );
    case "layout_playful":
      return (
        <svg fill="none" aria-hidden="true" className={className}>
          <path d="M5 8h36v32H5V8Z" fill="currentColor" fillOpacity="0"></path>
          <path
            d="M42 29V11a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4h19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M33.662 41.736a1 1 0 0 1-1.1-1.322l3.08-8.68a1 1 0 0 1 1.736-.274l5.6 7.299a1 1 0 0 1-.637 1.596l-8.679 1.38Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path d="M14 7v34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
          <path
            d="M22.8 19.949a2 2 0 0 1 2.4-1.5l5.851 1.352a2 2 0 0 1 1.5 2.399l-1.352 5.851a2 2 0 0 1-2.399 1.5l-5.851-1.352a2 2 0 0 1-1.5-2.399l1.352-5.851Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      );
    case "layout_elegant":
      return (
        <svg fill="none" aria-hidden="true" className={className}>
          <path d="M6 8h32a4 4 0 0 1 4 4v28H6V8Z" fill="currentColor" fillOpacity="0"></path>
          <path
            d="M43 21v16a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4h20M15 7v34"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M37 7c0 1.101 0 6-6 6 1.101 0 6 0 6 6 0-6 4.899-6 6-6-6 0-6-4.899-6-6ZM31 21c0 .734 0 4-4 4 .734 0 4 0 4 4 0-4 3.266-4 4-4-4 0-4-3.266-4-4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      );
    case "layout_responsive":
      return (
        <svg fill="none" aria-hidden="true" className={className}>
          <path
            d="M9 41h30a4 4 0 0 0 4-4V11a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4Z"
            fill="currentColor"
            fillOpacity="0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M15 7v34M17 13h-2M43 13h-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M21 29V15a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M25 31v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2h-2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </svg>
      );
    case "sizing":
      return <Sizing className={className} />;
    case "colors":
      return (
        <svg fill="none" aria-hidden="true" className={className}>
          <path
            d="M17.687 42.22 40.57 29.219a4 4 0 0 0 1.554-5.36L39 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M27.477 7.121a1 1 0 1 0-.954 1.758l.954-1.758Zm5.209 3.966.477-.879-.477.88Zm1.555 5.515-.866-.5-.003.006.87.494ZM26.523 8.88l5.686 3.087.954-1.758-5.686-3.087-.954 1.758Zm6.849 7.23-12.616 22.21 1.738.987 12.617-22.21-1.74-.988Zm-1.163-4.143a3 3 0 0 1 1.166 4.136l1.732 1a5 5 0 0 0-1.944-6.894l-.954 1.758Z"
            fill="currentColor"
          ></path>
          <path
            d="M5 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v25a9 9 0 1 1-18 0V9Z"
            fill="currentColor"
            fillOpacity="0"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
          <circle
            cx="14"
            cy="34"
            r="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></circle>
        </svg>
      );
    case "typography":
      return (
        <svg fill="none" aria-hidden="true" className={className}>
          <path
            d="M5 13a8 8 0 0 1 8-8h22a8 8 0 0 1 8 8v22a8 8 0 0 1-8 8H13a8 8 0 0 1-8-8V13Z"
            fill="currentColor"
            fillOpacity="0"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
          <path
            d="M15.5 25h9M13 31l5.145-12.748c.674-1.67 3.036-1.67 3.71 0L27 31"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M31 13s2 0 2 1.833v18.334C33 35 31 35 31 35M35 13s-2 0-2 1.833v18.334C33 35 35 35 35 35M31 24h4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </svg>
      );
    case "shadows":
      return (
        <svg fill="none" aria-hidden="true" className={className}>
          <path
            d="M24 43c10.493 0 19-8.507 19-19S34.493 5 24 5m-4 .422C11.427 7.259 5 14.879 5 24c0 9.121 6.427 16.741 15 18.578"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M24 42.819V5.181c0-.1.081-.181.181-.181C34.574 5 43 13.607 43 24c0 10.394-8.426 19-18.819 19a.181.181 0 0 1-.181-.181Z"
            fill="currentColor"
            fillOpacity="0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          ></path>
          <path
            d="M28 10h3M28 14h7M28 18h10M28 22h11M28 26h10M28 30h9M28 34h7M28 38h3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </svg>
      );
  }
};
