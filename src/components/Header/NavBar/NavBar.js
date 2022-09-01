import "./NavBar.css"

const NavBar = () => {
  return (
    <ul className="navHead">
      <li>
        <a href="./">Home</a>
      </li>
      <li>
        <a href="./about">About us</a>
      </li>
      <li>
        <a href="./products">Our Products</a>
      </li>
      <li>
        <a href="./pandas">Pick your Panda</a>
      </li>
      <li>
        <a href="./contact">Contact us</a>
      </li>
    </ul>
  );
};
export default NavBar;
