import { BrowserRouter, Route, Routes } from "react-router";
import Navigation from "./container/Home/Navigation";
import Home from "./container/Home/Home";
import Shop from "./container/Home/shop/Shop";
import { CartProvider } from "./context/cartContext";
import Checkout from "./container/checkout/checkout";

export default function App() {
  return (
    <header>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="shop/*" element={<Shop />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </header>
  );
}
