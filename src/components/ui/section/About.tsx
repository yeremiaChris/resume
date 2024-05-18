import { AboutIcon } from "../../icons/AboutIcon";

const About = () => {
  return (
    <section className="container gap-20 grid grid-cols-2 py-14 px-28">
      <AboutIcon />

      <div className="grid gap-5">
        <h2 className="text-5xl mb-5">
          About <span className="font-bold">Me</span>
        </h2>
        <p className="text-zinc-500">
          I'm a passionate, self-proclaimed designer who specializes in frontend
          engineering, particularly with React.js, Vue.js, Next.js, Nuxt.js, and
          TypeScript. I am very enthusiastic about bringing the technical and
          visual aspects of digital products to life. User experience,
          pixel-perfect design, and writing clear, readable, highly performant
          code are my top priorities.
        </p>
        <p className="text-zinc-500">
          I began my journey as a web developer during my college years,
          specifically between 2019 and 2021 when COVID-19 accelerated my
          learning. During this time, I explored various tech stacks and
          eventually focused on React and Vue. Since January 2022, I have been
          working as a frontend engineer, building cutting-edge web applications
          using modern technologies such as Next.js, TypeScript, TailwindCSS,
          and more.
        </p>
        <p className="text-zinc-500">
          I am deeply passionate about learning and working hard because I
          strive to become the best version of myself. I aim to positively
          impact my family, others, and the company I work for. I continually
          push myself to improve and contribute significantly to my current
          company, always giving my best effort.
        </p>
      </div>
    </section>
  );
};

export default About;
