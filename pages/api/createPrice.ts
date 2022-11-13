// TODO: check if jwt is the same as the owner in the database
// Given a dataset id, create the price in stripe and add it into supabase
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabase } from "../../utils/supabase";

type Data = {
  accountLink: any;
  account: any;
  success?: boolean;
  error?: string;
};
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const supabase = getSupabase();
/**
 * creates a price object from a dataset and adds the price ID to the dataset in supabase
 *
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //  first step: get the dataset information from supabase
  //   const body = JSON.parse(req.body);
  const body = req.body;
  if (!body && !body.datasetId) {
    return res
      .status(400)
      .json({ success: false, error: "Missing dataset ID in body" });
  }
  // get dataset from supabase
  const { data: dataset } = await supabase
    .from("metadata")
    .select("*")
    .eq("id", body.datasetId)
    .single();
  // second step: create the price in stripe
  const price = await stripe.prices.create({
    unit_amount: dataset.priceUSD * 100,
    currency: "usd",
    // recurring: false,
    product_data: {
      name: dataset.name,
    },
  });
  // third step: add the price ID to the dataset in supabase
  const supabaseRes = await supabase
    .from("metadata")
    .update({ priceId: price.id })
    .eq("id", body.datasetId);
  res.status(200).json({ price, supabaseRes });
}
