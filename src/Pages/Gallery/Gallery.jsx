import { Outlet } from "react-router-dom";

function Gallery() {
  return (
    <>
      <section className="">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Gallery
          </h1>
        </div>
        <div className="container page-padding py-[10rem]">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default Gallery;
