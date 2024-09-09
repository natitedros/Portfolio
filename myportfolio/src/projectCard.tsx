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
    <div className="rounded-lg hover:bg-lime-950 transition-colors mx-10 my-3 px-2 hover:px-4 shadow flex flex-col hover:text-white">
      <div className="flex flex-row justify-start">
        <h1 className="text-xl align-center">{title}</h1>
        <p className="mx-2">•</p>
        <h3 className="text-lg">{company}</h3>
      </div>
      <div className="flex flex-row">
        <div className="w-1/4">
          {duration[0]} - {duration.length === 1 && <span>Present</span>}
          {duration.length === 2 && <span>{duration[1]}</span>}
        </div>
        <div className="w-3/4 text-justify">
          <article>{description}</article>
          {techStack.map((t) => (
            <button className="m-2 p-2 hover:bg-slate-500 transition-colors rounded-lg">
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
