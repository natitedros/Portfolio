interface ProjectCardProps {
  //   projectLink: String;
  //   techStack: String[];
  //   duration: String[];
  //   description: String;
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = () => {
  const tech = ["react", "tailwind", "typescript"];
  return (
    <div className="rounded-lg hover:bg-neutral-400 transition-colors m-6 p-2 shadow flex flex-row">
      <div className="w-1/4">2000-2004</div>
      <div className="w-3/4 text-justify">
        <article>
          This is the place i describe what i have done and stuff
        </article>
        {tech.map((t) => (
          <button className="m-2 p-2 hover:bg-slate-500 transition-colors rounded-lg">
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
