import { Location } from "react-router-dom";
import { navbarList } from "./constant";
import { HTMLAttributes } from "react";
import { FaDownload } from "react-icons/fa";

interface NavbarMobile extends HTMLAttributes<HTMLDivElement> {
  pathname?: Location<string>;
  handleClose?: () => void;
}

const NavbarMobile = ({ pathname, handleClose, ...props }: NavbarMobile) => {
  return (
    <nav
      {...props}
      className={
        "fixed inset-0 top-16 bg-gray-50 z-10  text-black" + props.className
      }
    >
      <ul className="flex flex-col overflow-auto justify-center items-center h-full">
        {navbarList.map((nav, index) => (
          <li className="w-full text-center">
            <a
              href={`#${nav.link}`}
              onClick={handleClose}
              className={`${
                (pathname?.hash === `#${nav.link}` ||
                  (!pathname?.hash && index === 0)) &&
                "bg-gray-200"
              } transition-all py-6  duration-300 relative hover:bg-gray-200 inline-block w-full`}
            >
              {nav.name}

              <div className="flex items-center justify-center absolute inset-0">
                {(pathname?.hash === `#${nav.link}` ||
                  (!pathname?.hash && index === 0)) && (
                  <div className="w-10 bg-gradient-to-r from-gray-600 to-white h-1 bottom-1/2" />
                )}
              </div>
            </a>
          </li>
        ))}

        <li className="w-full text-center">
          <a
            href="/document/cv-yeremia.pdf"
            download
            target="_blank"
            onClick={handleClose}
            className="hover:bg-gray-200 flex items-center justify-center gap-3 py-6 w-full"
          >
            Resume <FaDownload />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMobile;
