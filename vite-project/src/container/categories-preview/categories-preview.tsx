import { useQuery } from "@tanstack/react-query";
import {
  getCategories,
  Product,
  useProducts,
} from "../Home/shop/shop-services";
import { Loader2 } from "lucide-react";
import CategoryPreview from "../category-preview/categoryPreview";

export default function CategoriesPreview() {
  const { data, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { data: products, isPending: isProductsPending } = useProducts();

  // Group products by category
  const groupedProducts = products?.reduce((acc, product) => {
    const category = acc.find((c) => c.title === product.categoryId.title);
    if (category) {
      category.products.push(product);
    } else {
      acc.push({ title: product.categoryId.title, products: [product] });
    }
    return acc;
  }, [] as { title: string; products: Product[] }[]);

  return isPending ? (
    <Loader2 className="animate-spin" />
  ) : (
    <>
      {data?.map((category) =>
        isProductsPending ? (
          <Loader2 key={category._id} className="animate-spin" />
        ) : (
          <CategoryPreview
            key={category._id}
            title={category.title}
            products={
              groupedProducts?.find((c) => c.title === category.title)
                ?.products ?? []
            }
          />
        )
      )}
    </>
  );
}
