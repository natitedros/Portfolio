interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
  return (
    <div className="w-2/5 p-15 sm:p-10 flex flex-col justify-evenly h-screen">
      <div id="intro" className="text-left">
        <h1 className="text-5xl font-extrabold">Natnael Desta</h1>
        <h3 className="text-2xl">Software Engineer</h3>
        <br />
        <p className="text-lg">
          I build pixel-perfect, engaging, and accessible digital experiences
          With over 3 years of industry experience in web and mobile application
          systems development for the healthcare and consumer-based industry.
        </p>
      </div>
      <div id="nav">
        <ul className="">
          <li className="hover:text-yellow-200">What I Do</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div id="links" className="flex justify-center ">
        <a href="https://github.com/natitedros">
          <img
            className="size-10 m-5"
            src="/assets/github.512x499.png"
            alt="Github icon"
          />
        </a>
        <a href="https://linked.in/natitedros">
          <img
            className="size-10 m-5"
            src="/assets/linkedin.512x512.png"
            alt="Linkedin icon"
          />
        </a>
        <a href="https://www.instagram.com/nati_tedros/">
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
