const PagesHeader = ({ pageTitle }) => {
  return (
    <header className="relative justify-center flex">
      <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
        {pageTitle}
      </h1>
    </header>
  );
};
export default PagesHeader;
