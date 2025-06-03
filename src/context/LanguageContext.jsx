import { createContext, useContext, useMemo, useState } from "react";
import { IntlProvider } from "react-intl";
import messages from "../i18n/messages";

export const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return (
    <LanguageContext.Provider value={value}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
