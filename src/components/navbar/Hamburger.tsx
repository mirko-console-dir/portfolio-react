import {useState} from "react"
import {menu, close} from "@/assets/navbar"
import {HamburgerProps, NavItem} from "@/interfaces"

const Hamburger = ({language, navLinks}: HamburgerProps) => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <div className="lg:hidden flex justify-end items-center">
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain"
        onClick={() => setToggle(!toggle)}
      />
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
          {navLinks.map((nav: NavItem) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === nav.id ? "text-white" : "text-secondary"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setActive(nav.title[language]);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title[language]}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
