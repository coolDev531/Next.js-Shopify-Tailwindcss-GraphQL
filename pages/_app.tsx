import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { withTRPC } from "@trpc/next";

import { useIsMount } from "_client/hooks/use-is-mount";
import { Footer } from "_client/layout/footer";
import { Header } from "_client/layout/header";
import { ContextProviders } from "_client/stores/_context-providers";
import { LoadInitialData } from "_client/stores/_load-initial-data";
import { AppRouter } from "_server/settings/api-routes";
import { SEO } from "content/seo";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { FC } from "react";
import "styles/animations.scss";
import "styles/prism.scss";
import "styles/tailwind.css";
import "styles/theme.scss";
import "styles/utils.scss";
import superjson from "superjson";

const App: FC<AppProps> = ({ pageProps, Component }) => {
  const router = useRouter();
  const isMount = useIsMount();

  if (router.pathname === "/seo/og-image") {
    console.log(router);
  }

  return (
    <SessionProvider refetchOnWindowFocus refetchInterval={5 * 60} session={pageProps.session}>
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
            {/^\/examples\//i.test(router.pathname) || /^\/seo\/og-image/i.test(router.pathname)
              ? <Component {...pageProps} />
              : <>
                  <Header />
                  <main className="min-h-[calc(100vh-300px)]">
                    <Component {...pageProps} />
                  </main>

                  <Footer />
                </>}
          </ThemeProvider>
        </LoadInitialData>
      </ContextProviders>
    </SessionProvider>
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
  ssr: false,
  /*responseMeta({ clientErrors }) {
    if (clientErrors.length) {
      // propagate http first error from API calls
      return {
        status: clientErrors[0].data?.httpStatus ?? 500,
      };
    }
    return {};
  },*/
})(App);
