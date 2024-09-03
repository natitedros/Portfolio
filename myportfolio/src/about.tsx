interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  return (
    <div className="text-justify m-10 px-10 sm:px-7">
      <article>
        An inquisitive Computer engineering fresh graduate who loves social
        interaction. Eager to learn, grow, and make meaningful contributions to
        the tech industry.
        <br />
        <br />I am a Software engineer with over 3 years of industry experience
        in web and mobile application systems development for the healthcare and
        consumer-based industry.
      </article>
    </div>
  );
};

export default About;
