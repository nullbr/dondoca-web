import { useTranslation } from "react-i18next";

interface EditButtonProps {
  action: () => void;
  CN: string;
}

const EditButton = ({ action, CN }: EditButtonProps) => {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      onClick={action}
      className={`${CN} sm:text-2xl text-xl w-fit font-bold px-8 py-3 rounded-full ease-in duration-200 hover:shadow-2xl text-white bg-gray`}
    >
      {t("defaults.edit")}
    </button>
  );
};
export default EditButton;
