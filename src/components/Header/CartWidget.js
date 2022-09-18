import logo from "../../assets/svg/cart.svg";
import { useCartContext } from "../../context/cartContext";

const CartWidget = () => {
  const { currentItems } = useCartContext();

  return (
    <div>
      <img
        src={logo}
        alt="Shopping Cart"
        style={{ width: "20px", height: "100" }}
      />
      {currentItems() > 0 && <span>{currentItems()}</span>}
    </div>
  );
};
export default CartWidget;
