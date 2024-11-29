import { useState } from "react";
import { styles } from "@/css/theme/styles";
import { logo } from "@/assets/navbar";
import { navLinks } from "@/constants/navbar";
import SelectLanguage from "./SelectLanguage";
import { useLanguage } from "@/hooks/useLanguage";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [active, setActive] = useState("");
  const { language } = useLanguage();

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-transparent no-select brightness-100`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto cursor-pointer">
        <div
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="neumorphism__out p-1">
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          </div>
          <p className="text-white text-[18px] font-bold md:flex on__hover__drop__shadow">
            Mirko Saponaro &nbsp;<span className="xl:block hidden">| &nbsp;Fullstack Developer</span>
          </p>
        </div>
        <SelectLanguage language={language} />
        <ul className="list-none hidden lg:flex flex-row gap-3 lg-mx-auto ">
          {navLinks.map((nav: any) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title[language] ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer neumorphism__out px-3`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} aria-label={nav.title}>
                {nav.title[language]}
              </a>
            </li>
          ))}
        </ul>
        <Hamburger language={language} navLinks={navLinks}/>
      </div>
    </nav>
  );
};

export default Navbar;
