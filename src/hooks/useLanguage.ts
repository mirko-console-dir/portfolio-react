import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider"
    );
  }

  return context; // Gives access to `language`, `setLanguage`, and `translate`
};
