import * as Sections from "_models";
import { ShopifySection } from "_models/_shopify";
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

function getSettingsType(type) {
  switch() {
      case : {

          break;
      }
      case :{

          break;
      }
      default:{

      }
  }
}

export const generateSectionsTypes = () => {
  for (const key in Sections) {
    const section = Sections[key] as ShopifySection;
    const typeContent = `
export type ${key}Types = {
  type: "${section.name}";
  id: string;
  blocks: []${section.blocks?.length ? ` | ${key}Blocks[]` : ""};
  settings: {
    ${section.settings
      .filter((s) => s.type !== "header" && s.type !== "paragraph")
      .map((setting) => `${setting.id}: ${getSettingsType(setting.type)}`)
      .join("\n    ")}
  };
}
`;

    console.log("asd");
    fs.writeFileSync(`_models/${key}Types.ts`, typeContent);
  }
};
