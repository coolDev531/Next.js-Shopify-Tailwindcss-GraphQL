import { _Metafield_liquid, _Metafield_liquid_file_reference, _Metafield_liquid_list_file_reference, _Metafield_liquid_list_product_reference, _Metafield_liquid_list_variant_reference, _Metafield_liquid_page_reference, _Metafield_liquid_product_reference, _Metafield_liquid_variant_reference,_Metafield_liquid_file_reference_generic,  _Metafield_liquid_file_reference_image, _Product_liquid } from "./shopify";

export type _Article_metafields = {
  svg?: _Metafield_liquid_file_reference_generic | _Metafield_liquid_file_reference_image;
};

export type _Blog_metafields = { [T: string]: _Metafield_liquid };

export type _Collection_metafields = { [T: string]: _Metafield_liquid };

export type _Page_metafields = { [T: string]: _Metafield_liquid };

export type _Product_metafields = {
  react_icon?: string;
  logo?: _Metafield_liquid_file_reference_generic | _Metafield_liquid_file_reference_image;
  logo_dark?: _Metafield_liquid_file_reference_generic | _Metafield_liquid_file_reference_image;
  testimonial?: string;
  contact_person?: string;
  job_title?: string;
  turnaround?: number;
  demo_link?: string;
  related_products?: Omit<_Product_liquid, "metafields">[];
};

export type _Variant_metafields = { [T: string]: _Metafield_liquid };

export type _Shop_metafields = { [T: string]: _Metafield_liquid };
