import React, {useState} from "react";
import { useLanguage } from "@/hooks/useLanguage";
import {globe} from "@/assets/navbar"

type SelectLanguageProps = {
  language: string;
};
const SelectLanguage = ({ language }: SelectLanguageProps) => {
  const { setLanguage } = useLanguage();

  const onChange = (value: "en" | "it" | "jp") => {
    setLanguage(value)
    setOpenChoices(false)
  }
  const [openChoices, setOpenChoices] = useState(false)

  return (
    <div className="flex grow justify-center">
       <img
        src={globe}
        alt="select language"
        className="w-[28px] h-[28px] object-contain cursor-pointer self-center"
        onClick={() => setOpenChoices(!openChoices)}
      />
      {openChoices && (
        <div className="py-1 px-4 flex justify-center gap-2 md:gap-5 absolute top-16 semi__trasparent__bg">
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
      )}
    </div>
  );
};

export default React.memo(SelectLanguage);
