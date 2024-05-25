import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import Box from "../Box";
import { IllustrationIcon } from "../../icons/IllustrationIcon";
import { IllustrationMobile } from "../../icons/IllustrationMobile";
import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [hover, setHover] = useState(false);

  const handleMouseMove = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    if (hover) {
      const { clientX: mouseX, clientY: mouseY, currentTarget } = event;
      const { width, height, left, top } =
        currentTarget.getBoundingClientRect();

      const rotateY = ((mouseX - left) / width) * 40 - 20; // Rotate between -20deg to 20deg
      const rotateX = -((mouseY - top) / height) * 40 + 20; // Rotate between -20deg to 20deg

      setRotateX(rotateX);
      setRotateY(rotateY);
    }
  };

  return (
    <section
      id="home"
      className="container relative flex flex-col md:flex-row justify-center items-center"
    >
      {/* mobile */}
      <IllustrationMobile className="mb-5 w-full md:hidden" />

      <div>
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h2 className="md:leading-[56px] text-2xl sm:text-3xl md:text-5xl">
            <span>Hello I’am</span> <span className="font-bold">Yeremia.</span>
            <br /> <span className="font-bold">Frontend </span>
            <span className="outline-4 text-white drop-shadow-[0_1.2px_1.2px_black]">
              Developer
            </span>{" "}
            <br />
            Based In Indonesia.
          </h2>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="mt-5 text-sm"
        >
          I am a passionate Frontend Web Developer with over 3 years
          <br /> of experience in crafting engaging digital experiences. <br />I
          specialize in Next.js and Nuxt.js, with a strong proficiency in
          TypeScript.
        </motion.p>

        <div className="flex flex-wrap gap-3 md:gap-8 mt-5 md:mt-10">
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
      <IllustrationIcon
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => {
          setHover(false);
        }}
        style={{ transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)` }}
        className="h-full w-1/2 hidden md:block"
      />
    </section>
  );
};

export default Hero;
