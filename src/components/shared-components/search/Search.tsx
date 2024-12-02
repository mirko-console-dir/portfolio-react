import React from "react";

type SearchProps = {
  onChange: (value: string) => void;
  textPlaceholder: string;
};

const Search = ({ onChange, textPlaceholder }: SearchProps) => {
  return (
    <input
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
      placeholder={`Search ${textPlaceholder}`}
      className="neumorphism__in__button py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    />
  );
};

export default React.memo(Search);
