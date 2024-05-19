import { BrandIcon } from "../icons/BrandIcon";
import { FaDownload } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
const navbarList = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "About Me",
    link: "about",
  },
  {
    name: "Skills",
    link: "skills",
  },
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "Contact Me",
    link: "contact-me",
  },
];
const Navbar = () => {
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
              <a href={`#${nav.link}`}>{nav.name}</a>
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
