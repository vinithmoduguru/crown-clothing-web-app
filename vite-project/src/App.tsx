import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router";
import Navigation from "./container/Home/Navigation";

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
            <Route path="/" element={<Navigation />}></Route>
          </Routes>
        </BrowserRouter>
      </SignedIn>
    </header>
  );
}
