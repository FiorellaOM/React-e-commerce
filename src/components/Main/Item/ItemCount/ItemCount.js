import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [counter, setCounter] = useState(Number(initial));

  const plus = () => {
    setCounter(counter + 1);
  };

  const minus = () => {
    setCounter(counter - 1);
  };

  const onAdd = () => {
    //console.log(counter);
    //window.addEventListener("onAdd", onAdd);
    return counter;
  };

  return (
    <div>
      <div className="m-5">
        <button
          disabled={counter === Number(initial)}
          onClick={minus}
          className="btn btn-primary rounded"
        >
          -
        </button>
        <strong className="m-2">{counter}</strong>
        <button
          disabled={counter === Number(stock)}
          onClick={plus}
          className="btn btn-primary rounded"
        >
          +
        </button>
      </div>
      <button
        onClick={onAdd}
        disabled={counter < Number(initial)}
        className="btn btn-primary rounded"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
