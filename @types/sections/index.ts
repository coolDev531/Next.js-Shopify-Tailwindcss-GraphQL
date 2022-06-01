import { FooterSection } from "types/sections/footer";
import { HeaderSection } from "types/sections/header";
import { HeroSection } from "types/sections/hero";
import { Template_404Section } from "types/sections/template-404";
import { TemplateArticleSection } from "types/sections/template-article";
import { TemplateBlogSection } from "types/sections/template-blog";
import { TemplateCartSection } from "types/sections/template-cart";
import { TemplateCollectionSection } from "types/sections/collection";
import { TemplateListCollectionsSection } from "types/sections/template-list-collections";
import { TemplatePageSection } from "types/sections/template-page";
import { TemplatePasswordSection } from "types/sections/template-password";
import { TemplateProductSection } from "types/sections/template-product";
import { TemplateSearchSection } from "types/sections/template-search";
import { TestSection } from "types/sections/test";

export type Sections =
  | FooterSection
  | HeaderSection
  | HeroSection
  | Template_404Section
  | TemplateArticleSection
  | TemplateBlogSection
  | TemplateCartSection
  | TemplateCollectionSection
  | TemplateListCollectionsSection
  | TemplatePageSection
  | TemplatePasswordSection
  | TemplateProductSection
  | TemplateSearchSection
  | TestSection;
