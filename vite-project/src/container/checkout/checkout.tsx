import { Loader2, Plus, Minus } from "lucide-react";
import { CartItem, useCartContext } from "../../context/cartContext";
import { useProducts } from "../Home/shop/shop-services";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Button } from "../../components/ui/button";

export default function Checkout() {
  const { cartItems, removeCartItem, addItemToCart, decreaseCartItem } =
    useCartContext();

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
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItemsData.map((product) => (
            <TableRow key={product.product_id}>
              <TableHead>
                <img
                  className="size-16"
                  src={product.imageUrl}
                  alt={product.title}
                />
              </TableHead>
              <TableHead>{product.title}</TableHead>
              <TableHead className="text-lg">
                <Button
                  variant={"inverted"}
                  size={"icon"}
                  onClick={() => addItemToCart(product.product_id)}
                >
                  <Plus />
                </Button>
                <span className="mx-2 text-lg">{product.quantity}</span>
                <Button
                  size={"icon"}
                  variant={"inverted"}
                  onClick={() => decreaseCartItem(product.product_id)}
                >
                  <Minus />
                </Button>
              </TableHead>
              <TableHead>{product.price ?? 0 * product.quantity}</TableHead>
              <TableHead>
                <Button onClick={() => removeCartItem(product.product_id)}>
                  Remove
                </Button>
              </TableHead>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
