import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="flex flex-row align-middle items-center gap-3">
      <ul className="flex flex-row gap-5">
        <li className="font-bold text-primary text-md ">
          <NavLink to={"/"}>Store</NavLink>
        </li>
        <li className="font-bold text-primary text-md ">
          <NavLink to={"./aboutus"}>About us</NavLink>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};
export default NavBar;
