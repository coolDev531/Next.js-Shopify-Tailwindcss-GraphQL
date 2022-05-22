import { generateSections, generateSectionsTypes } from "_server/scripts/generate-sections";
import type { NextApiRequest, NextApiResponse } from "next";

type RunScriptsFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export const RunScripts: RunScriptsFunction = async (req, res) => {
  if (req.headers["local-auth"] !== process.env.SCRIPT_SECRET) {
    return res.status(401).json("unauthorized");
  }
  generateSections();
  generateSectionsTypes();
  res.status(200).json("success");
};

export default RunScripts;
