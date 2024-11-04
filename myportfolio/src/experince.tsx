import ProjectCard, { ProjectCardProps } from "./projectCard";

interface ExperinceProps {}

const Experince: React.FunctionComponent<ExperinceProps> = () => {
  const experinces: ProjectCardProps[] = [
    {
      projectLink: "https://empiretransportationprovider.com/",
      title: "Software Engineer",
      company: "Empire Transportation Provider Inc.",
      description: `Worked on an employee management system that automated employee invoice generation and distribution.
        ● Used Python Flask framework with PostgreSQL and hosted the service on AWS infrastructure, utilizing EC2 and
        Amazon S3 to implement efficient feature hosting and access to employee data.`,
      techStack: ["Python", "Flask", "AWS"],
      duration: ["2024"],
    },
    {
      projectLink: "https://korentihealth.com/",
      title: "Software Engineer",
      company: "Korenti Craft Technologies",
      description: `Developed a C# Interop system to integrate a Hematology Analyzer (hospital lab equipment) to 
        a web based Hospital Management System with over 85,000 patient data in Addis Ababa, Ethiopia.  ● 
        Designed and implemented customized user interfaces for multiple clients (clinics) that resulted in 
        over 30% increase in their daily patient data processing. ● 
        Worked on full-stack development of inventory management system for a retail store using Spring Boot framework  
        ● Working on marketable plugin development for JetBrains using Kotlin, enhancing IDE functionality.`,
      techStack: ["Spring Boot", "Java", "C#", "Kotlin", "React", "Typescript"],
      duration: ["2022"],
    },
    {
      projectLink:
        "https://play.google.com/store/apps/details?id=org.a2sv.rateeat_mobile",
      title: "Software Engineer",
      company: "A2SV Foundation",
      description: `Non-profit company funded by Google that connects students with top silicon valley companies.
      Worked on a food and restaurant rating mobile app called RateEat that is currently deployed and in use in Ethiopia.
      Focused on overseeing clean architecture and state management of the project. ● 
      I worked with both frontend, and product teams adding value to the application to generate funds from Google.`,
      techStack: ["Flutter", "Bloc"],
      duration: ["2023", "2024"],
    },
    {
      projectLink: "https://leetcode.com/natitedros",
      title: "Software Engineering Mentor",
      company: "A2SV Foundation",
      description: `Gave lectures and conducted one-on-one sessions 
      on Data-Structures and Algorithm topics. ● 
      Implemented the web application for a food and restaurant rating platform with 30+ team members by utilizing task and team management tools (JIRA and GitHub).`,
      techStack: ["Python", "Data Structures", "Algorithms", "Vue.Js"],
      duration: ["2022", "2023"],
    },
    {
      projectLink: "https://www.linkedin.com/company/nerdet/",
      title: "Embedded Systems Engineering Intern",
      company: "NERD Center",
      description: `Was a team lead for a microcontroller project
      Worked on a project that involved building a Smart Home system from 
      scratch with sensors and a dedicated user interface`,
      techStack: ["C++", "Flask", "Python"],
      duration: ["2022", "2022"],
    },
  ];
  return (
    <div className="flex flex-col justify-start pt-10" id="experience">
      <h3 className="text-xl font-bold">EXPERIENCES</h3>
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
