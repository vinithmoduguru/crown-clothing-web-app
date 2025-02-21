import { Link, Outlet } from "react-router";
import CrwnLogo from "../../assets/crown.svg";
import CartIcon from "../cart/cartIcon";

export default function Navigation() {
  return (
    <>
      <header className="flex h-[70px] justify-between w-full mb-6">
        <Link to="/" className="h-full w-[70px]">
          <img src={CrwnLogo} alt="Crown Logo" />
        </Link>
        <div className="flex align-middle justify-end h-full w-1/2">
          <Link to="/shop" className="cursor-pointer px-3 py-2">
            SHOP
          </Link>
          <CartIcon />
        </div>
      </header>
      <Outlet />
    </>
  );
}
