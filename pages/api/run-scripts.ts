import type { NextApiRequest, NextApiResponse } from "next";

type RunScriptsFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export const RunScripts: RunScriptsFunction = async (req, res) => {
  if (req.headers["local-auth"] !== process.env.SCRIPT_SECRET) {
    return res.status(401).json("unauthorized");
  }
  try {
    console.log("asd");
  } catch (err) {
    console.log(err.message);
  }
  res.status(200).json("success");
};

export default RunScripts;
