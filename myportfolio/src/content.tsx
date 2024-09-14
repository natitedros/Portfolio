import About from "./about";
import Experince from "./experince";
import Projects from "./projects";
import Skills from "./skills";

interface ContentProps {}

const Content: React.FunctionComponent<ContentProps> = () => {
  return (
    <div className="w-3/5 h-screen flex flex-col pt-24 overflow-y-auto mx-5 px-10 text-start">
      <About />
      <Skills />
      <Experince />
      <Projects />
    </div>
  );
};

export default Content;
