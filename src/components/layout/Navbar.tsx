import { BrandIcon } from "../icons/BrandIcon";
import { FaDownload } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useLocation } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
import { useEffect, useState } from "react";
import { navbarList } from "./constant";

const Navbar = () => {
  const pathname = useLocation();
  const [isFixedElementVisible, setIsFixedElementVisible] = useState(false);

  useEffect(() => {
    if (isFixedElementVisible) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }

    // Clean up when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFixedElementVisible]);

  const handleOpenNavbarMobile = () => {
    setIsFixedElementVisible(!isFixedElementVisible);
  };

  return (
    <>
      <div className="sticky top-0 bg-white py-4 md:py-6 z-20 md:mb-14">
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
                    {(pathname.hash === `#${nav.link}` ||
                      (!pathname.hash && index === 0)) && (
                      <div className="w-10 bg-gradient-to-r from-gray-600 to-white h-1 bottom-1/2" />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <button className="md:hidden" onClick={handleOpenNavbarMobile}>
            <CiMenuFries />
          </button>

          <a
            href="/document/yeremia-chris-saragi-resume.pdf"
            download
            target="_blank"
            className="bg-black hidden md:flex text-white gap-3 items-center hover:bg-white hover:text-black transition-colors duration-300 hover:border-black border  py-4 px-5 rounded"
          >
            Resume <FaDownload />
          </a>
        </nav>
      </div>

      <NavbarMobile
        pathname={pathname}
        className={`transform ${
          !isFixedElementVisible && "-translate-y-[100%]"
        } transition-all duration-300`}
        handleClose={handleOpenNavbarMobile}
      />
    </>
  );
};

export default Navbar;
