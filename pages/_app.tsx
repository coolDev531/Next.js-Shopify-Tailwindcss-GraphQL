import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { withTRPC } from "@trpc/next";
import { ThemeLayout } from "_client/layout/layout";

import { ContextProviders } from "_client/stores/_context-providers";
import { LoadInitialData } from "_client/stores/_load-initial-data";
import { AppRouter } from "_server/settings/api-routes";
import { DefaultSeo } from "next-seo";
import type { NextWebVitalsMetric } from "next/app";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { event, GoogleAnalytics, usePageViews } from "nextjs-google-analytics";
import { FC, useCallback, useEffect } from "react";
import "styles/tailwind.css";
import "styles/theme.scss";
import "styles/utils.scss";
import superjson from "superjson";
import { ShopifyCms } from ".shopify-cms/hooks/shopify-cms";

export const SEO = {
  title: "Lunalemon - Web Development",
  url: "https://lunalemon.dev",
  description:
    "International Shopify Web design studio - We create Shopify Ecommerce solutions - Empowering independent business owners everywhere.",
  siteName: "Lunalemon.dev",
  github: "https://github.com/luna-lemon",
  avatar: "https://avatars.githubusercontent.com/u/64978215",
  author: "Lunalemon.dev",
  twitter: {
    handle: "@lunalemon_dev",
    site: "@lunalemon_dev",
    cardType: "summary_large_image",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lunalemon.dev",
    site_name: "Lunalemon.dev",
    title: "Lunalemon - Web Development",
    description:
      "International Shopify Web design studio - We create Shopify Ecommerce solutions - Empowering independent business owners everywhere.",
    images: [
      {
        url: "https://lunalemon.dev/images/og-image.jpg",
        alt: "Lunalemon - Web Development",
        width: 1600,
        height: 900,
      },
    ],
  },
};

export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

const App: FC<AppProps> = ({ pageProps, Component }) => {
  const router = useRouter();
  usePageViews();

  const emitEmailEvents = useCallback((e) => {
    event("contact", {
      category: "Email",
      label: e.target.href.replace("mailto:", ""),
    });
  }, []);

  useEffect(() => {
    document.querySelectorAll("[href*=mailto]").forEach((el) => {
      el.addEventListener("click", emitEmailEvents);
    });

    return () => {
      document.querySelectorAll("[href*=mailto]").forEach((el) => {
        el.removeEventListener("click", emitEmailEvents);
      });
    };
  }, [emitEmailEvents, router.asPath]);

  return (
    <>
      <GoogleAnalytics strategy="lazyOnload" />
      <ShopifyCms global={pageProps?.global} sections={pageProps?.sections}>
        {/*<ShopifyDataProvider init={{ sections: pageProps?.sections, global: pageProps?.global }}>*/}
        <ContextProviders>
          <LoadInitialData>
            <DefaultSeo
              {...SEO}
              canonical={`${SEO.url}${router.asPath}`}
              twitter={SEO.twitter}
              title={SEO.title}
              description={SEO.description}
              openGraph={SEO.openGraph}
            />
            <ThemeLayout sections={pageProps?.sections} global={pageProps?.global} />

            <Component {...pageProps} />
          </LoadInitialData>
        </ContextProviders>
        {/*</ShopifyDataProvider>*/}
      </ShopifyCms>
    </>
  );
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    return {
      url:
        typeof window !== "undefined"
          ? "/api/trpc"
          : process.env.NEXT_PUBLIC_VERCEL_URL
          ? `https://lunalemon.dev/api/trpc`
          : `http://localhost:${process.env.NEXT_PUBLIC_PORT ?? 3000}/api/trpc`,
      links: [
        /*loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),*/
        httpBatchLink({
          url: process.env.NEXT_PUBLIC_VERCEL_URL
            ? `https://lunalemon.dev/api/trpc`
            : `http://localhost:${process.env.NEXT_PUBLIC_PORT ?? 3000}/api/trpc`,
        }),
      ],
      transformer: superjson,
      queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  ssr: false /*responseMeta({ clientErrors }) {
    if (clientErrors.length) {
      // propagate http first error from API calls
      return {
        status: clientErrors[0].data?.httpStatus ?? 500,
      };
    }
    return {};
  },*/,
})(App);
