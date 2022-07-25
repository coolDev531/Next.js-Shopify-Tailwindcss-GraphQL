import { verifyWebhookHmac } from "_server/shopify/webhooks/verifyWebhookHmac";
import { webhookReceivedHeaders } from "_server/shopify/webhooks/webhook";
import { IncomingHttpHeaders } from "http";

import type { NextApiRequest, NextApiResponse } from "next";
import getRawBody from "raw-body";
import { _Product } from "shopify-typed-node-api/dist/clients/rest/request_types";

export const Webhooks = async (
  req: NextApiRequest & { rawbody: Buffer },
  res: NextApiResponse
): Promise<void> => {
  const bodyBuffer = await getRawBody(req);
  const body = JSON.parse(bodyBuffer.toString());

  const headers = Object.entries(req.headers).reduce(
    (acc, [key, val]) => {
      acc[key.toLowerCase()] = val;
      return acc;
    },
    {}
  ) as IncomingHttpHeaders & webhookReceivedHeaders;

  try {
    const {
      "x-shopify-hmac-sha256": hmac,
      "x-shopify-shop-domain": shop,
      "x-shopify-topic": topic,
    } = headers;

    if (!verifyWebhookHmac(hmac, bodyBuffer)) {
      return res.status(401).send("Unauthorized Access");
    }
    console.log(topic);
    switch (topic) {
      case "themes/update": {
        console.log("themes update");
        return res.status(200).send("success");
      }
      case "products/update": {
        const product = body as _Product;
        console.log(product);
        await res.revalidate(`/products/${product.handle}`);
        return res.status(200).send("success");
      }
      default: {
        console.log("could not find topic: ", topic);
        return res.status(200).send("success");
      }
    }
  } catch (err) {
    console.log(err);
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
};

// We turn off the default bodyParser provided by Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};

export default Webhooks;
