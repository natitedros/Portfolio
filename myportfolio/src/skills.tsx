interface SkillsProps {}

const Skills: React.FunctionComponent<SkillsProps> = () => {
  const languages: String[] = [
    "Java",
    "C++",
    "C#",
    "Python",
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
    <div id="skills" className="flex flex-row justify-start pt-10">
      <h3 className="text-xl font-bold">SKILLS</h3>
      <div className="flex flex-row">
        <ul className="text-left px-10">
          <p className="font-bold">LANGUAGES</p>
          {languages.map((language) => (
            <li>{language}</li>
          ))}
        </ul>
        <ul className="text-left px-10">
          <p className="font-bold">FRAMEWORKS</p>
          {frameworks.map((framework) => (
            <li>{framework}</li>
          ))}
        </ul>
        <ul className="text-left px-10">
          <p className="font-bold">TOOLS</p>
          {tools.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
