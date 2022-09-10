import { Link } from "react-router-dom";
import ItemCount from "./ItemCount/ItemCount";

const Item = ({ img, title, description, slug }) => {

  return (
    <Link to={`/shop/item/${slug}`}>
      <section className="flex justify-center">
        <div className="card w-80 bg-info shadow-xs">
          <figure className="px-10 pt-10">
            <img src={img} alt={title} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title primary">{title}</h2>
            <p>{description}</p>
            <span>Conocer mas...</span>
          </div>
        </div>
      </section>
    </Link>
  );
};
export default Item;
