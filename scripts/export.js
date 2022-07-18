const fs = require("fs");
/*
const currentAssets = fs.readdirSync("development/assets");

currentAssets.forEach((file) => {
  if (/^_next/.test(file)) {
    console.log(file);
    fs.unlink(`development/assets/${file}`, (err) => {
      if (err) throw err;
      console.log("File deleted!");
    });
  }
});

const walk = function (dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = `${dir}/${file}`;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      /!* Recurse into a subdirectory *!/
      results = results.concat(walk(file));
    } else {
      /!* Is a file *!/
      results.push(file);
    }
  });
  return results;
};

const exportedFiles = walk(".export/_next/static");

exportedFiles.forEach((file) => {
  console.log(file);
  fs.copyFileSync(
    file,
    `development/assets/${file.replace(/^.export\//, "").replace(/\//gi, "-")}`
  );
});*/
