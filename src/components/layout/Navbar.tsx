import { BrandIcon } from "../icons/BrandIcon";
import { FaDownload } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white py-6 z-10 mb-14">
      <nav className="container text-xl flex items-center justify-between font-semibold">
        <div className="flex items-center gap-3 font-bold">
          <BrandIcon />
          <h2>Yeremia</h2>
        </div>

        <ul className="flex items-center gap-8">
          <li>About Me</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Contact Me</li>
        </ul>

        <button className="bg-black text-white flex gap-3 items-center hover:bg-white hover:text-black transition-colors duration-300 hover:border-black border  py-4 px-5 rounded">
          Resume <FaDownload />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
