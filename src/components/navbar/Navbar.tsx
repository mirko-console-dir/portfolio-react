import { useState } from "react";
import { styles } from "@/css/theme/styles";
import { logo } from "@/assets/navbar";
import { navLinks } from "@/constants/navbar";
import SelectLanguage from "./SelectLanguage";
import { useLanguage } from "@/hooks/useLanguage";

const Navbar = () => {
  const [active, setActive] = useState("");
  const { language } = useLanguage();

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-transparent`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold flex ">
            Mirko Saponaro &nbsp;
            <span className="sm:block hidden">
              {" "}
              | &nbsp; Fullstack Developer
            </span>
          </p>
        </div>
        <SelectLanguage language={language} />
        <ul className="list-none hidden lg:flex flex-row gap-10 lg-mx-auto">
          {navLinks.map((nav: any) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title[language] ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} aria-label={nav.title}>
                {nav.title[language]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
