import { Location } from "react-router-dom";
import { navbarList } from "./constant";
import { HTMLAttributes } from "react";

interface NavbarMobile extends HTMLAttributes<HTMLDivElement> {
  pathname?: Location<string>;
  handleClose?: () => void;
}

const NavbarMobile = ({ pathname, handleClose, ...props }: NavbarMobile) => {
  return (
    <nav
      {...props}
      className={
        "fixed text-white inset-0 top-16 bg-black z-10 " + props.className
      }
    >
      <ul className="flex flex-col overflow-auto justify-center items-center h-full">
        {navbarList.map((nav, index) => (
          <li className="w-full text-center">
            <a
              href={`#${nav.link}`}
              onClick={handleClose}
              className={`py-6 ${
                (pathname?.hash === `#${nav.link}` ||
                  (!pathname?.hash && index === 0)) &&
                "from-gray-600 to-black"
              } transition-all duration-300 bg-gradient-to-t hover:from-gray-600 hover:to-black inline-block w-full`}
            >
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMobile;
