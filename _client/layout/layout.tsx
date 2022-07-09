import { useInitShopifyData } from "_client/hooks/use-shopify-data";
import { renderSection } from "_client/sections/_render-section";
import { ContextProviders } from "_client/stores/_context-providers";
import { LoadInitialData } from "_client/stores/_load-initial-data";
import { ShopifyDataProvider } from "_client/stores/shopify-data-store";
import clsx from "clsx";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { SEO } from "pages/_app";
import { FC } from "react";
import { Sections } from "types/sections";
import { GlobalSettings } from "types/shopify";

type LayoutProps = { global: GlobalSettings; sections: Sections[] };

export const Layout: FC<LayoutProps> = ({ sections, global }) => {
  const router = useRouter();

  return (
    <ShopifyDataProvider init={{ sections, global }}>
      <ContextProviders>
        <style jsx global>{`
          :root {
            --color-bg: ${global.settings.color_bg.rgb};
            --color-bg-dark: ${global.settings.color_bg_dark.rgb};
            --color-bg-secondary: ${global.settings.color_bg_secondary.rgb};
            --color-bg-secondary-dark: ${global.settings.color_bg_secondary.rgb};
            --color-card: ${global.settings.color_bg_card.rgb};
            --color-card-dark: ${global.settings.color_bg_card_dark.rgb};
            --color-accent: ${global.settings.color_accent.rgb};
            --color-accent-dark: ${global.settings.color_accent_dark.rgb};
            --color-accent-secondary: ${global.settings.color_accent_secondary.rgb};
            --color-accent-secondary-dark: ${global.settings.color_bg_secondary_dark.rgb};
            --color-success: ${global.settings.color_success.rgb};
            --color-info: ${global.settings.color_info.rgb};
            --color-warning: ${global.settings.color_warning.rgb};
            --color-danger: ${global.settings.color_danger.rgb};
          }
        `}</style>
        <main
          className={clsx(
            "min-h-screen overflow-x-hidden text-gray-600 d:text-gray-400 dark:bg-dark-bg",
            "min-h-[calc(100vh-300px)] [&>:is(section,header,footer)]:relative",
            `color-gray--${global?.settings?.grayscale}`
          )}
        >
          <LoadInitialData>
            <ThemeProvider attribute="class">
              <DefaultSeo
                canonical={`${SEO.url}${router.asPath}`}
                twitter={SEO.twitter}
                title={SEO.title}
                description={SEO.description}
                openGraph={SEO.openGraph}
              />

              {sections.map((section) => renderSection(section))}
            </ThemeProvider>
          </LoadInitialData>
        </main>
      </ContextProviders>
    </ShopifyDataProvider>
  );
};
