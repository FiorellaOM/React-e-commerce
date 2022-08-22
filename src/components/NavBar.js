import CartWidget from "./CartWidget"

const NavBar = () => {
    
  return (
    <div className="navHead" style={{color: "#353535"}}>
        <li><a href="./">Home</a></li>
        <li><a href="./about">About us</a></li>
        <li><a href="./products">Our Products</a></li>
        <li><a href="./pandas">Pick your Panda</a></li>
        <li><a href="./contact">Contact us</a></li>
        <CartWidget/>
    </div>
  )
}
export default NavBar