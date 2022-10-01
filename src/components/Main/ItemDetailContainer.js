import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    getItem(slug);
  }, [slug]);

  const getItem = (param) => {
    const db = getFirestore();
    const filteredQuery = query(
      collection(db, "pandas"),
      where("slug", "==", param)
    );

    getDocs(filteredQuery).then((snapshot) => {
      if (snapshot.size === 0) console.log("no pandas found :(");
      const res = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setItem(res[0]);
    });
  };

  return <ItemDetail item={item} />;
};
export default ItemDetailContainer;
