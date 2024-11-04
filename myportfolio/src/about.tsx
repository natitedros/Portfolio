interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  return (
    <div id="about" className="text-lg pt-10">
      <article>
        I am an inquisitive Computer engineering graduate with passion for
        software development, eager to learn, grow, and make meaningful
        contributions to the tech industry.
        <br />I hold over 3 years of industry experience in web and mobile
        application systems development for the healthcare and consumer-based
        industry.
      </article>
    </div>
  );
};

export default About;
