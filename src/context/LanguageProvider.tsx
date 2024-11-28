import { LanguageContext } from "@/context/LanguageContext";
import { useState,ReactNode } from "react";
import enTranslations from "@/translations/en.json";
import itTranslations from "@/translations/it.json";
import jpTranslations from "@/translations/jp.json";

const translations = {
  en: enTranslations,
  it: itTranslations,
  jp: jpTranslations,
};

type LanguageProviderProps = {
  children: ReactNode;
};

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<"en" | "it" | "jp">("en");

  const translate = (key: string): string => {
    const keys = key.split(".");
    let translation: string | object = translations[language];

    for (const k of keys) {
      if (!translation || typeof translation !== "object") {
        return key;
      }
      translation = translation[k as keyof typeof translation];
    }

    return String(translation) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;