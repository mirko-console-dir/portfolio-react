import { useState } from "react";
import { menu, close } from "@/assets/navbar";
import { HamburgerProps, NavItem } from "@/interfaces";

const Hamburger = ({ language, navLinks }: HamburgerProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="lg:hidden flex justify-end items-center">
      <button
        className="neumorphism__out p-1.5 rounded-full"
        onClick={() => setToggle(!toggle)}
      >
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[25px] h-[25px] object-contain"
        />
      </button>
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-4 neumorphism__out__modal absolute top-20 right-0 mr-4 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
          {navLinks.map((nav: NavItem) => (
            <li key={nav.id} className="w-full">
              <a
                href={`#${nav.id}`}
                className={`flex text-secondary font-poppins font-medium cursor-pointer text-[16px] neumorphism__out w-full rounded px-4`}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                {nav.title[language].toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
