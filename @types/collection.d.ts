export type CollectionSection = {
  blocks: [] | collectionBlocks[];
  id: string;
  settings: {
    /** Input type: checkbox */
    brand_page: boolean;
    /** Input type: richtext */
    cool: undefined | `<p${string}</p>`;
    /** Input type: checkbox */
    enable_sort_by: boolean;
    /** Input type: checkbox */
    "enable_tag_filte-rs": boolean;
    /** Input type: checkbox */
    enable_type_filters: boolean;
    /** Input type: checkbox */
    enable_vendor_filters: boolean;
    /** Input type: select */
    grid_items_per_row: "2" | "3" | "4" | "5" | "6";
    /** Input type: checkbox */
    grid_remove_spacing: boolean;
    /** Input type: select */
    layout_mode: "collage" | "grid";
    /** Input type: select */
    number_of_rows: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
    /** Input type: radio */
    pagination_mode: "pagination" | "infinite_scrolling";
    /** Input type: product */
    product: undefined | string;
    /** Input type: checkbox */
    show_quick_shop: boolean;
    /** Input type: checkbox */
    show_vendor: boolean;
    /** Input type: checkbox */
    slider_banner: boolean;
  };
  type: "Collection";
};

type collectionBlocks =
  | {
      type: "brand_content_block";
      settings?: {
        /** Input type: textarea */
        content: undefined | string;
        /** Input type: text */
        cta1_text: undefined | string;
        /** Input type: url */
        cta1_url: undefined | string;
        /** Input type: text */
        cta2_text: undefined | string;
        /** Input type: url */
        cta2_url: undefined | string;
        /** Input type: text */
        handle: undefined | string;
        /** Input type: textarea */
        heading: undefined | string;
        /** Input type: checkbox */
        horizontal_break: boolean;
        /** Input type: image_picker */
        image: undefined | string;
        /** Input type: radio */
        image_position: "disable" | "left" | "right";
      };
    }
  | {
      type: "image";
      settings?: {
        /** Input type: image_picker */
        image: undefined | string;
        /** Input type: image_picker */
        image_hover: undefined | string;
        /** Input type: collection */
        link: undefined | string;
        /** Input type: text */
        title: undefined | string;
      };
    };
