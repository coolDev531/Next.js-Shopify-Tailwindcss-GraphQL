const watch = require("node-watch");
const path = require("path");
const fs = require("fs");
const axios = require("axios");
require("dotenv").config();

/*
function findFiles(dir) {
  const files = fs.readdirSync(path.join(process.cwd(), dir), {
    encoding: "utf-8",
    withFileTypes: true,
  });
  return files.reduce(
    (acc, file) => {
      if (file.isDirectory()) return { ...acc, ...findFiles(`${dir}/${file.name}`) };
      if (file.name === "index.ts") return acc;

      const fileContents = fs.readFileSync(`${dir}/${file.name}`, { encoding: "utf-8" });

      if (file.name.match(/^[^_].*\.(ts|tsx|js|jsx)$/) && fileContents.includes("export")) {
        if (!acc[dir]) acc[dir] = [];
        acc[dir].push(`export * from "${dir}/${file.name.replace(/\.(ts|tsx|js|jsx)$/, "")}";`);
      }
      return acc;
    },
    {}
  );
}
*/

/*const processFolder = (folder) => {
  const fileContent = findFiles(folder);

  Object.entries(fileContent).forEach(([key, val]) => {
    const content = `${val.join("\n")}\n`;
    try {
      const currentIndex = fs.readFileSync(path.join(process.cwd(), `${key}/index.ts`), {
        encoding: "utf-8",
      });
      if (currentIndex !== content) {
        fs.writeFileSync(path.join(process.cwd(), `${key}/index.ts`), content);
      }
    } catch (err) {
      fs.writeFileSync(path.join(process.cwd(), `${key}/index.ts`), content);
    }
  });
};*/

/*
const watchExports = () => {
  const fileContent = findFiles("_sections");
  Object.entries(fileContent).forEach(([key, val]) => {
    const content = `${val.join("\n")}\n`;
    try {
      const currentIndex = fs.readFileSync(path.join(process.cwd(), `${key}/index.ts`), {
        encoding: "utf-8",
      });
      if (currentIndex !== content) {
        fs.writeFileSync(path.join(process.cwd(), `${key}/index.ts`), content);
      }
    } catch (err) {
      fs.writeFileSync(path.join(process.cwd(), `${key}/index.ts`), content);
    }
  });
  console.log("components exports updated");
};

watch(path.join(process.cwd(), "_sections"), { recursive: true }, async (evt, name) => {
  if (!name.match(/\.(ts|tsx|s?css)$/)) return;
  if (name.match(/index\.ts/)) return;
  if (name.match(/^_/)) return;

  watchExports();
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
  processFolder("_sections");

  console.log(`Models updated: ${result.data} - ${Date.now() - startTime}ms`);
});
*/
