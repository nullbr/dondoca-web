import "./index.css";

const Loader = () => {
  return (
    <main className="spinner-main">
      <div className="spinner">
        <div className="spinner-dot spinner-dot-1"></div>
        <div className="spinner-dot spinner-dot-2"></div>
        <div className="spinner-dot spinner-dot-3"></div>
      </div>
    </main>
  );
};

export default Loader;
