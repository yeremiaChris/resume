import { useRef } from "react";
import { AboutIcon } from "../../icons/AboutIcon";
import { useInView, motion } from "framer-motion";

const About = () => {
  const ref = useRef(null);

  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      id="about"
      className="container gap-5 md:gap-20 grid md:grid-cols-2 py-10 md:py-14 md:px-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 150 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full h-full"
      >
        <AboutIcon className="w-full h-full" />
      </motion.div>

      <div className="grid md:gap-5 gap-3">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 150 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl md:mb-5"
        >
          About <span className="font-bold">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 150 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-zinc-500">
            I'm a passionate, self-proclaimed designer who specializes in
            frontend engineering, particularly with React.js, Vue.js, Next.js,
            Nuxt.js, and TypeScript. I am very enthusiastic about bringing the
            technical and visual aspects of digital products to life. User
            experience, pixel-perfect design, and writing clear, readable,
            highly performant code are my top priorities.
          </p>
          <p className="text-zinc-500">
            I began my journey as a web developer during my college years,
            specifically between 2019 and 2021 when COVID-19 accelerated my
            learning. During this time, I explored various tech stacks and
            eventually focused on React and Vue. Since January 2022, I have been
            working as a frontend engineer, building cutting-edge web
            applications using modern technologies such as Next.js, TypeScript,
            TailwindCSS, and more.
          </p>
          <p className="text-zinc-500">
            I am deeply passionate about learning and working hard because I
            strive to become the best version of myself. I aim to positively
            impact my family, others, and the company I work for. I continually
            push myself to improve and contribute significantly to my current
            company, always giving my best effort.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
