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
  //  first step: get the dataset information from the body
  //   const body = JSON.parse(req.body);
  //   TODO: add metadata checking
  const body = req.body;
  //   TODO: ownerId should be from jwt
  if (!body || !body.metadata || !body.ownerId) {
    return res.status(400).json({
      success: false,
      error: "Missing dataset ID or Dataset metadata in body",
    });
  }
  const { metadata } = body;
  // second step: create the price in stripe
  const price = await stripe.prices.create({
    // note: unit must be in cents
    unit_amount: metadata.priceUSD * 100,
    currency: "usd",
    product_data: {
      name: metadata.name,
    },
  });
  // third step: add the price ID to the dataset in supabase
  const supabaseRes = await supabase
    .from("metadata")
    .insert({ owner: body.ownerId, ...metadata, priceId: price.id });

  res.status(200).json({ price, supabaseRes });
}
