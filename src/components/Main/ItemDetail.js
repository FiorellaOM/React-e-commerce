import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import ItemCount from "./Item/ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { addItem } = useCartContext();
  const [addedItems, setAddedItems] = useState();

  const onAdd = (quantity) => {
    setAddedItems(quantity);
    addItem(item, quantity);
  };

  return (
    <div className="hero min-h-screen background">
      <div className="hero-content gap-x-20 flex-col lg:flex-row">
        <img
          src={item.img}
          alt="Item"
          className="max-w-sm m-3 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{item.title}</h1>
          <p className="py-6">{item.description}</p>
          <h3 className="text-xl text-secondary">{item.price}</h3>
          {addedItems > 0 ? (
            <Link className="btn btn-primary rounded my-10" to={"/cart"}>
              Go to cart...
            </Link>
          ) : (
            <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />
          )}
          {item.stock && !addedItems && <p className="text-md italic"> {item.stock} cuties left!</p>}
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
