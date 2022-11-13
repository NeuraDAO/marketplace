// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { getSupabase } from "../../utils/supabase";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const supabase = getSupabase();

type Data = {
  accountLink: any;
  account: any;
};
/**
 * This function integrates with stripe, its used to add a payment method from stripe to a customer on creation
 *
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);
  if (!body.userId) return res.status(400).json({ error: "Missing user ID" });
  // check if user is in supabase, if not, add them
  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("auth_id", body.userId)
    .single();
  if (!user) {
    // create the user in the database
    const userRes = await supabase
      .from("users")
      .insert({ auth_id: body.userId });
  }
  // TODO: make update paymentmethod function
  // TODO: add the acocunt to the info on the database and return the url
  const account = await stripe.accounts.create({ type: "express" });
  const accountLink = await stripe.accountLinks.create({
    account: account.id,
    refresh_url: `${process.env.FRONTEND_URL}/settings`,
    return_url: `${process.env.FRONTEND_URL}`,
    type: "account_onboarding",
  });

  // add the accountId to the users row on supabaswe
  const { data: updatedUser } = await supabase
    .from("users")
    .update({ stripe_account: account.id })
    .eq("auth_id", body.userId)
    .single();
  res.status(200).json({ accountLink, account });
}
