import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import Box from "../Box";
import { IllustrationIcon } from "../../icons/IllustrationIcon";
const Hero = () => {
  return (
    <section className="container relative flex items-center">
      <div>
        <h2 className="whitespace-nowrap leading-[56px] text-5xl">
          <span>Hello I’am</span> <span className="font-bold">Yeremia.</span>
          <br /> <span className="font-bold">Frontend </span>
          <span className="outline-4 text-white drop-shadow-[0_1.2px_1.2px_black]">
            Developer
          </span>{" "}
          <br />
          Based In Indonesia.
        </h2>

        <p className="mt-8 whitespace-nowrap">
          I am a passionate Frontend Web Developer with over 3 years
          <br /> of experience in crafting engaging digital experiences. <br />I
          specialize in Next.js and Nuxt.js, with a strong proficiency in
          TypeScript.
        </p>

        <div className="flex gap-8 mt-10">
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

      <IllustrationIcon className="h-full w-full" />
    </section>
  );
};

export default Hero;
