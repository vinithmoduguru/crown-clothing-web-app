import { Button } from "../../components/ui/button";
import { Product } from "../Home/shop/shop-services";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { imageUrl, price, title } = product;

  return (
    <section className="flex flex-col items-center h-[350px] w-full relative group">
      <img
        src={imageUrl}
        alt={title}
        className="object-cover w-full h-[334px] mb-1 group-hover:opacity-80"
      />
      <footer className="flex justify-between w-full text-lg h-4">
        <span className="mb-4">{title}</span>
        <span>${price}</span>
      </footer>
      <Button variant={"inverted"}  className="rounded-none absolute top-[255px] w-[80%] opacity-70 hidden text-sm group-hover:opacity-85 group-hover:flex">
        ADD TO CART
      </Button>
    </section>
  );
}
