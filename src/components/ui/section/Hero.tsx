import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import Box from "../Box";
import { IllustrationIcon } from "../../icons/IllustrationIcon";
import { IllustrationMobile } from "../../icons/IllustrationMobile";
const Hero = () => {
  return (
    <section
      id="home"
      className="container relative flex flex-col md:flex-row justify-center items-center"
    >
      {/* mobile */}
      <IllustrationMobile className="mb-5 w-full md:hidden" />

      <div>
        <h2 className="md:whitespace-nowrap md:leading-[56px] text-2xl md:text-5xl">
          <span>Hello I’am</span> <span className="font-bold">Yeremia.</span>
          <br /> <span className="font-bold">Frontend </span>
          <span className="outline-4 text-white drop-shadow-[0_1.2px_1.2px_black]">
            Developer
          </span>{" "}
          <br />
          Based In Indonesia.
        </h2>

        <p className="mt-8 md:whitespace-nowrap">
          I am a passionate Frontend Web Developer with over 3 years
          <br /> of experience in crafting engaging digital experiences. <br />I
          specialize in Next.js and Nuxt.js, with a strong proficiency in
          TypeScript.
        </p>

        <div className="flex flex-wrap gap-3 md:gap-8 mt-8 md:mt-10">
          <a
            href="https://www.linkedin.com/in/yeremia-chris-saragi-587a671a9/"
            target="_blank"
          >
            <Box>
              <FaLinkedin className="w-5 h-5" />
            </Box>
          </a>

          <a href="https://github.com/yeremiaChris/" target="_blank">
            <Box>
              <FaGithub className="w-5 h-5" />
            </Box>
          </a>

          <a href="mailto:yeremia997@gmail.com">
            <Box>
              <MdAttachEmail className="w-5 h-5" />
            </Box>
          </a>

          <a href="https://www.instagram.com/yeremiachris3/" target="_blank">
            <Box>
              <FaInstagramSquare className="w-5 h-5" />
            </Box>
          </a>
        </div>
      </div>

      {/* desktop */}
      <IllustrationIcon className="h-full w-full hidden md:block" />
    </section>
  );
};

export default Hero;
