import { useTranslation } from "react-i18next";

const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5 justify-center h-screen w-full bg-gradient-to-t from-white to-green-900">
      <h1
        className="self-center text-9xl font-bold h-fit text-transparent"
        style={{
          background: "-webkit-linear-gradient(#eee, #CBA135)",
          WebkitBackgroundClip: "text",
        }}
      >
        404
      </h1>
      <h2 className="self-center text-3xl text-gray">
        {t("defaults.pageNotFound")}
      </h2>
    </div>
  );
};

export default PageNotFound;
