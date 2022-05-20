
export type collectionTypes = {
  type: "Collection";
  id: string;
  blocks: [] | collectionBlocks[];
  settings: {
    layout_mode
    pagination_mode
    enable_tag_filters
    enable_sort_by
    enable_type_filters
    enable_vendor_filters
    show_vendor
    show_quick_shop
    grid_remove_spacing
    grid_items_per_row
    number_of_rows
    brand_page
    slider_banner
  };
}
