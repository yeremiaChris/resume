interface JobExperience {
  logo: string;
  alt: string;
  company: string;
  companyUrl: string;
  companyColor: string;
  role: string;
  duration: string;
  description: string;
}

const jobExperiences: JobExperience[] = [
  {
    logo: "/logo/primaku.png",
    alt: "primaku",
    company: "PrimaKu",
    companyUrl: "https://primaku.com/",
    companyColor: "text-blue-500",
    role: "Frontend Engineer",
    duration: "Dec 2022 - Present",
    description: `
      As a Frontend Web Developer at PrimaKu, I play a pivotal role in
      creating and maintaining high-quality software projects. My
      responsibilities include converting Figma designs into dynamic,
      responsive web applications and ensuring seamless integration with
      external services. Collaborating closely with my team, I review and
      provide feedback on code to maintain high standards and best
      practices. Additionally, I actively participate in agile activities
      such as grooming, sprint planning, daily stand-ups, and sprint
      retrospectives. This involves following both Scrum and Kanban
      methodologies, particularly for special projects, to ensure
      efficient and effective project delivery. My role is central to
      ensuring our web applications are visually appealing, functional,
      and user-friendly, contributing to PrimaKu's success.
    `,
  },
  {
    logo: "/logo/kiriminaja.png",
    alt: "kiriminaja",
    company: "KiriminAja",
    companyUrl: "https://kiriminaja.com/",
    companyColor: "text-purple-600",
    role: "Frontend Engineer",
    duration: "Jan 2023 - Apr 2024",
    description: `
      As a Frontend Web Developer at KiriminAja, I play an essential role
      in crafting and sustaining top-tier software projects. My duties
      include converting Figma designs into interactive, adaptive web
      applications and ensuring flawless integration with third-party
      services. Collaborating intimately with my team, I conduct code
      reviews and offer feedback to uphold high standards and best
      practices. Moreover, I actively participate in agile processes such
      as grooming, sprint planning, daily stand-ups, and sprint
      retrospectives. This involves employing both Scrum and Kanban
      methodologies, especially for special projects, to ensure efficient
      and successful project completion. My role is vital in making our
      web applications visually engaging, functional, and user-friendly,
      driving KiriminAja's success.
    `,
  },
  {
    logo: "/logo/icreativelabs.jpeg",
    alt: "icreativelabs",
    company: "iCreativeLabs",
    companyUrl: "https://icreativelabs.com/",
    companyColor: "text-blue-400",
    role: "Frontend Engineer",
    duration: "Jan 2022 - May 2023",
    description: `
      As a Frontend Web Developer at iCreativeLabs, I am integral to the
      design and upkeep of cutting-edge software projects. My tasks
      involve translating Figma designs into interactive, adaptive web
      applications and ensuring flawless integration with third-party
      services. Working closely with my team, I perform code reviews and
      provide feedback to maintain exceptional standards and best
      practices. Additionally, I actively engage in agile practices such
      as grooming, sprint planning, daily stand-ups, and sprint
      retrospectives. This involves utilizing both Scrum and Kanban
      methodologies, particularly for specialized projects, to ensure
      efficient and successful project outcomes. My role is crucial in
      making our web applications visually compelling, functional, and
      user-friendly, contributing to the achievements of iCreativeLabs.
    `,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-black md:mt-24 mt-10 py-10  md:py-24"
    >
      <h2 className="text-center text-3xl md:text-5xl text-white">
        My <span className="font-bold">Experience</span>
      </h2>

      <div className="container">
        {jobExperiences.map((job, index) => (
          <JobExperience key={index} job={job} />
        ))}
      </div>
    </section>
  );
};

interface JobExperienceProps {
  job: JobExperience;
}

const JobExperience = ({ job }: JobExperienceProps) => {
  return (
    <div className="border py-7 px-6 border-gray-700 hover:bg-neutral-800 hover:border-neutral-800 text-white hover:text-zinc-300 transition-all duration-300 rounded-lg mt-10 md:mt-20">
      <div className="space-y-3 md:space-y-0 md:flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={job.logo}
            alt={job.alt}
            className="w-10 h-10 rounded-full border"
          />

          <h2 className="font-bold">
            {job.role} at{" "}
            <a
              className={job.companyColor}
              target="_blank"
              rel="noopener noreferrer"
              href={job.companyUrl}
            >
              {job.company}
            </a>
          </h2>
        </div>

        <p className="text-sm font-semibold">{job.duration}</p>
      </div>
      <p className="mt-3 md:mt-6 md:text-justify text-sm">{job.description}</p>
    </div>
  );
};

export default Experience;
