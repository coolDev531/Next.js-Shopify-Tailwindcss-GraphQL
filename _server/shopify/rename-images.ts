import fs from "fs";
import { _Product } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export async function renameImages(products) {
  const updatedProducts = products;
  for (let i = 0; i < updatedProducts.length; i++) {
    const product = updatedProducts[i] as unknown as _Product;

    for (let j = 0; j < product.images.length; j++) {
      const image = product.images[j];
      const filename = image.src.split("/").at(-1).split("?")[0];
      const imageFile = fs.existsSync(`data-backup/files/${filename}`);
      if (!imageFile) {
        // console.log(`image not found`, filename);
        console.log(image.src);
      }
      if (imageFile) {
        const newFileName = `product_${product.handle}_${j + 1}.${filename.split(".").at(-1)}`;
        fs.copyFileSync(`data-backup/files/${filename}`, `data-backup/files/${newFileName}`);
        updatedProducts[i].images[j].src = `https://hydrobiz.vercel.app/${newFileName}`;
      }
    }
    if (product.image) {
      const filename = product.image.src.split("/").at(-1).split("?")[0];
      const imageFile = fs.existsSync(`data-backup/files/${filename}`);
      if (!imageFile) {
        // console.log(`image not found`, filename);
        console.log("product.image", product.image.src);
      }
      if (imageFile) {
        const imagesIndex = product.images.findIndex(
          ({ src }) =>
            src.split("/").at(-1).split("?")[0] ===
            product.image.src.split("/").at(-1).split("?")[0]
        );
        const newFileName = `product_${product.handle}_${imagesIndex + 1}.${filename
          .split(".")
          .at(-1)}`;
        // fs.copyFileSync(`data-backup/files/${filename}`, `data-backup/files/${newFileName}`);
        updatedProducts[i].image.src = `https://hydrobiz.vercel.app/${newFileName}`;
      }
    }
  }
}
