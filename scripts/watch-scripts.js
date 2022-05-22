const watch = require("node-watch");
const path = require("path");
const fs = require("fs");
const axios = require("axios");
require("dotenv").config();

watch(path.join(process.cwd(), "_models"), { recursive: true }, async (evt, name) => {
  if (!name.match(/\.(ts|tsx|s?css)$/)) return;
  const startTime = Date.now();

  const url = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/run-scripts`
    : `http://localhost:${process.env.NEXT_PUBLIC_PORT ?? 3000}/api/run-scripts`;

  const result = await axios({
    url,
    method: "POST",
    headers: {
      "local-auth": process.env.SCRIPT_SECRET,
    },
  });

  console.log(`Models updated: ${result.data} - ${Date.now() - startTime}ms`);
});
