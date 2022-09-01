import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(0);
  const s = parseInt(stock);

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
          disabled={counter === 0}
          onClick={minus}
          className="btn btn-primary rounded"
        >
          -
        </button>
        <strong className="m-2">{counter}</strong>
        <button
          disabled={counter === s}
          onClick={plus}
          className="btn btn-primary rounded"
        >
          +
        </button>
      </div>
      <button disabled={!(counter > 0)} className="btn btn-primary rounded">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
