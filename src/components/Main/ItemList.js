import Item from "./Item/Item";
import Spinner from "./Spinner";

const ItemList = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-5 m-3  py-10">
      {items.length ? (
        items.map((item) => <Item key={item.id} {...item} />)
      ) : (
        <Spinner/>
      )}
    </div>
  );
};
export default ItemList;
