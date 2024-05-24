import { FiExternalLink } from "react-icons/fi";
import { formatNumberWithLeadingZero } from "../../../../helper/formatNumberWithLeadingZero";
import { HTMLAttributes } from "react";

// Define the type for the props
interface Project {
  image: string;
  name: string;
  description: string;
  link: string;
}
interface ProjectProps extends HTMLAttributes<HTMLDivElement> {
  project: Project;
  index: number;
  isMobile?: boolean;
}

const ProjectComponent = ({
  project,
  index,
  isMobile,
  ...divProps
}: ProjectProps) => {
  return (
    <div {...divProps}>
      {isMobile && (
        <>
          <div className="grid gap-7">
            <h2 className="font-bold text-3xl md:text-5xl">
              {formatNumberWithLeadingZero(index + 1)}
            </h2>
            <h2 className="font-bold text-3xl md:text-5xl">{project.name}</h2>
            <h2>{project.description}</h2>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <FiExternalLink />
            </a>
          </div>
          <img
            src={project.image}
            alt={project.name}
            className="rounded-xl h-full"
          />
        </>
      )}

      {!isMobile && (
        <>
          {index % 2 === 0 && (
            <>
              <img
                src={project.image}
                alt={project.name}
                className="rounded-xl h-full"
              />

              <div className="grid gap-7">
                <h2 className="font-bold text-3xl md:text-5xl">
                  {formatNumberWithLeadingZero(index + 1)}
                </h2>
                <h2 className="font-bold text-3xl md:text-5xl">
                  {project.name}
                </h2>
                <h2>{project.description}</h2>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink />
                </a>
              </div>
            </>
          )}

          {index % 2 !== 0 && (
            <>
              <div className="grid gap-7">
                <h2 className="font-bold text-3xl md:text-5xl">
                  {formatNumberWithLeadingZero(index + 1)}
                </h2>
                <h2 className="font-bold text-3xl md:text-5xl">
                  {project.name}
                </h2>
                <h2>{project.description}</h2>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink />
                </a>
              </div>

              <img
                src={project.image}
                alt={project.name}
                className="rounded-xl h-full"
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

const Projects = () => {
  const projectsData = [
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
    {
      name: "Flou Cloud",
      description: `I developed this website using Nuxt.js and Tailwind CSS. It features custom HTML and various forms for posting information about a range of cloud system products.`,
      link: "https://floucloud.id/",
      image: "/projects/flou-cloud.png",
    },
    {
      name: "Fastr",
      description: `I developed this web application using Nuxt.js and Tailwind CSS. It is designed for scraping social media information from platforms like Instagram and TikTok. The application features various charts that display metrics such as account growth, followers, posts, and more.`,
      link: "https://fastr.id/",
      image: "/projects/fastr.png",
    },
    {
      name: "Dashboard Purity",
      description: `I developed this site using Nuxt.js and Tailwind CSS. It includes a variety of aesthetically pleasing user interfaces for dashboard utilities, such as charts and summaries.`,
      link: "https://slicing-ui-purity.netlify.app/",
      image: "/projects/dashboard-purity.png",
    },
  ];
  return (
    <section id="projects-list" className="bg-black py-16 mt-10">
      <div className="container text-white">
        <h2 className="text-3xl md:text-5xl text-center mb-5">
          Current <span className="font-bold">Projects</span>
        </h2>

        {projectsData.map((project, index) => (
          <div key={index}>
            <ProjectComponent
              className="md:hidden grid md:grid-cols-2 gap-10 items-center mt-10"
              isMobile
              project={project}
              index={index}
            />

            <ProjectComponent
              className="hidden md:grid md:grid-cols-2 gap-10 items-center mt-10"
              project={project}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
