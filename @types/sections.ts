import { _LinkList, _Color } from "types/shopify";
import { _Image, _Collection, _Product } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export type BlockquoteSection = {
  id: string;
  settings: {
    /** Input type: checkbox */
    quotation_marks: boolean;
    /** Input type: text */
    author?: string;
    /** Input type: text */
    job_title?: string;
    /** Input type: textarea */
    quote?: string;
  };
  type: "blockquote";
};

export type FeatureCarouselSection = {
  blocks: FeatureCarouselBlocks[];
  id: string;
  type: "feature-carousel";
};

export type FeatureCarouselBlocks =
  | {
      id: string;
      settings: {
        /** Input type: select */
        position: "left" | "center" | "right";
        /** Input type: text */
        cta1?: string;
        /** Input type: url */
        cta1_link?: string;
        /** Input type: text */
        cta2?: string;
        /** Input type: url */
        cta2_link?: string;
        /** Input type: richtext */
        paragraph?: `<p${string}</p>`;
        /** Input type: text */
        pre_title?: string;
        /** Input type: text */
        title?: string;
      };
      type: "heading";
    }
  | {
      id: string;
      settings: {
        /** Input type: image_picker */
        image?: _Image;
        /** Input type: url */
        link?: string;
        /** Input type: textarea */
        paragraph?: string;
        /** Input type: text */
        title?: string;
      };
      type: "feature";
    };

export type FeatureListSection = {
  blocks: FeatureListBlocks[];
  id: string;
  type: "feature-list";
};

export type FeatureListBlocks = {
  id: string;
  settings: {
    /** Input type: select */
    icon: "ColorSwatchIcon" | "CloudIcon";
    /** Input type: richtext */
    paragraph?: `<p${string}</p>`;
    /** Input type: text */
    title?: string;
  };
  type: "feature";
};

export type FooterSection = {
  id: string;
  type: "footer";
};

export type HeaderSection = {
  id: string;
  settings: {
    /** Input type: image_picker */
    logo?: _Image;
    /** Input type: link_list */
    menu?: _LinkList;
  };
  type: "header";
};

export type HeadingSection = {
  id: string;
  settings: {
    /** Input type: select */
    position: "left" | "center" | "right";
    /** Input type: text */
    cta1?: string;
    /** Input type: url */
    cta1_link?: string;
    /** Input type: text */
    cta2?: string;
    /** Input type: url */
    cta2_link?: string;
    /** Input type: richtext */
    paragraph?: `<p${string}</p>`;
    /** Input type: text */
    pre_title?: string;
    /** Input type: text */
    title?: string;
  };
  type: "heading";
};

export type HeroSection = {
  id: string;
  settings: {
    /** Input type: collection */
    collection?: _Collection & {
      products: (_Product & { content: string; description: string })[];
    };
    /** Input type: image_picker */
    image?: _Image;
    /** Input type: richtext */
    list?: `<p${string}</p>`;
    /** Input type: richtext */
    paragraph?: `<p${string}</p>`;
    /** Input type: text */
    pre_title?: string;
    /** Input type: text */
    title?: string;
  };
  type: "hero";
};

export type ImageCarouselSection = {
  blocks: ImageCarouselBlocks[];
  id: string;
  type: "image-carousel";
};

export type ImageCarouselBlocks =
  | {
      id: string;
      settings: {
        /** Input type: select */
        position: "left" | "center" | "right";
        /** Input type: text */
        cta1?: string;
        /** Input type: url */
        cta1_link?: string;
        /** Input type: text */
        cta2?: string;
        /** Input type: url */
        cta2_link?: string;
        /** Input type: richtext */
        paragraph?: `<p${string}</p>`;
        /** Input type: text */
        pre_title?: string;
        /** Input type: text */
        title?: string;
      };
      type: "heading";
    }
  | {
      id: string;
      settings: {
        /** Input type: image_picker */
        image?: _Image;
        /** Input type: url */
        link?: string;
      };
      type: "image";
    };

export type ImageGallerySection = {
  blocks: ImageGalleryBlocks[];
  id: string;
  type: "image-gallery";
};

export type ImageGalleryBlocks = {
  id: string;
  settings: {
    /** Input type: range */
    columns: number;
    /** Input type: checkbox */
    hover_effect: boolean;
    /** Input type: color_background */
    color_overlay?: string;
    /** Input type: color */
    color_text?: _Color;
    /** Input type: image_picker */
    image?: _Image;
    /** Input type: richtext */
    paragraph?: `<p${string}</p>`;
    /** Input type: product */
    product?: _Product & { content: string; description: string };
    /** Input type: text */
    title?: string;
  };
  type: "image";
};

export type ImageTextSection = {
  id: string;
  settings: {
    /** Input type: radio */
    position: "left" | "right";
    /** Input type: image_picker */
    image?: _Image;
    /** Input type: richtext */
    paragraph?: `<p${string}</p>`;
    /** Input type: text */
    pre_title?: string;
    /** Input type: text */
    title?: string;
  };
  type: "image-text";
};

export type InfoCardsSection = {
  blocks: InfoCardsBlocks[];
  id: string;
  settings: {
    /** Input type: text */
    pre_title?: string;
    /** Input type: text */
    title?: string;
  };
  type: "info-cards";
};

export type InfoCardsBlocks = {
  id: string;
  settings: {
    /** Input type: richtext */
    paragraph?: `<p${string}</p>`;
    /** Input type: html */
    svg?: string;
    /** Input type: text */
    title?: string;
  };
  type: "info-card";
};

export type LogoBannerSection = {
  blocks: LogoBannerBlocks[];
  id: string;
  settings: {
    /** Input type: range */
    height: number;
  };
  type: "logo-banner";
};

export type LogoBannerBlocks =
  | {
      id: string;
      settings: {
        /** Input type: html */
        svg?: string;
        /** Input type: url */
        url?: string;
      };
      type: "svg";
    }
  | {
      id: string;
      settings: {
        /** Input type: image_picker */
        image?: _Image;
        /** Input type: url */
        url?: string;
      };
      type: "image";
    };

export type SpecListSection = {
  blocks: SpecListBlocks[];
  id: string;
  type: "spec-list";
};

export type SpecListBlocks =
  | {
      id: string;
      settings: {
        /** Input type: select */
        position: "left" | "center" | "right";
        /** Input type: text */
        cta1?: string;
        /** Input type: url */
        cta1_link?: string;
        /** Input type: text */
        cta2?: string;
        /** Input type: url */
        cta2_link?: string;
        /** Input type: richtext */
        paragraph?: `<p${string}</p>`;
        /** Input type: text */
        pre_title?: string;
        /** Input type: text */
        title?: string;
      };
      type: "heading";
    }
  | {
      id: string;
      settings: {
        /** Input type: select */
        icon1: "ColorSwatchIcon" | "CloudIcon";
        /** Input type: select */
        icon2: "ColorSwatchIcon" | "CloudIcon";
        /** Input type: select */
        icon3: "ColorSwatchIcon" | "CloudIcon";
        /** Input type: select */
        icon4: "ColorSwatchIcon" | "CloudIcon";
        /** Input type: select */
        icon5: "ColorSwatchIcon" | "CloudIcon";
        /** Input type: select */
        icon6: "ColorSwatchIcon" | "CloudIcon";
        /** Input type: text */
        text1?: string;
        /** Input type: text */
        text2?: string;
        /** Input type: text */
        text3?: string;
        /** Input type: text */
        text4?: string;
        /** Input type: text */
        text5?: string;
        /** Input type: text */
        text6?: string;
      };
      type: "list";
    };

export type StatsGraphSection = {
  blocks: StatsGraphBlocks[];
  id: string;
  type: "stats-graph";
};

export type StatsGraphBlocks = {
  id: string;
  settings: {
    /** Input type: text */
    descriptions?: string;
    /** Input type: text */
    stat?: string;
  };
  type: "stat";
};

export type StorySection = {
  blocks: StoryBlocks[];
  id: string;
  type: "story";
};

export type StoryBlocks =
  | {
      id: string;
      settings: {
        /** Input type: select */
        position: "left" | "center" | "right";
        /** Input type: text */
        cta1?: string;
        /** Input type: url */
        cta1_link?: string;
        /** Input type: text */
        cta2?: string;
        /** Input type: url */
        cta2_link?: string;
        /** Input type: richtext */
        paragraph?: `<p${string}</p>`;
        /** Input type: text */
        pre_title?: string;
        /** Input type: text */
        title?: string;
      };
      type: "heading";
    }
  | {
      id: string;
      settings: {
        /** Input type: radio */
        position: "left" | "right";
        /** Input type: image_picker */
        image?: _Image;
        /** Input type: richtext */
        paragraph?: `<p${string}</p>`;
        /** Input type: text */
        pre_title?: string;
        /** Input type: text */
        title?: string;
      };
      type: "image-text";
    };

export type TabsFaqSection = {
  blocks: TabsFaqBlocks[];
  id: string;
  settings: {
    /** Input type: text */
    title?: string;
  };
  type: "tabs-faq";
};

export type TabsFaqBlocks = {
  id: string;
  settings: {
    /** Input type: collection */
    faq_items?: _Collection & { products: (_Product & { content: string; description: string })[] };
    /** Input type: text */
    title?: string;
  };
  type: "category";
};

export type TabsImageCardSection = {
  blocks: TabsImageCardBlocks[];
  id: string;
  type: "tabs-image-card";
};

export type TabsImageCardBlocks =
  | {
      id: string;
      settings: {
        /** Input type: select */
        position: "left" | "center" | "right";
        /** Input type: text */
        cta1?: string;
        /** Input type: url */
        cta1_link?: string;
        /** Input type: text */
        cta2?: string;
        /** Input type: url */
        cta2_link?: string;
        /** Input type: richtext */
        paragraph?: `<p${string}</p>`;
        /** Input type: text */
        pre_title?: string;
        /** Input type: text */
        title?: string;
      };
      type: "heading";
    }
  | {
      id: string;
      settings: {
        /** Input type: text */
        cta1?: string;
        /** Input type: url */
        cta1_link?: string;
        /** Input type: text */
        cta2?: string;
        /** Input type: url */
        cta2_link?: string;
        /** Input type: image_picker */
        image?: _Image;
        /** Input type: url */
        image_link?: string;
        /** Input type: richtext */
        paragraph?: `<p${string}</p>`;
        /** Input type: html */
        tab_svg?: string;
        /** Input type: text */
        tab_title?: string;
        /** Input type: text */
        title?: string;
      };
      type: "tab";
    };

export type TabsProcessStepSection = {
  blocks: TabsProcessStepBlocks[];
  id: string;
  settings: {
    /** Input type: text */
    cta1?: string;
    /** Input type: url */
    cta1_link?: string;
    /** Input type: text */
    cta2?: string;
    /** Input type: url */
    cta2_link?: string;
    /** Input type: richtext */
    paragraph?: `<p${string}</p>`;
    /** Input type: text */
    pre_title?: string;
    /** Input type: text */
    title?: string;
  };
  type: "tabs-process-step";
};

export type TabsProcessStepBlocks = {
  id: string;
  settings: {
    /** Input type: richtext */
    paragraph?: `<p${string}</p>`;
    /** Input type: textarea */
    tab_paragraph?: string;
    /** Input type: text */
    tab_title?: string;
    /** Input type: text */
    title?: string;
  };
  type: "step";
};

export type TemplateArticleSection = {
  id: string;
  type: "template-article";
};

export type TemplateBlogSection = {
  id: string;
  type: "template-blog";
};

export type TemplateCartSection = {
  id: string;
  type: "template-cart";
};

export type TemplateCollectionSection = {
  id: string;
  type: "collection";
};

export type TemplateListCollectionsSection = {
  id: string;
  type: "template-list-collections";
};

export type TemplatePageSection = {
  id: string;
  type: "template-page";
};

export type TemplatePasswordSection = {
  id: string;
  type: "template-password";
};

export type TemplateProductSection = {
  id: string;
  type: "template-product";
};

export type TemplateSearchSection = {
  id: string;
  type: "template-search";
};

export type Template_404Section = {
  id: string;
  type: "template-404";
};

export type Sections =
  | BlockquoteSection
  | FeatureCarouselSection
  | FeatureListSection
  | FooterSection
  | HeaderSection
  | HeadingSection
  | HeroSection
  | ImageCarouselSection
  | ImageGallerySection
  | ImageTextSection
  | InfoCardsSection
  | LogoBannerSection
  | SpecListSection
  | StatsGraphSection
  | StorySection
  | TabsFaqSection
  | TabsImageCardSection
  | TabsProcessStepSection
  | TemplateArticleSection
  | TemplateBlogSection
  | TemplateCartSection
  | TemplateCollectionSection
  | TemplateListCollectionsSection
  | TemplatePageSection
  | TemplatePasswordSection
  | TemplateProductSection
  | TemplateSearchSection
  | Template_404Section;
