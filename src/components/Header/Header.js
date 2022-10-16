import NavBar from "./NavBar";
import logoPanda from "../../assets/svg/pandaLogo.svg";

const Header = () => {
  return (
    <nav
      className="header shadow-md flex flex-row justify-between"
      style={{ color: "#353535" }}
    >
      <img
        className="m-2"
        alt="Pick your Panda Logo"
        src={logoPanda}
        style={{ height: "40px", width: "100" }}
      />

      <NavBar />
    </nav>
  );
};
export default Header;
