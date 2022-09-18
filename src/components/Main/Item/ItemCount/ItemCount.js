import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(Number(initial));

  const plus = () => {
    setCounter(counter + 1);
  };

  const minus = () => {
    setCounter(counter - 1);
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
        onClick={() => onAdd(counter)}
        disabled={counter < Number(initial)}
        className="btn btn-primary rounded"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
