import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="navHead">
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"./shop/china"}>Born in China</NavLink>
      </li>
      <li>
        <NavLink to={"./shop/myanmar"}>Born in Myanmar</NavLink>
      </li>
      <li>
        <NavLink to={"./shop/vietnam"}>Born in Vietnam</NavLink>
      </li>
      <li>
        <NavLink to={"./contact"}>Contact us</NavLink>
      </li>
    </ul>
  );
};
export default NavBar;
