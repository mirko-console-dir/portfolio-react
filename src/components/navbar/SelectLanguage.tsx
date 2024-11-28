import React from "react";
import { useLanguage } from "@/hooks/useLanguage";

type SelectLanguageProps = {
  language: string;
};
const SelectLanguage = ({ language }: SelectLanguageProps) => {
  const { setLanguage } = useLanguage();

  const onChange = (value: "en" | "it" | "jp") => setLanguage(value)

  return (
    <div className="flex justify-center gap-5 self-center">
      <button
        className={`fi fi-gb flag ${language === "en" ? "active" : ""}`}
        onClick={() => onChange("en")}
      />
      <button
        className={`fi fi-it flag ${language === "it" ? "active" : ""}`}
        onClick={() => onChange("it")}
      />
      <button
        className={`fi fi-jp flag ${language === "jp" ? "active" : ""}`}
        onClick={() => onChange("jp")}
      />
    </div>
  );
};

export default React.memo(SelectLanguage);
