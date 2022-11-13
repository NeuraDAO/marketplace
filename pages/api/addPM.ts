// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  accountLink: any;
  account: any;
};
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
/**
 * This function integrates with stripe, its used to add a payment method from stripe to a customer on creation
 *
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // TODO: add the acocunt to the info on the database and return the url
  const account = await stripe.accounts.create({ type: "express" });
  const accountLink = await stripe.accountLinks.create({
    account: account.id,
    refresh_url: `${process.env.FRONTEND_URL}/reauth`,
    return_url: `${process.env.FRONTEND_URL}`,
    type: "account_onboarding",
  });
  res.status(200).json({ accountLink, account });
}
