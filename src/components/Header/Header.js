import "./Header.css";
import CartWidget from "./CartWidget";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <nav className="header" style={{ color: "#353535" }}>
      <NavBar />
      <CartWidget />
    </nav>
  );
};
export default Header;
