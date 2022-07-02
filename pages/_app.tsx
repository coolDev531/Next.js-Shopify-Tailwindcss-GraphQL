import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { withTRPC } from "@trpc/next";

import { ContextProviders } from "_client/stores/_context-providers";
import { LoadInitialData } from "_client/stores/_load-initial-data";
import { AppRouter } from "_server/settings/api-routes";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { FC } from "react";
import "styles/tailwind.css";
import "styles/theme.scss";
import "styles/utils.scss";
import superjson from "superjson";

export const SEO = {
  title: "Felix Tellmann",
  url: "https://flext.dev",
  description:
    "I'm a self-taught Full-stack Engineer, writer and entrepreneur living in Cape Town. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide real value to its users.",
  siteName: "Flext.dev",
  github: "https://github.com/FelixTellmann/flext.dev",
  avatar: "https://avatars.githubusercontent.com/u/22034038",
  author: "Felix Tellmann",
  twitter: {
    handle: "@Tellmann",
    site: "@FelixTellmann",
    cardType: "summary_large_image",
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://flext.dev",
    site_name: "Flext.dev",
    title: "Felix Tellmann",
    description:
      "Lets make things better with quality code - Learn Web Development / API's / Automations / Serverless / Architecture / and more.",
    images: [
      {
        url: "https://flext.dev/images/og-default.jpg",
        alt: "Felix Tellmann - Full-stack Engineer - Entrepreneur",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const App: FC<AppProps> = ({ pageProps, Component }) => {
  const router = useRouter();

  return (
    <ContextProviders>
      <LoadInitialData>
        <ThemeProvider attribute="class">
          <DefaultSeo
            canonical={`${SEO.url}${router.asPath}`}
            twitter={SEO.twitter}
            title={SEO.title}
            description={SEO.description}
            openGraph={SEO.openGraph}
          />
          {/*<Header />*/}
          <main className="min-h-[calc(100vh-300px)] overflow-hidden [&_section]:relative">
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </LoadInitialData>
    </ContextProviders>
  );
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    return {
      url:
        typeof window !== "undefined"
          ? "/api/trpc"
          : process.env.NEXT_PUBLIC_VERCEL_URL
          ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc`
          : `http://localhost:${process.env.NEXT_PUBLIC_PORT ?? 3000}/api/trpc`,
      links: [
        /*loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),*/
        httpBatchLink({
          url: process.env.NEXT_PUBLIC_VERCEL_URL
            ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc`
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
