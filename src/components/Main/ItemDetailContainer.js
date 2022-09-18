import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import clothesJson from "../../assets/json/store.json";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    getItem(clothesJson, slug).then((data) => {
      if (data) {
        setItem(data);
      }
    });
  }, [slug]);

  const getItem = (data, slug) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.find((p) => p.slug === slug));
      }, 2000);
    });
  };

  return <ItemDetail item={item} />;
};
export default ItemDetailContainer;
