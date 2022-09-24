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
      cloneProduct.map((current) =>
        current.slug === product.slug
          ? { ...current, quantity: current.quantity + quantity }
          : current
      );
    } else {
      const cloneProduct = { ...product, quantity };
      setProducts((previous) => previous.concat(cloneProduct));
    }
  };

  const removeItem = (product) => {
    return setProducts(products.filter((item) => item.slug !== product.slug));
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

  /* const updateState = (product, state) => {
    const cloneProduct = [...product];
    const updateProduct = cloneProduct.map((current) => {
      if (current.slug === product.slug) {
        return { ...current, state: state ? true : false };
      } else {
        return current;
      }
    });

    setProducts(updateProduct);
  }; */

  return (
    <CartContext.Provider
      value={{
        products,
        findDuplicate,
        addItem,
        removeItem,
        clear,
        currentItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
