import { CartItem } from "../../context/cartContext";

const API_URL = import.meta.env.VITE_BACKEND_ENDPOINT;

export const createPaymentIntent = async (products: CartItem[]) => {
  const res = await fetch(`${API_URL}/api/payment/create-payment-intent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ products }),
  });
  const data = await res.json();
  return data;
};
