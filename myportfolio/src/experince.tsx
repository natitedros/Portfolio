import ProjectCard, { ProjectCardProps } from "./projectCard";

interface ExperinceProps {}

const Experince: React.FunctionComponent<ExperinceProps> = () => {
  const experinces: ProjectCardProps[] = [
    {
      projectLink: "link",
      title: "Software Engineer",
      company: "Korenti Craft Technologies",
      description: `Developed a C# Interop system to integrate a Hematology Analyzer (hospital lab equipment) to 
        a web based Hospital Management System with over 85,000 patient data in Addis Ababa, Ethiopia.
        Designed and implemented customized user interfaces for multiple clients (clinics) that resulted in 
        over 30% increase in their daily patient data processing.
        Worked on full-stack development of inventory management system for a retail store using Spring Boot framework`,
      techStack: ["Spring Boot", "Java", "C#", "Kotlin", "React", "Typescript"],
      duration: ["2022"],
    },
    {
      projectLink: "link",
      title: "Software Engineer",
      company: "A2SV Foundation",
      description: `Non-profit company funded by Google that connects students with top silicon valley companies.
      Worked on a food and restaurant rating mobile app called RateEat that is currently deployed and in use in Ethiopia.
      Focused on overseeing clean architecture and state management of the project.
      Implemented the web application for the rating platform  with thirty plus team members.
      Worked with frontend, and product teams adding value to the application to generate funds from Google.`,
      techStack: ["Flutter", "VueJs", "Bloc"],
      duration: ["2023", "2024"],
    },
    {
      projectLink: "link",
      title: "Student Mentor",
      company: "A2SV Foundation",
      description: `Gave lectures and conducted one-on-one sessions 
      on Data-Structures and Algorithm topics.`,
      techStack: ["Python", "Data Structures", "Algorithms"],
      duration: ["2022", "2023"],
    },
    {
      projectLink: "link",
      title: "Embedded Systems Engineering Intern",
      company: "New Era R&D",
      description: `Was a team lead for a microcontroller project
      Worked on a project that involved building a Smart Home system from 
      scratch with sensors and a dedicated user interface`,
      techStack: ["C++", "Flask", "Python"],
      duration: ["2022", "2022"],
    },
  ];
  return (
    <div className="">
      <h3>Work Experience</h3>
      {experinces.map((experience) => (
        <ProjectCard
          title={experience.title}
          company={experience.company}
          projectLink={experience.projectLink}
          techStack={experience.techStack}
          duration={experience.duration}
          description={experience.description}
        />
      ))}
    </div>
  );
};

export default Experince;
