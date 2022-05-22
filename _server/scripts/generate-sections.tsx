import * as Sections from "_models";
import { ShopifySection, ShopifySettingsInput } from "_models/_shopify";
import * as fs from "fs";

export const generateSections = () => {
  for (const section in Sections) {
    const content = `{% include "section-content", type: "${Sections[section].name}" %}

{% schema %}
${JSON.stringify(Sections[section], undefined, 2)}
{% endschema %}
`;

    fs.writeFileSync(`_shopify-theme/sections/${section}.liquid`, content);
  }
  generateSectionsTypes();
};

function getSettingsType(setting: ShopifySettingsInput) {
  switch (setting.type) {
    case "article":
      return "undefined | string";
    case "checkbox":
      return "boolean";
    case "number":
      return "undefined | number";
    case "radio":
      return "string";
    case "range":
      return "number";
    case "select":
      return "string";
    case "text":
      return "undefined | string";
    case "textarea":
      return "undefined | string";
    case "blog":
      return "undefined | string";
    case "collection":
      return "undefined | string";
    case "collection_list":
      return "undefined | string";
    case "color":
      return "undefined | string";
    case "color_background":
      return "undefined | string";
    case "font_picker":
      return "string";
    case "html":
      return "undefined | string";
    case "image_picker":
      return "undefined | string";
    case "link_list":
      return "undefined | string";
    case "liquid":
      return "undefined | string";
    case "page":
      return "undefined | string";
    case "product":
      return "undefined | string";
    case "product_list":
      return "undefined | string";
    case "richtext":
      return "undefined | string";
    case "url":
      return "undefined | string";
    case "video_url":
      return "undefined | string";
  }
}

export const generateSectionsTypes = () => {
  for (const key in Sections) {
    const section = Sections[key] as ShopifySection;

    const typeContent = `export type ${key}Types = {
  blocks: []${section.blocks?.length ? ` | ${key}Blocks[]` : ""};
  id: string;
  settings: {
    ${(
      section.settings?.filter(
        (s) => s.type !== "header" && s.type !== "paragraph"
      ) as ShopifySettingsInput[]
    )
      .sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
      .map(
        (setting) =>
          `/** Type: ${setting.type} */\n    ` +
          `${/[^\w_]/gi.test(setting.id) ? `"${setting.id}"` : `${setting.id}`}: ${getSettingsType(
            setting
          )};`
      )
      .join("\n    ")}
  };
  type: "${section.name}";
};

${
  section.blocks?.length
    ? `type ${key}Blocks =
${section.blocks
  .map((block) => {
    return `  | {
      type: "${block.type}";
      settings?: {
        ${(
          block.settings?.filter(
            (s) => s.type !== "header" && s.type !== "paragraph"
          ) as ShopifySettingsInput[]
        )
          .sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
          .map(
            (setting) =>
              `/** Type: ${setting.type} */\n        ` +
              `${
                /[^\w_]/gi.test(setting.id) ? `"${setting.id}"` : `${setting.id}`
              }: ${getSettingsType(setting)};`
          )
          .join("\n        ")}
      };
    }`;
  })
  .join("\n")};`
    : ""
}
`;

    fs.writeFileSync(`_models/.${key}Types.ts`, typeContent);
  }
};
