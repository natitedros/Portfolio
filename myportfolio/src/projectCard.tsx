export interface ProjectCardProps {
  title: String;
  company: String;
  projectLink: String;
  techStack: String[];
  duration: String[];
  description: String;
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
  title,
  company,
  projectLink,
  techStack,
  duration,
  description,
}) => {
  return (
    <a href="link" className="group">
      <div className="rounded-lg transition-colors my-3 px-5 shadow flex flex-col hover:text-white hover:bg-opacity-5 hover:bg-white">
        <div className="flex flex-row justify-start">
          <h1 className="text-xl align-center">{title}</h1>
          <p className="mx-2">•</p>
          <h3 className="text-lg group-hover:mr-3 group-hover:text-blue-200">
            {company}
          </h3>
          <img
            className="size-3 m-2 rotate-180"
            src="/assets/arrow-link.png"
            alt="link icon"
          />
        </div>
        <div className="flex flex-row">
          <div className="w-1/4">
            {duration[0]} - {duration.length === 1 && <span>Present</span>}
            {duration.length === 2 && <span>{duration[1]}</span>}
          </div>
          <div className="w-3/4">
            <article>{description}</article>
            {techStack.map((t) => (
              <button className="m-2 p-2 hover:bg-slate-500 transition-colors rounded-lg">
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
