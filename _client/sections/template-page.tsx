import { Wrapper } from "_client/layout/wrapper";
import { Richtext } from "_client/typography/richtext";
import { FC } from "react";
import { useShopifyData } from ".shopify-cms/hooks/shopify-cms";
import { TemplatePageSection } from ".shopify-cms/types/sections";

export const TemplatePage: FC<TemplatePageSection> = ({ id, settings, type }) => {
  const [{ global }] = useShopifyData();
  return (
    <Wrapper
      maxWidth="base"
      spacing={settings.spacing}
      spacingTop={settings.spacing_top}
      spacingBottom={settings.spacing_bottom}
    >
      <article>
        <header>
          <h1 className="heading-2xl mb-16">{global.page.title}</h1>
        </header>
        <main>
          <Richtext className="prose dark:prose-dark ">{global.page.content}</Richtext>
        </main>
      </article>
    </Wrapper>
  );
};
