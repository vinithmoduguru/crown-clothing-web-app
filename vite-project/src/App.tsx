import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router";
import Navigation from "./container/Home/Navigation";
import Home from "./container/Home/Home";
import Shop from "./container/Home/shop/Shop";

export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="shop/*" element={<Shop />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SignedIn>
    </header>
  );
}
