import { spacing } from "shopify/utils/spacing";
import { ContactSection } from "../.shopify-cms/types/sections";
import { ShopifySection } from "../.shopify-cms/types/shopify";

const autoCompleteOptions = [
  "off",
  "name",
  "honorific-prefix",
  "given-name",
  "additional-name",
  "family-name",
  "honorific-suffix",
  "nickname",
  "email",
  "username",
  "new-password",
  "current-password",
  "one-time-code",
  "organization-title",
  "organization",
  "street-address",
  "address-line1, address-line2, address-line3",
  "address-level4",
  "address-level3",
  "address-level2",
  "address-level1",
  "country",
  "country-name",
  "postal-code",
  "cc-name",
  "cc-given-name",
  "cc-additional-name",
  "cc-family-name",
  "cc-number",
  "cc-exp",
  "cc-exp-month",
  "cc-exp-year",
  "cc-csc",
  "cc-type",
  "transaction-currency",
  "transaction-amount",
  "language",
  "bday",
  "bday-day",
  "bday-month",
  "bday-year",
  "sex",
  "tel",
  "tel-country-code",
  "tel-national",
  "tel-area-code",
  "tel-local",
  "tel-extension",
  "impp",
  "url",
  "photo",
];

export const contact: ShopifySection<ContactSection> = {
  name: "Contact",
  settings: [
    {
      type: "header",
      content: "Intro",
    },
    {
      type: "checkbox",
      id: "intro",
      label: "Show Intro",
      default: true,
    },
    {
      type: "text",
      id: "title",
      label: "Title",
    },
    {
      type: "text",
      id: "sub_title",
      label: "Sub Title",
    },
    {
      type: "header",
      content: "Info Block",
    },
    {
      type: "checkbox",
      id: "info",
      label: "Show Info Block",
      default: true,
    },
    {
      type: "text",
      id: "info_title",
      label: "Title",
    },
    {
      type: "richtext",
      id: "info_paragraph",
      label: "Paragraph",
    },
    {
      type: "header",
      content: "Contact details",
    },
    {
      type: "checkbox",
      id: "contact",
      label: "Show Contact Details",
      default: true,
    },
    {
      type: "text",
      id: "contact_title",
      label: "Title",
    },
    {
      type: "richtext",
      id: "address",
      label: "Address",
    },
    {
      type: "richtext",
      id: "phone",
      label: "Phone",
    },
    {
      type: "richtext",
      id: "email",
      label: "Email",
    },
    {
      type: "richtext",
      id: "hours",
      label: "Hours",
    },
    {
      type: "header",
      content: "Form Footer",
    },
    {
      type: "richtext",
      id: "submit_paragraph",
      label: "Submit Text",
    },
    {
      type: "richtext",
      id: "success_paragraph",
      label: "Success Text",
    },
    ...spacing,
  ],
  blocks: [
    {
      type: "basic",
      name: "Basic Input",
      settings: [
        {
          type: "text",
          id: "title",
          label: "title",
        },
        {
          type: "checkbox",
          id: "required",
          label: "Required",
        },
        {
          type: "text",
          id: "placeholder",
          label: "Placeholder",
        },
        {
          type: "textarea",
          id: "error_message",
          label: "Validation Error",
        },
        {
          type: "select",
          id: "autocomplete",
          label: "Autocomplete",
          options: autoCompleteOptions.map((option) => ({ value: option, label: option })),
        },
        {
          type: "select",
          id: "type",
          label: "Type",
          options: [
            {
              value: "text",
              label: "Text",
            },
            {
              value: "textarea",
              label: "Textarea",
            },
            {
              value: "email",
              label: "email",
            },
            {
              value: "password",
              label: "password",
            },
            {
              value: "number",
              label: "number",
            },
            {
              value: "tel",
              label: "Telephone",
            },
            {
              value: "url",
              label: "Url",
            },
            {
              value: "date",
              label: "Date",
            },
          ],
        },
        {
          type: "radio",
          id: "size",
          label: "Size",
          options: [
            {
              value: "half",
              label: "Half",
            },
            {
              value: "full",
              label: "Full",
            },
          ],
        },
      ],
    },
    {
      type: "textarea",
      name: "Textarea",
      settings: [
        {
          type: "text",
          id: "title",
          label: "title",
        },
        {
          type: "checkbox",
          id: "required",
          label: "Required",
        },
        {
          type: "textarea",
          id: "placeholder",
          label: "Placeholder",
        },
        {
          type: "textarea",
          id: "error_message",
          label: "Validation Error",
        },
        {
          type: "select",
          id: "autocomplete",
          label: "Autocomplete",
          options: autoCompleteOptions.map((option) => ({ value: option, label: option })),
        },
        {
          type: "range",
          id: "lines",
          label: "Lines",
          default: 3,
          min: 2,
          max: 20,
          step: 1,
        },
        {
          type: "radio",
          id: "size",
          label: "Size",
          options: [
            {
              value: "half",
              label: "Half",
            },
            {
              value: "full",
              label: "Full",
            },
          ],
        },
      ],
    },
    {
      type: "group",
      name: "Grouped Input",
      settings: [
        {
          type: "text",
          id: "title",
          label: "title",
        },
        {
          type: "checkbox",
          id: "required",
          label: "Required",
        },
        {
          type: "radio",
          id: "type",
          label: "Type",
          options: [
            {
              value: "radio",
              label: "radio",
            },
            {
              value: "checkbox",
              label: "checkbox",
            },
          ],
        },
        {
          type: "textarea",
          id: "options",
          label: "Options",
          info: "|| seperated list",
        },
        {
          type: "textarea",
          id: "error_message",
          label: "Validation Error",
        },
      ],
    },
    {
      type: "select",
      name: "Select Input",
      settings: [
        {
          type: "text",
          id: "title",
          label: "title",
        },
        {
          type: "checkbox",
          id: "required",
          label: "Required",
        },
        {
          type: "textarea",
          id: "options",
          label: "Options",
          info: "|| seperated list",
        },
        {
          type: "textarea",
          id: "error_message",
          label: "Validation Error",
        },
        {
          type: "radio",
          id: "size",
          label: "Size",
          options: [
            {
              value: "half",
              label: "Half",
            },
            {
              value: "full",
              label: "Full",
            },
          ],
        },
      ],
    },
    {
      type: "separator",
      name: "Separator",
      settings: [],
    },
  ],
  presets: [
    {
      name: "Contact",
      settings: {
        title: "Get in Touch",
        sub_title: "Tell us how we can help and we’ll get in touch shortly.",
        info_title: "How can we help you?",
        info_paragraph:
          "<p>Feel free to contact us with any questions, projects or partnerships. <br/><br/>Want to have a online meeting instead? Request an appointment with us.<br/><br/>Prefer a cup of coffee and a chat face to face? Schedule an appointment with us in our Cape Town offices.</p>",
        contact_title: "Cape Town Office",
        address:
          '<p><a href="https://g.page/tellmann-cpt?share" target="_blank">21 Pepper Street <br/>3rd Floor - C/O Ademas Solutions<br/>Cape Town, 8001 <br/>South Africa</a></p>',
        email: '<p><a href="mailto:hello@lunalemon.dev">hello@lunalemon.dev</a></p>',
        hours: "<p>Office Hours: 9:00 - 16:30</p>",
      },
    },
  ],
};
