import { metafieldDefinitionsQuery } from "_server/shopify/graphql/metafieldDefinitions";
import { MetafieldDefinitionsQuery, MetafieldDefinitionsQueryVariables } from "_server/shopify/types";
import type { NextApiRequest, NextApiResponse } from "next";
import Shopify from "shopify-typed-node-api";

type TestFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export const Test: TestFunction = async (req, res) => {
  const ShopifyGraphql = new Shopify.Clients.Graphql(
    process.env.SHOPIFY_API_STORE,
    `${process.env.SHOPIFY_API_ACCESS_TOKEN}`
  );

  const ownerTypes = [
    "ARTICLE",
    "BLOG",
    "COLLECTION",
    "PAGE",
    "PRODUCT",
    "PRODUCTVARIANT",
    "SHOP",
  ] as const;

  const returnData = [];
  for (let i = 0; i < ownerTypes.length; i++) {
    const owner = ownerTypes[i];
    const data = await ShopifyGraphql.query<{
      response: { data: MetafieldDefinitionsQuery };
      variables: MetafieldDefinitionsQueryVariables;
    }>({
      tries: 20,
      data: {
        query: metafieldDefinitionsQuery,
        variables: {
          ownerType: owner,
        },
      },
    });

    returnData.push({
      owner,
      data: data?.body?.data?.metafieldDefinitions?.edges?.map(({ node }) => ({
        ...node,
        type: node.type.name,
      })),
    });
  }
  res.status(200).json(returnData);
};

export default Test;
