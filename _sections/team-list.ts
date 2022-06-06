import { heading } from "_sections/heading";
import { ShopifySection } from "types/shopify";
import { TeamListSection } from "types/sections";

export const teamList: ShopifySection<TeamListSection> = {
  name: "Team list",
  settings: [],
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
