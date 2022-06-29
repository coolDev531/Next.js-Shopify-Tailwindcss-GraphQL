/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  strictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "assets.vercel.com",
      "avatars1.githubusercontent.com",
      "avatars.githubusercontent.com",
      "cdn.shopify.com",
      "burst.shopifycdn.com",
    ],
  },
  webpack: (config, { isServer, dev }) => {
    /*
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }
    */

    if (isServer) {
      // eslint-disable-next-line node/no-missing-require
      // require("./scripts/create-components-export-index");
    }
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.http = false;
      config.resolve.fallback.https = false;
      config.resolve.fallback.cardinal = false;
    }

    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve("@svgr/webpack"),
    });

    return config;
  },
  experimental: {
    externalDir: true,
    images: { allowFutureImage: true },
  },
  env: {
    ...this.env,
    NEXT_PUBLIC_APP_VERSION: require("./package.json").version,
  },
};
