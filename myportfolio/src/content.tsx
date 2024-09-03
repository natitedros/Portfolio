import About from "./about";
import Experince from "./experince";

interface ContentProps {}

const Content: React.FunctionComponent<ContentProps> = () => {
  return (
    <div className="flex flex-col overflow-y-scroll pt-24">
      <About />
      <Experince />
    </div>
  );
};

export default Content;
