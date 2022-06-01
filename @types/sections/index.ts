import { FooterSection } from "types/sections/footer";
import { HeaderSection } from "types/sections/header";
import { HeadingSection } from "types/sections/heading";
import { HeroSection } from "types/sections/hero";
import { ImageTextSection } from "types/sections/image-text";
import { InfoCardsSection } from "types/sections/info-cards";
import { StatsGraphSection } from "types/sections/stats-graph";
import { StorySection } from "types/sections/story";
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

export type Sections =
  | FooterSection
  | HeaderSection
  | HeadingSection
  | HeroSection
  | ImageTextSection
  | InfoCardsSection
  | StatsGraphSection
  | StorySection
  | Template_404Section
  | TemplateArticleSection
  | TemplateBlogSection
  | TemplateCartSection
  | TemplateCollectionSection
  | TemplateListCollectionsSection
  | TemplatePageSection
  | TemplatePasswordSection
  | TemplateProductSection
  | TemplateSearchSection;

export type { FooterSection, HeaderSection, HeadingSection, HeroSection, ImageTextSection, InfoCardsSection, StatsGraphSection, StorySection, Template_404Section, TemplateArticleSection, TemplateBlogSection, TemplateCartSection, TemplateCollectionSection, TemplateListCollectionsSection, TemplatePageSection, TemplatePasswordSection, TemplateProductSection, TemplateSearchSection };
