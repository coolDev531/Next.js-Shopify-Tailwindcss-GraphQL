import Shopify from "shopify-typed-node-api";

export const ShopifyRest = new Shopify.Clients.Rest(
  process.env.SHOPIFY_API_STORE as string,
  process.env.SHOPIFY_API_ACCESS_TOKEN as string
);

export const ShopifyGraphql = new Shopify.Clients.Graphql(
  process.env.SHOPIFY_API_STORE as string,
  process.env.SHOPIFY_API_ACCESS_TOKEN as string
);

const ShopifyStorefrontClient = new Shopify.Clients.Storefront(
  process.env.SHOPIFY_API_STORE as string,
  process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN as string
);
