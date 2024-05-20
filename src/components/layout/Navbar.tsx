import { BrandIcon } from "../icons/BrandIcon";
import { FaDownload } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useLocation } from "react-router-dom";
const navbarList = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "Skills",
    link: "skills",
  },
  {
    name: "Experience",
    link: "experience",
  },
  {
    name: "About Me",
    link: "about",
  },
  {
    name: "Projects",
    link: "projects-list",
  },
];
const Navbar = () => {
  const patname = useLocation();

  return (
    <div className="sticky top-0 bg-white py-4 md:py-6 z-10 md:mb-14">
      <nav className="container text-xl flex items-center justify-between font-semibold">
        <div className="flex items-center gap-3 font-bold">
          <BrandIcon />
          <h2>Yeremia</h2>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navbarList.map((nav, index) => (
            <li key={index}>
              <a href={`#${nav.link}`} className="relative">
                {nav.name}

                <div className="flex items-center justify-center absolute inset-0">
                  {patname.hash === `#${nav.link}` && (
                    <div className="w-10 bg-gradient-to-r from-gray-600 to-white h-1 bottom-1/2" />
                  )}

                  {!patname.hash && index === 0 && (
                    <div className="w-10 bg-gradient-to-r from-gray-600 to-white h-1 bottom-1/2" />
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden">
          <CiMenuFries />
        </button>

        <button className="bg-black hidden md:flex text-white gap-3 items-center hover:bg-white hover:text-black transition-colors duration-300 hover:border-black border  py-4 px-5 rounded">
          Resume <FaDownload />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
