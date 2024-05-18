import { FiExternalLink } from "react-icons/fi";
import { formatNumberWithLeadingZero } from "../../../../helper/formatNumberWithLeadingZero";
const projects = [
  {
    name: "KiriminAja",
    description:
      "I built this site using Nuxt3 with TypeScript and Tailwind CSS. It includes various modules and features such as goods delivery, reporting, voucher management, a landing page builder, and many more.",
    image: "/projects/kiriminaja.png",
    link: "https://app.kiriminaja.com",
  },
  {
    name: "Primacare",
    description: `I built this site using Next.js 14 with TypeScript, Tailwind CSS,
              and NextUI. It includes various modules and features such as
              patient management, outpatient services, warehouse management,
              clinic operations, facility management, and many more.`,
    image: "/projects/primacare.png",
    link: "https://rm.primacare.ai",
  },
];

const Projects = () => {
  return (
    <section className="bg-black py-16">
      <div className="container text-white">
        <h2 className="text-5xl text-center mb-5">
          Current <span className="font-bold">Projects</span>
        </h2>

        {projects.map((project, index) => (
          <div className="grid grid-cols-2 gap-10 items-center mt-10">
            {index % 2 === 0 && (
              <>
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-xl"
                />

                <div className="grid gap-7">
                  <h2 className="font-bold text-5xl">
                    {formatNumberWithLeadingZero(index + 1)}
                  </h2>
                  <h2 className="font-bold text-5xl">{project.name}</h2>
                  <h2>{project.description}</h2>
                  <a href={project.link} target="_blank">
                    <FiExternalLink />
                  </a>
                </div>
              </>
            )}

            {index % 2 !== 0 && (
              <>
                <div className="grid gap-7">
                  <h2 className="font-bold text-5xl">
                    {formatNumberWithLeadingZero(index + 1)}
                  </h2>
                  <h2 className="font-bold text-5xl">{project.name}</h2>
                  <h2>{project.description}</h2>
                  <a href={project.link} target="_blank">
                    <FiExternalLink />
                  </a>
                </div>

                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-xl"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
