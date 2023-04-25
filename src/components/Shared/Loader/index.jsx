import "./index.css";

const Loader = () => {
  return (
    <div className="spinner-main">
      <div className="spinner">
        <div className="spinner-dot spinner-dot-1"></div>
        <div className="spinner-dot spinner-dot-2"></div>
        <div className="spinner-dot spinner-dot-3"></div>
      </div>
    </div>
  );
};

export default Loader;
