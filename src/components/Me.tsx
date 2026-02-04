import Ellipse1 from "../assets/Ellipse 1.png";
import Ellipse3 from "../assets/Ellipse 3.png";
import ImageOfMe from "../assets/Me.png";

const Me = () => {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="w-full lg:h-dvh md:h-[700px] h-[500px] relative"
    >
      <div className="flex items-center justify-evenly not-sm:flex-col-reverse h-full w-full">
        <div className="flex flex-col md:gap-y-15 gap-y-3 md:w-[40%] w-[90%]">
          <h1 className="me">Abdul Salam – UI/UX Designer</h1>

          <p>
            Hello, I’m Abdul Salam. I design with empathy and curiosity. As a
            growing UI/UX designer, I love transforming ideas into engaging,
            easy-to-use interfaces. Every project I work on helps me learn more
            about users, design systems, and problem-solving through design.
          </p>
        </div>

        <div className="md:w-[40%] w-full flex justify-center">
          <img
            src={ImageOfMe}
            alt="Abdul Salam UI/UX Designer portrait"
            className="max-sm:w-1/2"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
      <img
        className="absolute w-1/12 md:w-fit top-0 left-0"
        src={Ellipse1}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <img
        className="absolute w-1/12 md:w-fit right-0 bottom-0"
        src={Ellipse3}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
    </section>
  );
};

export default Me;
