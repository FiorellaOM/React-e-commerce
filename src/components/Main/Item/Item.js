import { Link } from "react-router-dom";

const Item = ({ img, title, description, id }) => {
  return (
    <Link to={`/shop/item/${id}`}>
      <section className="flex justify-center">
        <div className="card w-96 bg-base-100 shadow-lg">
          <figure className="px-10 pt-10">
            <img src={img} alt={title} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-primary text-xl font-semibold ">{title}</h2>
            <p>{description}</p>
            <span>Conocer mas...</span>
          </div>
        </div>
      </section>
    </Link>
  );
};
export default Item;
