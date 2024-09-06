interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
  return (
    <div className="w-2/5 p-15 sm:p-10 flex flex-col justify-evenly h-screen">
      <div id="intro" className="text-justify">
        <h1 className="text-5xl font-extrabold">Natnael Desta</h1>
        <h3 className="text-2xl">Software Engineer</h3>
        <br />
        <p className="">
          Software engineer with over 3 years of industry experience in web and
          mobile application systems development for the healthcare and
          consumer-based industry.
        </p>
      </div>
      <div id="nav">
        <ul className="">
          <li>About</li>
          <li>Work Experience</li>
          <li>Key Skills</li>
          <li>Personal Projects</li>
          <li>Awards</li>
        </ul>
      </div>
      <div id="links" className="flex justify-center ">
        <img
          className="size-10 m-5"
          src="/assets/github.512x499.png"
          alt="Github icon"
        />
        <img
          className="size-10 m-5"
          src="/assets/linkedin.512x512.png"
          alt="Linkedin icon"
        />
        <img
          className="size-10 m-5"
          src="/assets/instagram.512x512.png"
          alt="Insta icon"
        />
      </div>
    </div>
  );
};

export default NavBar;
