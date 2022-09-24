import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import clothesJson from "../../assets/json/store.json";
import panda from "../../assets/img/panda.png";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { param } = useParams();

  const getItems = (data, time) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("Error");
        }
      }, time);
    });

  const filterItems = (data, param) => {
    const filteredData = data.filter(
      (panda) => panda.birthplace.toUpperCase() === param.toUpperCase()
    );
    setItems(filteredData);
  };

  useEffect(() => {
    getItems(clothesJson, 1000)
      .then((res) => {
        param ? filterItems(res, param) : setItems(res);
      })
      .catch((err) =>
        console.log(err, "No se pudo recuperar el elemento seleccionado")
      );
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
