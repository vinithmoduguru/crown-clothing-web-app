import ShoppingBag from "../../assets/shopping-bag.svg?react";
import { useCartContext } from "../../context/cartContext";

export default function CartIcon() {
  const { cartItems } = useCartContext();
  const itemQuantity = cartItems?.length ?? 0;
  return (
    <div className="size-11 flex items-center justify-center relative cursor-pointer ">
      <ShoppingBag className="size-6" />
      <span className="absolute bottom-3 font-bold text-[10px]">
        {itemQuantity}
      </span>
    </div>
  );
}
