import * as fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

type CrawlHeyCarsonFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export const CrawlHeyCarson: CrawlHeyCarsonFunction = async (req, res) => {
  const data = await (
    await fetch(`https://api.heycarson.com/v1/website-catalog?type=popular&page_size=300&page=1`)
  ).json();

  fs.writeFileSync("./hey-carson.json", JSON.stringify(data, null, 2));
  return res.status(200).json(data);
};

export default CrawlHeyCarson;
