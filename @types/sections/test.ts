import { _Color, _Font, _LinkList } from "types/shopify";
import { _Image, _Page, _Product, _Article, _Blog, _Collection } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export type TestSection = {
  blocks: [];
  id: string;
  settings: {
    /** Input type: article */
    article: undefined | _Article;
    /** Input type: blog */
    blog: undefined | _Blog;
    /** Input type: collection */
    collection: undefined | _Collection;
    /** Input type: collection_list */
    collection_list: undefined | _Collection[];
    /** Input type: color */
    color: undefined | _Color;
    /** Input type: color_background */
    color_background: undefined | string;
    /** Input type: font */
    font: undefined | string;
    /** Input type: font_picker */
    font_picker: _Font;
    /** Input type: image_picker */
    image: undefined | _Image;
    /** Input type: link_list */
    link_list: undefined | _LinkList;
    /** Input type: page */
    page: undefined | _Page;
    /** Input type: product */
    product: undefined | _Product;
    /** Input type: product_list */
    product_list: undefined | _Product[];
  };
  type: "Test";
};
