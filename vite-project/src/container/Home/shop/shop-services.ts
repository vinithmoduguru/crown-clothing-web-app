import { useQuery } from "@tanstack/react-query";

export type Category = {
  _id: string;
  title: string;
  imageUrl: string;
};

export type Product = {
  _id: string;
  title: string;
  imageUrl: string;
  categoryId: Pick<Category, "_id" | "title">;
  price: number;
};

const API_URL = import.meta.env.VITE_BACKEND_ENDPOINT;

console.log(API_URL);

export const getCategories = async () => {
  const res = await fetch(`${API_URL}/api/categories`);
  const data = await res.json();
  return data as Category[];
};

export const getProducts = async (params?: string) => {
  const res = await fetch(`${API_URL}/api/products${params ? `?${params}` : ""}`);
  const data = await res.json();
  return data as Product[];
};

export const useProducts = (params?: string) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/api/products${params ? `?${params}` : ""}`);
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json() as Promise<Product[]>;
    },
    staleTime: 5 * 60 * 1000,
  });
};
