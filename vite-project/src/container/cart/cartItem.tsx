import type { CartItem } from "../../context/cartContext";

interface CartItemProps {
  cartItem: CartItem;
}

export default function CartItem({ cartItem }: CartItemProps) {
  return (
    <div className="w-full flex h-[80px] mb-[15px]">
      <img className="w-[30%]" src={cartItem.imageUrl} alt={cartItem.title} />
      <div className="w-[70%] flex flex-col items-start justify-center px-[20px] py-[10px]">
        <span>{cartItem.title}</span>
        <span className="price">
          {cartItem.quantity} x ₹{cartItem?.price}
        </span>
      </div>
    </div>
  );
}
