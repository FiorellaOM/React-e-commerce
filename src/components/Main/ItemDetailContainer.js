import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    getItem(slug);
  }, [slug]);

  const getItem = (param) => {
    const db = getFirestore();
    const ref = doc(db, "pandas", param.toString());

    getDoc(ref).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data() });
      } else {
        Swal.fire({
          title: "Error!",
          text: "No pandas were found :(",
          confirmButtonText: "Sad..",
          background: "#E2E1CA",
          color: "black",
          confirmButtonColor: "#97EAB9",
        }).then(function () {
          window.location = "/";
        });
      }
    });
  };
  return item.id ? <ItemDetail item={item} key={item.id} /> : <Spinner />;
};
export default ItemDetailContainer;
