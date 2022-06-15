const fs = require("fs");

const files = fs.readdirSync("public/icons");
const contentArray = [];
files.forEach((filename) => {
  const file = fs.readFileSync(`public/icons/${filename}`, { encoding: "utf-8" });
  contentArray.push(file);
});

fs.writeFileSync("public/icons/all.svg", contentArray.join("\n\n\n"));
