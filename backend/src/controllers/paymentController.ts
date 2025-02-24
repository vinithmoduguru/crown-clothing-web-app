import { Request, Response } from "express";
import { IProduct } from "../models/productModel";
import Stripe from "stripe";

export const createPayment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { products }: any = req.body;

    const lineItems = (products as (IProduct & { quantity: number })[]).map(
      (product) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title,
            images: [product.imageUrl],
          },
          unit_amount: product.price * 100,
        },
        quantity: product.quantity,
      })
    );
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.APP_URL}/payment/success`,
      cancel_url: `${process.env.APP_URL}/payment/cancel`,
    });
    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
