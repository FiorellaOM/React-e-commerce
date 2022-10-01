import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import panda from "../../assets/img/panda.png";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { param } = useParams();

  const getItems = () => {
    const db = getFirestore();
    const itemCollection = collection(db, "pandas");
    getDocs(itemCollection).then((snapshot) => {
      const res = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setItems(res);
    });
  };

  const filterItems = (param) => {
    const db = getFirestore();
    const filteredQuery = query(
      collection(db, "pandas"),
      where('birthplace', '==', param.toUpperCase())
    );

    getDocs(filteredQuery).then((snapshot) => {
    if(snapshot.size === 0) console.log("no pandas found :(");
      const res = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setItems(res);
    });
    
  };

  useEffect(() => {
    param ? filterItems(param) : getItems();
  }, [param]);

  return (
    <div className="container">
      <span className="greeting flex justify-center items-center">
        <img
          src={panda}
          alt="Panda Icon"
          style={{ width: "60px", height: "100", margin: "2rem" }}
        />
        {greeting}{" "}
      </span>
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
