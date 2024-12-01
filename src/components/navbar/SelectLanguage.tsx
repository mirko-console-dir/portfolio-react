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
      <button className="cursor-pointer neumorphism__out p-1.5 rounded-full relative">
        <img
          src={globe}
          alt="select language"
          className="w-[28px] h-[28px] object-contain self-center"
          onClick={() => setOpenChoices(!openChoices)}
        />
      </button>
      {openChoices && (
        <div className="py-1 px-4 flex justify-center gap-2 md:gap-5 absolute top-16 glassmorphism rounded">
          <button 
            onClick={() => onChange("en")} 
            className={`cursor-pointer ${language === "en" ? "selected__lang" : ""}`}
          >
            <div
              className={`fi fi-gb flag`}
            />
          </button>
          <button 
            onClick={() => onChange("it")} 
            className={`cursor-pointer ${language === "it" ? "selected__lang" : ""}`}
          >
            <div
              className={`fi fi-it flag`}
            />
          </button>
          <button 
            onClick={() => onChange("jp")} 
            className={`cursor-pointer ${language === "jp" ? "selected__lang" : ""}`}
          >
            <div
              className={`fi fi-jp flag`}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default React.memo(SelectLanguage);
