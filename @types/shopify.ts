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
type ShopifySelect = {
  id: string;
  label: string;
  options: { label: string; value: string }[];
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

type ShopifySectionDefault = {
  blocks?: ShopifySectionBlock[];
  settings?: (ShopifySettingsInput | ShopifyHeader | ShopifyParagraph)[];
};
type ShopifySectionPreset = {
  name: string;
  blocks?: ShopifySectionBlock[];
  settings?: (ShopifySettingsInput | ShopifyHeader | ShopifyParagraph)[];
};

type ShopifySectionBlock = {
  name: string;
  type: string;
  limit?: number;
  settings?: (ShopifySettingsInput | ShopifyHeader | ShopifyParagraph)[];
};

export type ShopifySection = {
  name: string;
  blocks?: ShopifySectionBlock[];
  class?: string;
  default?: ShopifySectionDefault;
  limit?: number;
  max_blocks?: number;
  presets?: ShopifySectionPreset[];
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

export type _Color = {};

export type _LinkList = {};
export type _Font = {};
