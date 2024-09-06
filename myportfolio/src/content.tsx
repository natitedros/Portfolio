import About from "./about";
import Experince from "./experince";

interface ContentProps {}

const Content: React.FunctionComponent<ContentProps> = () => {
  return (
    <div className="w-3/5 h-screen overflow-y-auto flex flex-col pt-24">
      <About />
      <Experince />
    </div>
  );
};

export default Content;
