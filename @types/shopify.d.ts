type Header = {
  content: string;
  type: "header";
};
type Paragraph = {
  content: string;
  type: "paragraph";
};
type Checkbox = {
  id: string;
  label: string;
  type: "checkbox";
  default?: boolean;
  info?: string;
};
type Number = {
  id: string;
  label: string;
  type: "number";
  default?: number;
  info?: string;
  placeholder?: number;
};
type Radio = {
  id: string;
  label: string;
  options: { label: string; value: string }[];
  type: "radio";
  default?: string;
  info?: string;
};
type Range = {
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
type Select = {
  id: string;
  label: string;
  options: { label: string; value: string }[];
  type: "select";
  default?: string;
  info?: string;
};
type Text = {
  id: string;
  label: string;
  type: "text";
  default?: string;
  info?: string;
  placeholder?: string;
};
type Textarea = {
  id: string;
  label: string;
  type: "textarea";
  default?: string;
  info?: string;
  placeholder?: string;
};
type Article = {
  id: string;
  label: string;
  type: "article";
  info?: string;
};
type Blog = {
  id: string;
  label: string;
  type: "blog";
  info?: string;
};
type Collection = {
  id: string;
  label: string;
  type: "collection";
  info?: string;
};
type Collection_list = {
  id: string;
  label: string;
  type: "collection_list";
  info?: string;
  limit?: number;
};
type Color = {
  id: string;
  label: string;
  type: "color";
  default?: string;
  info?: string;
};
type Color_background = {
  id: string;
  label: string;
  type: "color_background";
  default?: string;
  info?: string;
};
type Font_picker = {
  default: string;
  id: string;
  label: string;
  type: "font_picker";
  info?: string;
};
type Html = {
  id: string;
  label: string;
  type: "html";
  default?: string;
  info?: string;
  placeholder?: string;
};
type Image_picker = {
  id: string;
  label: string;
  type: "image_picker";
  info?: string;
};
type Link_list = {
  id: string;
  label: string;
  type: "link_list";
  default?: "main-menu" | "footer" | string;
  info?: string;
};
type Liquid = {
  id: string;
  label: string;
  type: "liquid";
  info?: string;
};
type Page = {
  id: string;
  label: string;
  type: "page";
  info?: string;
};
type Product = {
  id: string;
  label: string;
  type: "product";
  info?: string;
};
type Product_list = {
  id: string;
  label: string;
  type: "product_list";
  info?: string;
  limit?: number;
};
type Richtext = {
  id: string;
  label: string;
  type: "richtext";
  default?: `<p${string}</p>`;
  info?: string;
};
type Url = {
  id: string;
  label: string;
  type: "url";
  default?: string;
  info?: string;
};
type Video_url = {
  accept: ("youtube" | "vimeo")[];
  id: string;
  label: string;
  type: "video_url";
  info?: string;
  placeholder?: string;
};

type SettingsInput =
  | Header
  | Paragraph
  | Checkbox
  | Number
  | Radio
  | Range
  | Select
  | Text
  | Textarea
  | Article
  | Blog
  | Collection
  | Collection_list
  | Color
  | Color_background
  | Font_picker
  | Html
  | Image_picker
  | Link_list
  | Liquid
  | Page
  | Product
  | Product_list
  | Richtext
  | Url
  | Video_url;

export declare namespace Shopify {
  type SectionDefault = {
    blocks?: SectionBlock[];
    settings?: SectionSetting[];
  };
  type SectionPreset = {
    name: string;
    blocks?: SectionBlock[];
    settings?: SectionSetting[];
  };

  type SectionBlock = {
    name: string;
    type: string;
    limit?: number;
    settings?: SettingsInput[];
  };

  type Section = {
    name: string;
    blocks?: SectionBlock[];
    class?: string;
    default?: SectionDefault;
    limit?: number;
    max_blocks?: number;
    presets?: SectionPreset[];
    settings?: SettingsInput[];
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

  type Settings = (
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
        settings: SettingsInput[];
      }
  )[];
}
