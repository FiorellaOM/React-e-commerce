import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

const Order = (orderedItems) => {
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [order, setOrder] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    items: [],
    date: "",
    total: 0,
  });

  const handleInputChange = (event) => {
    setBuyer({
      ...buyer,
      [event.target.name]: event.target.value,
    });

    updateOrder();
  };

  const updateOrder = () => {
    setOrder({
      ...order,
      buyer: buyer,
      items: orderedItems.items,
      date: new Date().toISOString(),
      total: orderedItems.total,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("confirmModal").checked = false;
    const isInvalid = Object.values(order).every((x) => x === null || x === "");
    if (!isInvalid) {
      const db = getFirestore();
      const orderCollection = collection(db, "orders");
      addDoc(orderCollection, order)
        .then(({ id }) => {
          console.log("Success", id);
        })
        .catch((error) => {
          console.log("error");
        });
    }
  };

  return (
    <div className="background">
      <label htmlFor="confirmModal" className="btn modal-button">
        Confirm Purchase
      </label>

      <input type="checkbox" id="confirmModal" className="modal-toggle" />
      <label htmlFor="confirmModal" className="modal cursor-pointer">
        <label className="modal-box relative">
          <h3 className="text-lg font-bold m-5">Complete your data</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name..."
              name="name"
              className="input input-bordered input-primary w-full max-w-xs m-3"
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email..."
              name="phone"
              className="input input-bordered input-primary w-full max-w-xs m-3"
              onChange={handleInputChange}
            />
            <input
              type="number"
              placeholder="Phone..."
              name="email"
              className="input input-bordered input-primary w-full max-w-xs m-3"
              onChange={handleInputChange}
            />
            <button type="submit" value="Submit" className="btn">
              Complete purchase!
            </button>
          </form>
        </label>
      </label>
    </div>
  );
};
export default Order;
