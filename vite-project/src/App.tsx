import { BrowserRouter, Route, Routes } from "react-router";
import Navigation from "./container/Home/Navigation";
import Home from "./container/Home/Home";
import Shop from "./container/Home/shop/Shop";
import { CartProvider } from "./context/cartContext";
import Checkout from "./container/checkout/checkout";
import PaymentCancel from "./container/payment/cancel";
import PaymentSucess from "./container/payment/success";
import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
  useAuth
} from "@clerk/clerk-react";

export default function App() {
  const { isSignedIn   } = useAuth();
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      {isSignedIn ? (
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="shop/*" element={<Shop />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="payment/cancel" element={<PaymentCancel />} />
                <Route path="payment/success" element={<PaymentSucess />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      ) : (
        <></>
      )}
    </header>
  );
}
