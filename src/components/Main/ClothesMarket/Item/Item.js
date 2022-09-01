import ItemCount from "./ItemCount/ItemCount";

const Item = ({ img, title, description, stock }) => {
  return (
    <section className="flex justify-center">
      <div className="card w-80 bg-info shadow-xs">
        <figure className="px-10 pt-10">
          <img src={img} alt={title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title primary">{title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <ItemCount stock={stock} />
          </div>
          <p>{stock > 0 ? `Quedan ${stock} unidades!` : "Sin stock :("}</p>
        </div>
      </div>
    </section>
  );
};
export default Item;
