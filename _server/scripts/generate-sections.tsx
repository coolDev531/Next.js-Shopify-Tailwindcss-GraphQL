import * as Sections from "_sections";
import * as fs from "fs";
import { ShopifySection, ShopifySettingsInput } from "types/shopify";
import { capitalize } from "utils/capitalize";
import { toKebabCase } from "utils/to-kebab-case";

const sectionToLiquid = (section, key, shopifyThemeString) => {
  let sectionType = "_section-content";
  const regexp = new RegExp(`\\{%\\s+section\\s+["']${key}["']`, "gi");

  if (regexp.test(shopifyThemeString)) {
    sectionType = "_section-global-content";
  }

  return `{% include "${sectionType}", type: "${toKebabCase(key)}" %}
{% include "section_${toKebabCase(key)}" %}
  
{% schema %}
${JSON.stringify(section, undefined, 2)}
{% endschema %} 
`;
};

export const generateSections = () => {
  const shopifyThemeString = fs.readFileSync("_shopify-theme/layout/theme.liquid", {
    encoding: "utf-8",
  });

  for (const key in Sections) {
    const section = Sections[key];
    const content = sectionToLiquid(section, key, shopifyThemeString);

    if (!fs.existsSync(`_shopify-theme/snippets/section_${toKebabCase(key)}.liquid`)) {
      fs.writeFileSync(`_shopify-theme/snippets/section_${toKebabCase(key)}.liquid`, `<div></div>`);
    }

    if (!fs.existsSync(`_shopify-theme/sections/${toKebabCase(key)}.liquid`)) {
      fs.writeFileSync(`_shopify-theme/sections/${toKebabCase(key)}.liquid`, content);
      continue;
    }

    const contentVerification = fs.readFileSync(
      `_shopify-theme/sections/${toKebabCase(key)}.liquid`,
      { encoding: "utf-8" }
    );
    if (contentVerification !== content) {
      fs.writeFileSync(`_shopify-theme/sections/${toKebabCase(key)}.liquid`, content);
    }
  }
};

function getSettingsType(setting: ShopifySettingsInput) {
  switch (setting.type) {
    case "article":
      return "?: _Article";
    case "checkbox":
      return ": boolean";
    case "number":
      return "?: number";
    case "radio":
      return `: ${setting.options.map(({ value }) => `"${value}"`).join(" | ")}`;
    case "range":
      return ": number";
    case "select":
      return `: ${setting.options.map(({ value }) => `"${value}"`).join(" | ")}`;
    case "text":
      return "?: string";
    case "textarea":
      return "?: string";
    case "blog":
      return "?: _Blog";
    case "collection":
      return "?: _Collection";
    case "collection_list":
      return "?: _Collection[]";
    case "color":
      return "?: _Color";
    case "color_background":
      return "?: string";
    case "font_picker":
      return ": _Font";
    case "html":
      return "?: string";
    case "image_picker":
      return "?: _Image";
    case "link_list":
      return "?: _LinkList";
    case "liquid":
      return "?: string";
    case "page":
      return "?: _Page";
    case "product":
      return "?: _Product & { content: string; description: string }";
    case "product_list":
      return "?: (_Product & { content: string; description: string })[]";
    case "richtext":
      return "?: `<p${string}</p>`";
    case "url":
      return "?: string";
    case "video_url":
      return `?: ("youtube" | "vimeo")[]`;
    case "font":
      return "?: string";
  }
}

const getImports = (sections: { [T: string]: ShopifySection }) => {
  const localTypes = [];
  const apiTypes = [];

  for (const key in sections) {
    const section = sections[key];
    const analyseSetting = (setting) => {
      if (setting.type === "article") {
        if (apiTypes.includes("_Article")) return;
        apiTypes.push("_Article");
      }
      if (setting.type === "blog") {
        if (apiTypes.includes("_Blog")) return;
        apiTypes.push("_Blog");
      }
      if (setting.type === "collection") {
        if (apiTypes.includes("_Collection")) return;
        apiTypes.push("_Collection");
      }
      if (setting.type === "collection_list") {
        if (apiTypes.includes("_Collection")) return;
        apiTypes.push("_Collection");
      }
      if (setting.type === "color") {
        if (localTypes.includes("_Color")) return;
        localTypes.push("_Color");
      }
      if (setting.type === "image_picker") {
        if (apiTypes.includes("_Image")) return;
        apiTypes.push("_Image");
      }
      if (setting.type === "font_picker") {
        if (localTypes.includes("_Font")) return;
        localTypes.push("_Font");
      }
      if (setting.type === "link_list") {
        if (localTypes.includes("_LinkList")) return;
        localTypes.push("_LinkList");
      }
      if (setting.type === "page") {
        if (apiTypes.includes("_Page")) return;
        apiTypes.push("_Page");
      }
      if (setting.type === "product") {
        if (apiTypes.includes("_Product")) return;
        apiTypes.push("_Product");
      }
      if (setting.type === "product_list") {
        if (apiTypes.includes("_Product")) return;
        apiTypes.push("_Product");
      }
    };

    section.settings.forEach(analyseSetting);
    section.blocks?.forEach((block) => {
      block.settings?.forEach(analyseSetting);
    });
  }

  if (localTypes.length || apiTypes.length) {
    return `${
      (localTypes.length ? `import { ${localTypes.join(", ")} } from "types/shopify";\n` : "") +
      (apiTypes.length
        ? `import { ${apiTypes.join(
            ", "
          )} } from "shopify-typed-node-api/dist/clients/rest/dataTypes";\n`
        : "")
    }\n`;
  }
  return ``;
};

const sectionToTypes = (section, key) => {
  const filename = toKebabCase(section.name);
  const arr = [];
  const settings: ShopifySettingsInput[] = section.settings
    ?.filter((s) => s.type !== "header" && s.type !== "paragraph")
    .sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

  arr.push(`export type ${capitalize(key)}Section = {`);
  if (section.blocks?.length) {
    arr.push(`  blocks: ${capitalize(key)}Blocks[];`);
  }
  arr.push(`  id: string;`);
  if (settings?.length) {
    arr.push(`  settings: {`);
    arr.push(
      settings
        .map(
          (setting) =>
            `    /** Input type: ${setting.type} */\n    ` +
            `${/[^\w_]/gi.test(setting.id) ? `"${setting.id}"` : `${setting.id}`}${getSettingsType(
              setting
            )};`
        )
        .sort((a, b) => {
          const aX = a.split("\n")[1];
          const bX = b.split("\n")[1];
          if (aX.includes("?") && !bX.includes("?")) {
            return 1;
          } else if (!aX.includes("?") && bX.includes("?")) {
            return -1;
          } else if (aX > bX) {
            return 1;
          } else if (aX < bX) {
            return -1;
          } else {
            return 0;
          }
        })
        .join("\n")
    );
    arr.push(`  };`);
  }
  arr.push(`  type: "${filename}";`);
  arr.push(`};`);

  if (section.blocks?.length && section.blocks.length === 1) {
    arr.push("");
    arr.push(`export type ${capitalize(key)}Blocks = {`);

    section.blocks.forEach((block) => {
      const blockSettings: ShopifySettingsInput[] = block.settings
        ?.filter((s) => s.type !== "header" && s.type !== "paragraph")
        .sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

      arr.push("  id: string;");

      if (blockSettings?.length) {
        arr.push(`  settings: {`);
        arr.push(
          blockSettings
            .map(
              (setting) =>
                `    /** Input type: ${setting.type} */\n    ` +
                `${
                  /[^\w_]/gi.test(setting.id) ? `"${setting.id}"` : `${setting.id}`
                }${getSettingsType(setting)};`
            )
            .sort((a, b) => {
              const aX = a.split("\n")[1];
              const bX = b.split("\n")[1];
              if (aX.includes("?") && !bX.includes("?")) {
                return 1;
              } else if (!aX.includes("?") && bX.includes("?")) {
                return -1;
              } else if (aX > bX) {
                return 1;
              } else if (aX < bX) {
                return -1;
              } else {
                return 0;
              }
            })
            .join("\n")
        );
        arr.push(`  };`);
      }

      arr.push(`  type: "${block.type}";`);
      arr.push(`};`);
    });
  }

  if (section.blocks?.length && section.blocks.length > 1) {
    arr.push("");
    arr.push(`export type ${capitalize(key)}Blocks =`);

    section.blocks.forEach((block, i) => {
      const blockSettings: ShopifySettingsInput[] = block.settings
        ?.filter((s) => s.type !== "header" && s.type !== "paragraph")
        .sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

      arr.push("  | {");
      arr.push("      id: string;");

      if (blockSettings?.length) {
        arr.push(`      settings: {`);
        arr.push(
          blockSettings
            .map(
              (setting) =>
                `        /** Input type: ${setting.type} */\n        ` +
                `${
                  /[^\w_]/gi.test(setting.id) ? `"${setting.id}"` : `${setting.id}`
                }${getSettingsType(setting)};`
            )
            .sort((a, b) => {
              const aX = a.split("\n")[1];
              const bX = b.split("\n")[1];
              if (aX.includes("?") && !bX.includes("?")) {
                return 1;
              } else if (!aX.includes("?") && bX.includes("?")) {
                return -1;
              } else if (aX > bX) {
                return 1;
              } else if (aX < bX) {
                return -1;
              } else {
                return 0;
              }
            })
            .join("\n")
        );
        arr.push(`      };`);
      }

      arr.push(`      type: "${block.type}";`);
      if (section.blocks.length - 1 === i) {
        arr.push(`    };`);
      } else {
        arr.push(`    }`);
      }
    });
  }
  arr.push("");
  return arr.join("\n");
};

export const generateSectionsTypes = () => {
  const imports = getImports(Sections);
  let sectionUnionType = "export type Sections =";
  let typeContent = "";
  for (const key in Sections) {
    const section = Sections[key] as ShopifySection;

    typeContent += `${sectionToTypes(section, key)}\n`;
    sectionUnionType += `\n  | ${capitalize(key)}Section`;
  }

  if (!typeContent) return;

  const finalContent = `${imports + typeContent + sectionUnionType};\n`;
  if (!fs.existsSync(`@types/sections.ts`)) {
    fs.writeFileSync(`@types/sections.ts`, finalContent);
    return;
  }

  const indexContentVerification = fs.readFileSync(`@types/sections.ts`, {
    encoding: "utf-8",
  });

  if (indexContentVerification !== finalContent) {
    fs.writeFileSync(`@types/sections.ts`, finalContent);
  }
};
