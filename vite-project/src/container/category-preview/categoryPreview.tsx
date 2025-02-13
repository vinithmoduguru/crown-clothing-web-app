import { Link } from "react-router";
import { Product } from "../Home/shop/shop-services";
import ProductCard from "../product-card/ProductCard";

interface CategoryPreviewProps {
  title: string;
  products: Product[];
}

export default function CategoryPreview({
  title,
  products,
}: CategoryPreviewProps) {
  return (
    <div className="flex flex-col mb-7">
      <h2>
        <Link
          className="text-2xl cursor-pointer uppercase"
          to={`/shop/${title}`}
        >
          {title}
        </Link>
      </h2>
      <section className="grid grid-cols-4 gap-5">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </section>
    </div>
  );
}
