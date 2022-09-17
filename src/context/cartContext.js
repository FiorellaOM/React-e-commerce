import { useContext } from "react";
import { createContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
  const [product, setProduct] = useState([]);

  const findDuplicate = (product) => {
    product.some((dup) => dup.slug === product.slug);
  };

  const addItem = (product, quantity) => {
    if(findDuplicate(product)) {
        console.log("Existe")
    } else { 
        setProduct((previous)=> previous.concat(product));
    }
  };

  const removeItem = (product) => {
    return setProduct(product.filter(item => item.slug !== product.slug )) 
  };

  const clear = () => {
    setProduct([]);
  };

  /* const onCart = () => {
    const onCart = product.reduce(
      (counter, product) => (product ? counter + 1 : counter),
      0
    );
    return onCart;
  };
   */
  const updateState = (product, state) => {
    const cloneProduct = [...product];
    const updateProduct = cloneProduct.map((current)=> {
        if(current.slug === product.slug) {
            return {...current, state: state ? true : false} 
        } else {
            return current;
        }     
    }) 

    setProduct(updateProduct);
  }

  return (
    <CartContext.Provider value={{product, findDuplicate, addItem, removeItem, clear, updateState }}>{children}</CartContext.Provider>
  );
};
