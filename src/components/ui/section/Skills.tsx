import { FaSquareGithub } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiNuxtdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNextui } from "react-icons/si";
import Box from "../Box";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const skills = [
  { icon: <FaSquareGithub className="h-5 w-5" />, name: "Git" },
  { icon: <SiTypescript className="h-5 w-5" />, name: "Typescript" },
  { icon: <IoLogoJavascript className="h-5 w-5" />, name: "Javascript" },
  { icon: <FaReact className="h-5 w-5" />, name: "React" },
  { icon: <IoLogoVue className="h-5 w-5" />, name: "Vue" },
  { icon: <RiNextjsFill className="h-5 w-5" />, name: "NextJS" },
  { icon: <SiNuxtdotjs className="h-5 w-5" />, name: "NuxtJS" },
  { icon: <SiTailwindcss className="h-5 w-5" />, name: "Tailwind" },
  { icon: <SiNextui className="h-5 w-5" />, name: "NextUI" },
];

const Skills = () => {
  const ref = useRef(null);

  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 150 }}
      transition={{ duration: 0.5 }}
      id="skills"
      className="container md:pt-20 pt-10 flex flex-col md:items-center gap-8 md:gap-14"
    >
      <h2 className="text-center text-3xl md:text-5xl">
        My <span className="font-bold">Skills</span>
      </h2>

      <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-24 items-center justify-center">
        {skills.map((skill, index) => (
          <BoxSkill key={index}>
            {skill.icon}
            <p>{skill.name}</p>
          </BoxSkill>
        ))}
      </div>
    </motion.div>
  );
};

interface BoxSkill {
  children: React.ReactNode;
}

const BoxSkill = ({ children }: BoxSkill) => (
  <Box className="w-full h-full md:h-28 md:w-28 flex justify-center font-bold items-center">
    <div className="flex flex-col items-center gap-3">{children}</div>
  </Box>
);

export default Skills;
