import "./Cart.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import Order from "./Order";
import { useCallback, useEffect, useState } from "react";

const Cart = () => {
  const { products, addItem, substractItem, removeItem, clear } =
    useCartContext();

  const [total, setTotal] = useState(0);
  const [orderItems, setOrderItems] = useState([]);

  const plus = (product) => {
    addItem(product, 1);
  };

  const minus = (product) => {
    substractItem(product);
  };

  const remove = (product) => {
    removeItem(product);
  };

  const clearCart = () => {
    clear();
  };

  const calculateTotal = useCallback(() => {
    let sum = 0;
    products.forEach((product) => {
      sum = sum + parseInt(product.price.split("USD")) * product.quantity;
    });

    setTotal(sum);

    return sum;
  }, [products]);

  const calculateItems = useCallback(() => {
    const orderItems = [];
    products.forEach((product) => {
      orderItems.push({
        id: product.id,
        title: product.title,
        price: product.price,
      });
    });

    setOrderItems(orderItems);
  }, [products]);

  useEffect(() => {
    calculateItems();
    calculateTotal();
  }, [calculateItems, calculateTotal]);

  return (
    <div className="background">
      <div className="flex flex-row justify-between m-5">
        <h3 className="title text-2xl font-bold">Cart</h3>
        <button className="italic" onClick={() => clearCart()}>
          Clear cart
        </button>
      </div>
      <hr className="mt-4 mb-4 border-primary"></hr>
      {products.length ? (
        products.map((product) => {
          return (
            <div>
              <div className="cartProduct">
                <div className="avatar flex-none">
                  <div className="w-24 rounded-full">
                    <img
                      className="avatar rounded-full"
                      src={product.img}
                      alt={product.title}
                    />
                  </div>
                </div>
                <div className="flex-auto">
                  <h3 className="text-lg">{product.title}</h3>
                  <div className="flex-auto productData">
                    <button
                      className="flex-none btn btn-circle btn-outline"
                      onClick={() => minus(product)}
                    >
                      -
                    </button>
                    <span className="flex-none">{product.quantity}</span>
                    <button
                      className="flex-none btn btn-circle btn-outline"
                      onClick={() => plus(product)}
                    >
                      +
                    </button>
                    <span>
                      {parseInt(product.price.split("USD")) * product.quantity +
                        " USD"}
                    </span>
                    <button
                      className="flex-none btn btn-circle btn-outline"
                      onClick={() => remove(product)}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
              <hr className="mt-4 mb-4 border-primary"></hr>
            </div>
          );
        })
      ) : (
        <div className="m-4">
          <p className="text-lg	m-4">The cart is empty</p>
          <Link className="btn btn-primary" to={"/"}>
            Go back
          </Link>
        </div>
      )}
      <span className="text-lg	m-4">Total: {total} USD</span>
      <Order items={orderItems} total={total}></Order>
    </div>
  );
};
export default Cart;
