import { BrandIcon } from "../icons/BrandIcon";

const Footer = () => {
  return (
    <footer className="bg-black mt-16 text-white py-8">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-3 font-bold">
          <BrandIcon className="text-white" />
          <h2>Yeremia</h2>
        </div>

        <div className="text-xs md:text-base text-right">
          <h2>@ {new Date().getFullYear()} Personal Portfolio</h2>
          <p>By Yeremia Chris Saragi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
