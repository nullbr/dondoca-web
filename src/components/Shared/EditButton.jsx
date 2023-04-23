import { useTranslation } from "react-i18next";

const EditButton = ({ action }) => {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      onClick={action}
      className="text-2xl min800:text-xl font-bold px-8 py-3 rounded-full ease-in duration-200 hover:shadow-2xl text-white bg-gray"
    >
      {t("defaults.edit")}
    </button>
  );
};
export default EditButton;
