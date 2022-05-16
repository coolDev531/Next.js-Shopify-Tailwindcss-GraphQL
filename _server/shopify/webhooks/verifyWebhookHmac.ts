import crypto from "crypto";

export const safeCompare = (stringA, stringB) => {
  const aLen = Buffer.byteLength(stringA);
  const bLen = Buffer.byteLength(stringB);

  if (aLen !== bLen) {
    return false;
  }

  // Turn strings into buffers with equal length
  // to avoid leaking the length
  const buffA = Buffer.alloc(aLen, 0, "utf8");
  buffA.write(stringA);
  const buffB = Buffer.alloc(bLen, 0, "utf8");
  buffB.write(stringB);

  return crypto.timingSafeEqual(buffA, buffB);
};

export const verifyWebhookHmac = (hmac, body) => {
  const compute_hmac = crypto
    .createHmac("sha256", process.env.SHOPIFY_WEBHOOK_SECRET as string)
    .update(body)
    .digest("base64");

  return safeCompare(hmac, compute_hmac);
};
