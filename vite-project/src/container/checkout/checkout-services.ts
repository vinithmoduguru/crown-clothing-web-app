import { CartItem } from "../../context/cartContext";

export const createPaymentIntent = async (products: CartItem[]) => {
  const res = await fetch("/api/payment/create-payment-intent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ products }),
  });
  const data = await res.json();
  return data;
};
