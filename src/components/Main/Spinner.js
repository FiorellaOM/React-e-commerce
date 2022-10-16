import spinner from "../../assets/svg/loader.svg";

const Spinner = () => {
  return (
    <div className="contSpinner">
      <img
        src={ spinner }
        className="animate-spin"
        alt="Spinner"
        style={{ height: "40px", width: "40px" }}
      />
    </div>
  );
};
export default Spinner;
