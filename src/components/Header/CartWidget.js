import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/svg/cart.svg";
import { useCartContext } from "../../context/cartContext";

const CartWidget = () => {
  const { currentItems } = useCartContext();

  return (
    <div className="indicator">
      <Link
        className={`${
          currentItems() > 0
            ? "btn btn-circle btn-outline"
            : "btn btn-circle btn-disabled"
        }`}
        to={"/cart"}
      >
        {currentItems() > 0 && (
          <span className="indicator-item badge badge-primary">
            {currentItems()}
          </span>
        )}

        <img
          src={logo}
          alt="Shopping Cart"
          style={{ width: "20px", height: "100" }}
        />
      </Link>
    </div>
  );
};
export default CartWidget;
