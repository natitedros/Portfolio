import About from "./about";
import Experince from "./experince";
import Projects from "./projects";
import Skills from "./skills";

interface ContentProps {}

const Content: React.FunctionComponent<ContentProps> = () => {
  return (
    <div className="w-3/5 h-screen overflow-y-auto flex flex-col pt-24">
      <About />
      <Skills />
      <Experince />
      <Projects />
    </div>
  );
};

export default Content;
