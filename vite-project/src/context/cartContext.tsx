import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export type CartItem = {
  product_id: string;
  quantity: number;
};

interface CartContextType {
  cartItems?: CartItem[];
  addItemToCart: (product_id: string) => void;
  removeCartItem: (product_id: string) => void;
  decreaseCartItem: (product_id: string) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cartItems", []);

  const addItemToCart = (product_id: string) => {
    // Find if cartitem already exists
    const existingCartItem = cartItems?.find(
      (cartItem) => cartItem.product_id === product_id
    );
    let updatedCartItems: CartItem[];
    if (existingCartItem) {
      updatedCartItems =
        cartItems?.map((cartItem) =>
          cartItem.product_id === product_id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ) ?? [];
    } else {
      updatedCartItems = [...(cartItems ?? []), { product_id, quantity: 1 }];
    }
    // If not, append new product to cart
    setCartItems(updatedCartItems);
  };

  const decreaseCartItem = (product_id: string) => {
    // Find if cartitem already exists
    const existingCartItem = cartItems?.find(
      (cartItem) => cartItem.product_id === product_id
    );
    if (existingCartItem?.quantity === 1) {
      return removeCartItem(product_id);
    }
    // If not, decrement the product from cart
    const updatedCartItems = cartItems?.map((cartItem) =>
      cartItem.product_id === product_id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCartItems(updatedCartItems);
  };

  const removeCartItem = (product_id: string) => {
    const updatedCartItems = cartItems?.filter(
      (cartItem) => cartItem.product_id !== product_id
    );
    setCartItems(updatedCartItems);
  };

  const contextValue: CartContextType = {
    cartItems,
    addItemToCart,
    removeCartItem,
    decreaseCartItem,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
