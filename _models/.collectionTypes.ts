export type collectionTypes = {
  blocks: [] | collectionBlocks[];
  id: string;
  settings: {
    /** Type: checkbox */
    brand_page: boolean;
    /** Type: text */
    cool: undefined | string;
    /** Type: checkbox */
    enable_sort_by: boolean;
    /** Type: checkbox */
    "enable_tag_filte-rs": boolean;
    /** Type: checkbox */
    enable_type_filters: boolean;
    /** Type: checkbox */
    enable_vendor_filters: boolean;
    /** Type: select */
    grid_items_per_row: string;
    /** Type: checkbox */
    grid_remove_spacing: boolean;
    /** Type: select */
    layout_mode: string;
    /** Type: select */
    number_of_rows: string;
    /** Type: radio */
    pagination_mode: string;
    /** Type: checkbox */
    show_quick_shop: boolean;
    /** Type: checkbox */
    show_vendor: boolean;
    /** Type: checkbox */
    slider_banner: boolean;
  };
  type: "Collection";
};

type collectionBlocks =
  | {
      type: "brand_content_block";
      settings?: {
        /** Type: textarea */
        content: undefined | string;
        /** Type: text */
        cta1_text: undefined | string;
        /** Type: url */
        cta1_url: undefined | string;
        /** Type: text */
        cta2_text: undefined | string;
        /** Type: url */
        cta2_url: undefined | string;
        /** Type: text */
        handle: undefined | string;
        /** Type: textarea */
        heading: undefined | string;
        /** Type: checkbox */
        horizontal_break: boolean;
        /** Type: image_picker */
        image: undefined | string;
        /** Type: radio */
        image_position: string;
      };
    }
  | {
      type: "image";
      settings?: {
        /** Type: image_picker */
        image: undefined | string;
        /** Type: image_picker */
        image_hover: undefined | string;
        /** Type: collection */
        link: undefined | string;
        /** Type: text */
        title: undefined | string;
      };
    };
