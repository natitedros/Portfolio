interface SkillsProps {}

const Skills: React.FunctionComponent<SkillsProps> = () => {
  const languages: String[] = [
    "Java",
    "C++",
    "C#",
    "Javascript(ES6)",
    "Typescript",
    "Dart",
    "HTML5 & CSS",
    "SQL",
    "Tailwind",
  ];
  const frameworks: String[] = [
    "NodeJs",
    "Flutter",
    ".Net Framework",
    "Spring Boot",
  ];
  const tools: String[] = ["Git & Github", "Postman", "MongoDB", "Bash"];
  return (
    <div className="flex flex-row justify-start my-5">
      <h1 className="text-lg">SKILLS</h1>
      <div className="flex flex-row">
        <ul className="text-left px-10">
          LANGUAGES
          {languages.map((language) => (
            <li>{language}</li>
          ))}
        </ul>
        <ul className="text-left px-10">
          FRAMEWORKS
          {frameworks.map((framework) => (
            <li>{framework}</li>
          ))}
        </ul>
        <ul className="text-left px-10">
          TOOLS
          {tools.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
