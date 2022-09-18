import Item from "./Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-5 m-3">
      {items.length ? (
        items.map((item) => <Item key={item.id} {...item} />)
      ) : (
        <h2 className="flex justify-center">Loading...</h2>
      )}
    </div>
  );
};
export default ItemList;
