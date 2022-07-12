import { TabsProcessStepSection } from "types/sections";
import { ShopifySection } from "types/shopify";

export const tabsProcessStep: ShopifySection<TabsProcessStepSection> = {
  name: "Tabs process step",
  settings: [
    {
      type: "header",
      content: "Content",
    },
    {
      type: "text",
      id: "pre_title",
      label: "Pre header",
    },

    {
      type: "text",
      id: "title",
      label: "Title",
    },
    {
      type: "richtext",
      id: "paragraph",
      label: "Paragraph",
    },
  ],
  blocks: [
    {
      type: "step",
      name: "Process Step",
      settings: [
        {
          type: "header",
          content: "Tab Selector",
        },
        {
          type: "text",
          id: "tab_title",
          label: "title",
        },
        {
          type: "textarea",
          id: "tab_paragraph",
          label: "Description",
        },
        {
          type: "header",
          content: "Content",
        },
        {
          type: "text",
          id: "title",
          label: "Title",
        },
        {
          type: "richtext",
          id: "paragraph",
          label: "Paragraph",
        },
      ],
    },
  ],

  presets: [
    {
      name: "Tabs process steps",
      settings: {
        pre_title: "Developer experience to love",
        title: "Develop with an open, thought‑out API",
        paragraph:
          "<p>One of our main goals is to provide the best possible developer experience. Radix Primitives provides a fully-typed API. All components share a similar API, creating a consistent and predictable experience.</p>",
      },
      blocks: [
        {
          type: "step",
          settings: {
            tab_title: "Step 1 - Start",
            tab_paragraph: "No need to override styles, no specificity wars.",
            title: "Incremental adoption",
            paragraph:
              "<p>Each component is its own independently versioned package, so new components can be added alongside your existing code. No need to disrupt feature work with a huge rewrite⁠—you can start small and add more components one by one.</p>",
          },
        },
        {
          type: "step",
          settings: {
            tab_title: "Step 2 - Move on",
            tab_paragraph: "No need to override styles, no specificity wars.",
            title: "Incremental adoption",
            paragraph:
              "<p>Each component is its own independently versioned package, so new components can be added alongside your existing code. No need to disrupt feature work with a huge rewrite⁠—you can start small and add more components one by one.</p>",
          },
        },
        {
          type: "step",
          settings: {
            tab_title: "Step 3 - another one",
            tab_paragraph: "No need to override styles, no specificity wars.",
            title: "Incremental adoption",
            paragraph:
              "<p>Each component is its own independently versioned package, so new components can be added alongside your existing code. No need to disrupt feature work with a huge rewrite⁠—you can start small and add more components one by one.</p>",
          },
        },
        {
          type: "step",
          settings: {
            tab_title: "Step 4 - Almost done",
            tab_paragraph: "No need to override styles, no specificity wars.",
            title: "Incremental adoption",
            paragraph:
              "<p>Each component is its own independently versioned package, so new components can be added alongside your existing code. No need to disrupt feature work with a huge rewrite⁠—you can start small and add more components one by one.</p>",
          },
        },
        {
          type: "step",
          settings: {
            tab_title: "Step 1 - The end",
            tab_paragraph: "No need to override styles, no specificity wars.",
            title: "Incremental adoption",
            paragraph:
              "<p>Each component is its own independently versioned package, so new components can be added alongside your existing code. No need to disrupt feature work with a huge rewrite⁠—you can start small and add more components one by one.</p>",
          },
        },
      ],
    },
  ],
};
