import { Loader2 } from "lucide-react";
import { CartItem, useCartContext } from "../../context/cartContext";
import { useProducts } from "../Home/shop/shop-services";
import CartItemPreview from "./cartItem";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router";

export default function CartDropdown() {
  const { cartItems } = useCartContext();
  const navigate = useNavigate();

  // Extract product IDs from cart items
  const productIds = cartItems?.map((item) => item.product_id).join(",");

  // Fetch products based on product IDs
  const { data: products, isLoading } = useProducts(
    productIds ? `productIds=${productIds}` : ""
  );

  if (isLoading) {
    return <Loader2 className="h-10 w-10 animate-spin" />;
  }

  // Safely map products to cart items
  const cartItemsData: CartItem[] =
    products?.map((product) => {
      const cartItem = cartItems?.find(
        (item) => item.product_id === product._id
      );
      return {
        product_id: product._id,
        title: product.title,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: cartItem?.quantity ?? 0,
      };
    }) || [];

  return (
    <div className="absolute w-[240px] h-[340px] flex flex-col p-5 border border-black bg-white top-[90px] right-[40px] z-[5]">
      <div className="flex flex-col h-[240px] overflow-scroll">
        {cartItemsData.length > 0 ? (
          cartItemsData.map((product) => (
            <CartItemPreview key={product.product_id} cartItem={product} />
          ))
        ) : (
          <p className="text-center text-gray-500">No items in cart</p>
        )}
      </div>
      <Button className="mt-auto" onClick={() => navigate("/checkout")}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
}
