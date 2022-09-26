import { useContext } from "react";
import { createContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const findDuplicate = (product) => {
    return products.some((dup) => dup.slug === product.slug);
  };

  const addItem = (product, quantity) => {
    if (findDuplicate(product)) {
      const cloneProduct = [...products];
      const updatedProducts = cloneProduct.map((current) =>
        current.slug === product.slug
          ? { ...current, quantity: current.quantity + quantity }
          : current
      );
      setProducts(updatedProducts);
    } else {
      const cloneProduct = { ...product, quantity };
      setProducts((previous) => previous.concat(cloneProduct));
    }
  };

  const substractItem = (product) => {
    if (findDuplicate(product)) {
      const cloneProduct = [...products];
      const updatedProducts = cloneProduct.map((current) =>
        current.slug === product.slug
          ? { ...current, quantity: current.quantity - 1 }
          : current
      );
      setProducts(updatedProducts);
    }
  };

  const removeItem = (product) => {
    setProducts(products.filter((item) => item.slug !== product.slug));
  };

  const clear = () => {
    setProducts([]);
  };

  const currentItems = () => {
    const current = products.reduce(
      (acum, product) =>
        product.quantity > 0 ? acum + product.quantity : acum,
      0
    );
    return current;
  };

  return (
    <CartContext.Provider
      value={{
        products,
        findDuplicate,
        addItem,
        substractItem,
        removeItem,
        clear,
        currentItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
