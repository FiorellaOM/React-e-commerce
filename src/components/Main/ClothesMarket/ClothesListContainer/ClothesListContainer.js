import "./ClothesListContainer.css";
import { useEffect, useState } from "react";
import ClothesList from "../ClothesList/ClothesList";
import clothesJson from "../../../../assets/json/store.json";
import panda from "../../../../assets/img/panda.png"

const ClothesListContainer = ({ greeting }) => {
  const [clothes, setClothes] = useState([]);
  const getClothes = (data, time) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("Error");
        }
      }, time);
    });

  useEffect(() => {
    getClothes(clothesJson, 1000)
      .then((res) => {
        setClothes(res);
      })
      .catch((err) =>
        console.log(err, "No se pudo recuperar el elemento seleccionado")
      );
  }, []);

  return (
    <div className="container">
      <span className="greeting flex justify-center items-center">
        <img
          src={panda}
          alt="Panda Icon"
          style={{ width: "60px", height: "100", margin: "2rem"}}
        />
        {greeting}{" "}
      </span>
      <ClothesList clothes={clothes} />
    </div>
  );
};
export default ClothesListContainer;
