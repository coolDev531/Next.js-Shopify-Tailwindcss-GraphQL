import * as Sections from "_sections";
import * as fs from "fs";
import { ShopifySection, ShopifySettingsInput } from "types/shopify";
import { capitalize } from "utils/capitalize";
import { toKebabCase } from "utils/to-kebab-case";

export const generateSections = () => {
  const shopifyThemeString = fs.readFileSync("_shopify-theme/layout/theme.liquid", {
    encoding: "utf-8",
  });

  for (const section in Sections) {
    let sectionType = "_section-content";
    const regexp = new RegExp(`\\{%\\s+section\\s+["']${section}["']`, "gi");

    if (regexp.test(shopifyThemeString)) {
      sectionType = "_section-global-content";
    }

    const content = `{% include "${sectionType}", type: "${toKebabCase(section)}" %}
{% include "section_${toKebabCase(section)}" %}
 
{% schema %}
${JSON.stringify(Sections[section], undefined, 2)}
{% endschema %} 
`;

    if (!fs.existsSync(`_shopify-theme/snippets/section_${toKebabCase(section)}.liquid`)) {
      fs.writeFileSync(
        `_shopify-theme/snippets/section_${toKebabCase(section)}.liquid`,
        `<div></div>`
      );
    }

    if (!fs.existsSync(`_shopify-theme/sections/${toKebabCase(section)}.liquid`)) {
      fs.writeFileSync(`_shopify-theme/sections/${toKebabCase(section)}.liquid`, content);
      continue;
    }

    const contentVerification = fs.readFileSync(
      `_shopify-theme/sections/${toKebabCase(section)}.liquid`,
      { encoding: "utf-8" }
    );
    if (contentVerification !== content) {
      fs.writeFileSync(`_shopify-theme/sections/${toKebabCase(section)}.liquid`, content);
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
      return "?: _Product";
    case "product_list":
      return "?: _Product[]";
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

function getImports(section: ShopifySection) {
  const localTypes = [];
  const apiTypes = [];

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
}

export const generateSectionsTypes = () => {
  let indexContent = "";
  let sectionUnionType = "export type Sections =";
  const indexExports = [];
  for (const key in Sections) {
    const section = Sections[key] as ShopifySection;
    const filename = toKebabCase(section.name);

    const typeContent = `${getImports(section)}export type ${capitalize(key)}Section = {
  ${section.blocks?.length ? `blocks: ${key}Blocks[];\n` : ""}  id: string;
  settings: {
    ${(
      section.settings?.filter(
        (s) => s.type !== "header" && s.type !== "paragraph"
      ) as ShopifySettingsInput[]
    )
      .sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
      .map(
        (setting) =>
          `/** Input type: ${setting.type} */\n    ` +
          `${/[^\w_]/gi.test(setting.id) ? `"${setting.id}"` : `${setting.id}`}${getSettingsType(
            setting
          )};`
      )
      .join("\n    ")}
  };
  type: "${filename}"; 
};${
      section.blocks?.length
        ? `\ntype ${key}Blocks =
${section.blocks
  .map((block) => {
    return `  | {
      id: string;      
      settings: {
        ${(
          block.settings?.filter(
            (s) => s.type !== "header" && s.type !== "paragraph"
          ) as ShopifySettingsInput[]
        )
          .sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
          .map(
            (setting) =>
              `/** Input type: ${setting.type} */\n        ` +
              `${
                /[^\w_]/gi.test(setting.id) ? `"${setting.id}"` : `${setting.id}`
              }${getSettingsType(setting)};`
          )
          .join("\n        ")}
      };
      type: "${block.type}";
    }`;
  })
  .join("\n")};`
        : ""
    }
`;

    indexContent += `import { ${capitalize(key)}Section } from "types/sections/${filename}";\n`;
    sectionUnionType += `\n  | ${capitalize(key)}Section`;

    indexExports.push(`${capitalize(key)}Section`);
    if (!fs.existsSync(`@types/sections/${filename}.ts`)) {
      fs.writeFileSync(`@types/sections/${filename}.ts`, typeContent);
      continue;
    }

    const contentVerification = fs.readFileSync(`@types/sections/${filename}.ts`, {
      encoding: "utf-8",
    });

    if (contentVerification !== typeContent) {
      fs.writeFileSync(`@types/sections/${filename}.ts`, typeContent);
    }
  }

  if (!indexContent) return;

  indexContent += "\n";
  indexContent += sectionUnionType;
  indexContent += ";\n";
  indexContent += `\nexport type { ${indexExports.join(", ")} };\n`;

  if (!fs.existsSync(`@types/sections/index.ts`)) {
    fs.writeFileSync(`@types/sections/index.ts`, indexContent);
    return;
  }

  const indexContentVerification = fs.readFileSync(`@types/sections/index.ts`, {
    encoding: "utf-8",
  });

  if (indexContentVerification !== indexContent) {
    fs.writeFileSync(`@types/sections/index.ts`, indexContent);
  }
};
