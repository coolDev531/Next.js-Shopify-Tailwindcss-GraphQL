import { spacing } from "shopify/utils/spacing";
import { heading } from "./heading";
import { TeamListSection } from "../.shopify-cms/types/sections";
import { ShopifySection } from "../.shopify-cms/types/shopify";

export const teamList: ShopifySection<TeamListSection> = {
  name: "Team list",
  settings: [...spacing],
  blocks: [
    {
      type: "heading",
      name: "Heading",
      settings: heading.settings,
    },
    {
      type: "team_member",
      name: "Team Member",
      settings: [
        {
          type: "image_picker",
          id: "image",
          label: "Image",
        },
        {
          type: "text",
          id: "name",
          label: "Name",
        },
        {
          type: "text",
          id: "job_title",
          label: "Job Title",
        },
      ],
    },
  ],

  presets: [
    {
      name: "Team list",
    },
  ],
};
