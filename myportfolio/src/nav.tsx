interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
  const scrollContent = (id: string) => {
    const element = document.getElementById(id)!;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-2/5 p-15 sm:p-10 flex flex-col justify-evenly h-screen">
      <div id="intro" className="text-left">
        <h1 className="text-5xl font-extrabold">Natnael Desta</h1>
        <h3 className="text-2xl">Software Engineer</h3>
        <br />
        <p className="text-lg">
          I build attractive web and mobile apps that make life easier.
        </p>
      </div>
      <div id="nav">
        <ul className="text-lg text-center mx-10">
          <li
            className="hover:text-yellow-400 hover:font-extrabold"
            onClick={() => scrollContent("about")}
          >
            About
          </li>
          <li
            className="hover:text-yellow-400 hover:font-extrabold"
            onClick={() => scrollContent("skills")}
          >
            Skills
          </li>
          <li
            className="hover:text-yellow-400 hover:font-extrabold"
            onClick={() => scrollContent("experience")}
          >
            Experience
          </li>
          <li
            className="hover:text-yellow-400 hover:font-extrabold"
            onClick={() => scrollContent("projects")}
          >
            Projects
          </li>
        </ul>
      </div>
      <div id="links" className="flex justify-center ">
        <a
          href="https://github.com/natitedros"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="size-10 m-5"
            src="/assets/github.512x499.png"
            alt="Github icon"
          />
        </a>
        <a
          href="https://linked.in/natitedros"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="size-10 m-5"
            src="/assets/linkedin.512x512.png"
            alt="Linkedin icon"
          />
        </a>
        <a
          href="https://www.instagram.com/nati_tedros/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="size-10 m-5"
            src="/assets/instagram.512x512.png"
            alt="Insta icon"
          />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
