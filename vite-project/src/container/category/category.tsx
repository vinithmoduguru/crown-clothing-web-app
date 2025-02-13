import { useParams } from "react-router";
import { useProducts } from "../Home/shop/shop-services";
import { Loader2 } from "lucide-react";
import ProductCard from "../product-card/ProductCard";

export default function Category() {
  const { category } = useParams();
  const { data, isPending } = useProducts(`categoryId=${category}`);

  return isPending ? (
    <Loader2 className="animate-spin" />
  ) : (
    <>
      <h2 className="text-3xl mb-6 text-center">
        {data?.[0]?.categoryId?.title.toUpperCase()}
      </h2>
      <div className="grid grid-cols-4 gap-x-5 gap-y-12">
        {data?.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </>
  );
}
