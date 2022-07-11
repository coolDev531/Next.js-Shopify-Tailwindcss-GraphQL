import { renderSection } from "_client/sections/_render-section";
import { ContextProviders } from "_client/stores/_context-providers";
import { LoadInitialData } from "_client/stores/_load-initial-data";
import { ShopifyDataProvider } from "_client/stores/shopify-data-store";
import clsx from "clsx";
import { DefaultSeo } from "next-seo";
import { ThemeProvider, useTheme } from "next-themes";
import { useRouter } from "next/router";
import { SEO } from "pages/_app";
import { FC } from "react";
import { PageSettingsSection, Sections } from "types/sections";
import { GlobalSettings } from "types/shopify";

type LayoutProps = { global: GlobalSettings; sections: Sections[] };

export const Layout: FC<LayoutProps> = ({ sections, global }) => {
  const router = useRouter();
  const { theme } = useTheme();

  const pageSettings = sections?.find(
    (section) => section.type === "page-settings"
  ) as PageSettingsSection;

  const color_accent = pageSettings?.settings.color_accent;
  const color_accent_contrast = pageSettings?.settings.color_accent_contrast;
  const color_accent_secondary = pageSettings?.settings.color_accent_secondary;
  const color_accent_secondary_contrast = pageSettings?.settings.color_accent_secondary_contrast;
  const color_accent_dark = pageSettings?.settings.color_accent_dark;
  const color_accent_contrast_dark = pageSettings?.settings.color_accent_contrast_dark;
  const color_accent_secondary_dark = pageSettings?.settings.color_accent_secondary_dark;
  const color_accent_secondary_contrast_dark =
    pageSettings?.settings.color_accent_secondary_contrast_dark;

  const isDark = theme === "dark";

  console.log("render");

  return (
    <ShopifyDataProvider init={{ sections, global }}>
      <ContextProviders>
        <style jsx global>{`
          :root {
            /* Shopify Settings */
            --color-bg: ${global?.settings.color_bg?.rgb};
            --color-bg-dark: ${global?.settings.color_bg_dark?.rgb};
            --color-bg-secondary: ${global?.settings.color_bg_secondary?.rgb};
            --color-bg-secondary-dark: ${global?.settings.color_bg_secondary?.rgb};

            --color-card: ${global?.settings.color_bg_card?.rgb};
            --color-card-dark: ${global?.settings.color_bg_card_dark?.rgb};

            --color-accent: ${global?.settings.color_accent?.rgb};
            --color-accent-contrast: ${global?.settings.color_accent_contrast?.rgb};
            --color-accent-secondary: ${global?.settings.color_accent_secondary?.rgb};
            --color-accent-secondary-contrast: ${global?.settings.color_accent_secondary_contrast
              ?.rgb};

            --color-accent-dark: ${global?.settings.color_accent_dark?.rgb};
            --color-accent-contrast-dark: ${global?.settings.color_accent_contrast_dark?.rgb};
            --color-accent-secondary-dark: ${global?.settings.color_accent_secondary_dark?.rgb};
            --color-accent-secondary--contrast-dark: ${global?.settings
              .color_accent_secondary_contrast_dark?.rgb};

            --color-success: ${global?.settings.color_success?.rgb};
            --color-info: ${global?.settings.color_info?.rgb};
            --color-warning: ${global?.settings.color_warning?.rgb};
            --color-danger: ${global?.settings.color_danger?.rgb};
          }

          .dark {
            --color-bg: var(--color-bg-dark);
            --color-bg-secondary: var(--color-bg-secondary-dark);
            --color-card: var(--color-card-dark);
            --color-accent: var(--color-accent-dark);
            --color-accent-contrast: var(--color-accent-contrast-dark);
            --color-accent-secondary: var(--color-accent-secondary-dark);
          }

          .page-settings--color-accent {
            --color-accent: ${pageSettings?.settings.color_accent?.rgb};
          }

          .dark .page-settings {
            --color-bg: var(--color-bg-dark);
            --color-bg-secondary: var(--color-bg-secondary-dark);
            --color-card: var(--color-card-dark);
            --color-accent: var(--color-accent-dark);
            --color-accent-secondary: var(--color-accent-secondary-dark);
          }
        `}</style>
        <main
          className={clsx(
            "page-settings",
            "relative min-h-screen text-gray-600 d:text-gray-400",
            "min-h-[calc(100vh-300px)] [&>:is(section,header,footer)]:relative",
            `color-gray--${global?.settings?.grayscale}`
          )}
          style={{
            "--color-accent": isDark
              ? color_accent_dark?.rgb ?? color_accent?.rgb
              : color_accent?.rgb,
            "--color-accent-contrast": isDark
              ? color_accent_contrast_dark?.rgb ?? color_accent_contrast?.rgb
              : color_accent_contrast?.rgb,
            "--color-accent-secondary": isDark
              ? color_accent_secondary_dark?.rgb ?? color_accent_secondary?.rgb
              : color_accent_secondary?.rgb,
            "--color-accent-secondary-contrast": isDark
              ? color_accent_secondary_contrast_dark?.rgb ?? color_accent_secondary_contrast?.rgb
              : color_accent_secondary_contrast?.rgb,
          }}
        >
          <div className="user-select-none absolute inset-0 -z-[100] h-full w-full bg-bg"></div>
          <LoadInitialData>
            <ThemeProvider attribute="class">
              <DefaultSeo
                canonical={`${SEO.url}${router.asPath}`}
                twitter={SEO.twitter}
                title={SEO.title}
                description={SEO.description}
                openGraph={SEO.openGraph}
              />

              {sections?.map((section) => renderSection(section))}
            </ThemeProvider>
          </LoadInitialData>
        </main>
      </ContextProviders>
    </ShopifyDataProvider>
  );
};
