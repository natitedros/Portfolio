import ProjectCard, { ProjectCardProps } from "./projectCard";

interface ProjectsProps {}

const Projects: React.FunctionComponent<ProjectsProps> = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Car Accident Management System",
      company: "",
      projectLink: "link",
      techStack: ["Dart", "Flutter", "NodeJs", "C"],
      duration: ["2022", "2023"],
      description: `Final year thesis project initiated to deliver quick response 
      to car accidents and decrease 
      traffic jams in Addis Ababa, Ethiopia.
      Developed a multi sided mobile app that is integrated with car accident 
      detecting hardware component installed on a vehicle. Accidents can be automatically 
      or manually reported to nearby traffic police and request aid.`,
    },
    {
      title: "Typing Test",
      company: "",
      projectLink: "link",
      techStack: ["React", "Tailwind", "Typescript", "NodeJs"],
      duration: ["2023", "2024"],
      description: `A web based application that measures typing speed by 
      fetching random words and definithin froma free endpoint. Good for improving vocabulary skills.`,
    },
    {
      title: "Mekdim School Portal",
      company: "",
      projectLink: "link",
      techStack: ["MySQL", "EJS", "NodeJs"],
      duration: ["2022", "2022"],
      description: `A web based application that allows students to register 
      for semester and courses, to rate their teachers.
       Managed a team of 26 students for the design phase of the development.`,
    },
  ];
  return (
    <div className="my-5">
      <h3>Projects</h3>
      {projects.map((project) => (
        <ProjectCard
          title={project.title}
          company={project.company}
          projectLink={project.projectLink}
          techStack={project.techStack}
          duration={project.duration}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default Projects;
