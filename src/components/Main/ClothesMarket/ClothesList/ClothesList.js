import "./ClothesList.css";
import Item from "../Item/Item";

const ClothesList = ({ clothes }) => {
  const c = clothes.storeItems;

  return (
    <div className="grid grid-cols-3 gap-5 m-3">
      {c && c.length ? (
        c.map((clothes) => <Item key={clothes.id} {...clothes} />)
      ) : (
        <h2 className="flex justify-center">Cargando...</h2>
      )}
    </div>
  );
};
export default ClothesList;
