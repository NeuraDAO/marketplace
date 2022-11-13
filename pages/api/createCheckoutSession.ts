// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { getSupabase } from "../../utils/supabase";

type Data = {
  name: string;
  success?: boolean;
};
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const supabase = getSupabase();
/**
 * This function integrates with stripe, creates a payment session for a customer
 *
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);
  if (!body && !body.datasetId && !body.accountId) {
    return res.status(400).json({ success: false });
  }
  // get dataset from supabase to get the price in USD
  const { data: dataset } = await supabase
    .from("metadata")
    .select("*")
    .eq("id", body.datasetId)
    .single();
  // TODO: add the acocunt to the info on the database and return the url
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: dataset.priceUSD,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.FRONTEND_URL}/success`,
    cancel_url: `${process.env.FRONTEND_URL}/failure`,
    payment_intent_data: {
      // TODO: change this amount
      application_fee_amount: 123,
      transfer_data: {
        destination: body.accountId,
      },
    },
  });
  res.status(200).json(session);
}
