import ItemCount from "./Item/ItemCount/ItemCount";

const ItemDetail = ({ item: { title, price, img, description, stock } }) => {
  return (
    <div className="hero min-h-screen background">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img} className="max-w-sm m-3 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">
            {description}
          </p>
          <h3>{price}</h3>
          <ItemCount stock={stock} initial="1" />
          <p>{stock > 0 ? `Quedan ${stock} unidades!` : "Sin stock :("}</p>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;

{
  /* <div className="m-5">
        <div>{ title }</div>
        <div>{ price }</div>
    </div> */
}
