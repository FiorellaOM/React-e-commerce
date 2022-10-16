import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import panda from "../../assets/svg/panda.svg";
import Swal from "sweetalert2";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

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
      where("birthplace", "==", param.toUpperCase())
    );

    getDocs(filteredQuery).then((snapshot) => {
      if (snapshot.size === 0) {
        Swal.fire({
          title: "Error!",
          text: "No pandas were found :(",
          confirmButtonText: "Sad..",
          background: "#E2E1CA",
          color: "black",
          confirmButtonColor:"#97EAB9"
        }).then(function () {
          window.location = "/";
        });
      }
      const res = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setItems(res);
    });
  };

  useEffect(() => {
    param ? filterItems(param) : getItems();
  }, [param]);

  return (
    <div>
      <div className="flex flex-row justify-center align-middle items-center min-h-max bg-primary p-6">
        <img src={panda} alt="Panda" style={{ height: "40%", width: 100 }} />
        <div className="flex flex-col">
          <span className="greeting justify-around text-white font-light italic text-4xl m-5">
            {greeting}{" "}
          </span>
          <span>
            We`ll help you adopt a panda!
            <br />
            (Just kidding... nothing shady over here).
          </span>
        </div>
      </div>
      <div className="flex flex-row align-middle items-center justify-center gap-3 m-5">
        <Link
          className="btn btn-primary rounded-3xl  text-white"
          to={"/shop/china"}
        >
          Born in China
        </Link>
        <Link
          className="btn btn-primary rounded-3xl text-white"
          to={"/shop/myanmar"}
        >
          Born in Myanmar
        </Link>
        <Link
          className="btn btn-primary rounded-3xl  text-white"
          to={"/shop/vietnam"}
        >
          Born in Vietnam
        </Link>
      </div>
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
