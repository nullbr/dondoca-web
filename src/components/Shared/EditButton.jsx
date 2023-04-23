import { useTranslation } from "react-i18next";

const EditButton = ({ action }) => {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      onClick={action}
      className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-signature-gold ease-in duration-200  "
    >
      {t("defaults.edit")}
    </button>
  );
};
export default EditButton;
