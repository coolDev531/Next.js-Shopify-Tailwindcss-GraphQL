import { _Blog, _Collection, _Page, _Product } from "shopify-typed-node-api/dist/clients/rest/request_types";

type ShopifyHeader = {
  content: string;
  type: "header";
  info?: string;
};
type ShopifyParagraph = {
  content: string;
  type: "paragraph";
  info?: string;
};
type ShopifyCheckbox = {
  id: string;
  label: string;
  type: "checkbox";
  default?: boolean;
  info?: string;
};
type ShopifyNumber = {
  id: string;
  label: string;
  type: "number";
  default?: number;
  info?: string;
  placeholder?: number;
};
type ShopifyRadio = {
  id: string;
  label: string;
  options: { label: string; value: string }[];
  type: "radio";
  default?: string;
  info?: string;
};
type ShopifyRange = {
  default: number;
  id: string;
  label: string;
  max: number;
  min: number;
  step: number;
  type: "range";
  info?: string;
  unit?: string;
};
export type ShopifySelect = {
  id: string;
  label: string;
  options: { label: string; value: string; group?: string }[];
  type: "select";
  default?: string;
  info?: string;
};
type ShopifyText = {
  id: string;
  label: string;
  type: "text";
  default?: string;
  info?: string;
  placeholder?: string;
};
type ShopifyTextarea = {
  id: string;
  label: string;
  type: "textarea";
  default?: string;
  info?: string;
  placeholder?: string;
};
type ShopifyArticle = {
  id: string;
  label: string;
  type: "article";
  info?: string;
};
type ShopifyBlog = {
  id: string;
  label: string;
  type: "blog";
  info?: string;
};
type ShopifyCollection = {
  id: string;
  label: string;
  type: "collection";
  info?: string;
};
type ShopifyCollection_list = {
  id: string;
  label: string;
  type: "collection_list";
  info?: string;
  limit?: number;
};
type ShopifyColor = {
  id: string;
  label: string;
  type: "color";
  default?: string;
  info?: string;
};
type ShopifyColor_background = {
  id: string;
  label: string;
  type: "color_background";
  default?: string;
  info?: string;
};
type ShopifyFont_picker = {
  default: string;
  id: string;
  label: string;
  type: "font_picker";
  info?: string;
};
type ShopifyFont = {
  id: string;
  label: string;
  type: "font";
  default?: string;
  info?: string;
};
type ShopifyHtml = {
  id: string;
  label: string;
  type: "html";
  default?: string;
  info?: string;
  placeholder?: string;
};
type ShopifyImage_picker = {
  id: string;
  label: string;
  type: "image_picker";
  info?: string;
};
type ShopifyLink_list = {
  id: string;
  label: string;
  type: "link_list";
  default?: "main-menu" | "footer" | string;
  info?: string;
};
type ShopifyLiquid = {
  id: string;
  label: string;
  type: "liquid";
  info?: string;
};
type ShopifyPage = {
  id: string;
  label: string;
  type: "page";
  info?: string;
};
type ShopifyProduct = {
  id: string;
  label: string;
  type: "product";
  info?: string;
};
type ShopifyProduct_list = {
  id: string;
  label: string;
  type: "product_list";
  info?: string;
  limit?: number;
};
type ShopifyRichtext = {
  id: string;
  label: string;
  type: "richtext";
  default?: `<p${string}</p>`;
  info?: string;
};
type ShopifyUrl = {
  id: string;
  label: string;
  type: "url";
  default?: string;
  info?: string;
};
type ShopifyVideo_url = {
  accept: ("youtube" | "vimeo")[];
  id: string;
  label: string;
  type: "video_url";
  info?: string;
  placeholder?: string;
};

export type ShopifySettingsInput =
  | ShopifyCheckbox
  | ShopifyNumber
  | ShopifyRadio
  | ShopifyRange
  | ShopifySelect
  | ShopifyText
  | ShopifyTextarea
  | ShopifyArticle
  | ShopifyBlog
  | ShopifyCollection
  | ShopifyCollection_list
  | ShopifyColor
  | ShopifyColor_background
  | ShopifyFont_picker
  | ShopifyFont
  | ShopifyHtml
  | ShopifyImage_picker
  | ShopifyLink_list
  | ShopifyLiquid
  | ShopifyPage
  | ShopifyProduct
  | ShopifyProduct_list
  | ShopifyRichtext
  | ShopifyUrl
  | ShopifyVideo_url;

type ShopifySectionDefault<T = never> = {
  blocks?: T extends never
    ? {
        settings: { [T: string]: string | number | boolean };
        type: "step";
      }[]
    : T extends { blocks }
    ? Partial<Omit<T["blocks"][number], "id">>[]
    : {
        settings: { [T: string]: string | number | boolean };
        type: "step";
      }[];
  settings?: T extends never
    ? { [T: string]: string | number | boolean }
    : T extends { settings }
    ? T["settings"]
    : { [T: string]: string | number | boolean };
};

type ShopifySectionPreset<T = never> = {
  name: string;
  blocks?: T extends never
    ? {
        settings: { [T: string]: string | number | boolean };
        type: "step";
      }[]
    : T extends { blocks }
    ? Partial<Omit<T["blocks"][number], "id">>[]
    : {
        settings: { [T: string]: string | number | boolean };
        type: "step";
      }[];
  settings?: T extends never
    ? { [T: string]: string | number | boolean }
    : T extends { settings }
    ? T["settings"]
    : { [T: string]: string | number | boolean };
};

type ShopifySectionBlock = {
  name: string;
  type: string;
  limit?: number;
  settings?: (ShopifySettingsInput | ShopifyHeader | ShopifyParagraph)[];
};

export type ShopifySection<T = never> = {
  name: string;
  blocks?: ShopifySectionBlock[];
  class?: string;
  default?: ShopifySectionDefault<T>;
  limit?: number;
  max_blocks?: number;
  presets?: ShopifySectionPreset<T>[];
  settings?: (ShopifySettingsInput | ShopifyHeader | ShopifyParagraph)[];
  tag?: "article" | "aside" | "div" | "footer" | "header" | "section";
  templates?:
    | "404"
    | "article"
    | "blog"
    | "cart"
    | "collection"
    | "list-collections"
    | "customers/account"
    | "customers/activate_account"
    | "customers/addresses"
    | "customers/login"
    | "customers/order"
    | "customers/register"
    | "customers/reset_password"
    | "gift_card"
    | "index"
    | "page"
    | "password"
    | "product"
    | "search";
};

export type ShopifySettings = (
  | ({
      name: "theme_info";
      theme_author: string;
      theme_documentation_url: string;
      theme_name: string;

      theme_version: string;
    } & (
      | {
          theme_support_email: string;
        }
      | {
          theme_support_url: string;
        }
    ))
  | {
      name: string;
      settings: (ShopifySettingsInput | ShopifyHeader | ShopifyParagraph)[];
    }
)[];

/* TODO complete manual types*/
export type _Color = {
  alpha: number;
  blue: number;
  green: number;
  hex: string;
  hue: number;
  lightness: number;
  red: number;
  saturation: number;
};

export type _LinkList = {
  handle: string;
  levels: number;
  links: Links[];
  title: string;
};

export type _Font = {
  baseline_ratio: number;
  fallback_families: string;
  family: string;
  style: string;
  variants: Omit<_Font, "variants">[];
  weight: string;
  system?: any;
};

type Links = {
  active: boolean;
  child_active: boolean;
  child_current: boolean;
  current: boolean;
  levels: number;
  title: string;
  type: string;
  url: string;
  links?: Links[];
  object?: _Product | _Collection | _Page | _Blog | null;
};

export type _LinkLists = _LinkList[];
