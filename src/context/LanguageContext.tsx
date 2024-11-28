import { createContext } from "react";

type LanguageContextType = {
  language: string;
  setLanguage: (language: ("en" | "it" | "jp")) => void;
  translate: (key: string) => string;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);