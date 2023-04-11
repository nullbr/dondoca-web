import { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const useLanguageContext = () => useContext(LanguageContext);

const GlobalLanguageContext = ({ children }) => {
  // Set language constants
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <LanguageContext.Provider value={{ t, i18n }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default GlobalLanguageContext;
