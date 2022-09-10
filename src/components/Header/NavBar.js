import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="navHead">
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"./about"}>About us</NavLink>
      </li>
      <li>
        <NavLink to={"./products"}>Our Products</NavLink>
      </li>
      <li>
        <NavLink to={"./pandas"}>Pick your Panda</NavLink>
      </li>
      <li>
        <NavLink to={"./contact"}>Contact us</NavLink>
      </li>
    </ul>
  );
};
export default NavBar;
