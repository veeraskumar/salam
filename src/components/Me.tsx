import Ellipse1 from "../assets/Ellipse 1.png";
import Ellipse3 from "../assets/Ellipse 3.png";
import ImageOfMe from "../assets/Me.png";

const Me = () => {
  return (
    <section
      id="home"
      className="w-full lg:h-dvh md:h-[700px] h-[500px] relative"
    >
      <div className="flex items-center justify-evenly not-sm:flex-col-reverse h-full w-full">
        <div className="flex flex-col md:gap-y-15 gap-y-3 md:w-[40%] w-[90%]">
          <h3 className="text-center font-allura font-medium">
            Hello I’m Abdul Salam
          </h3>
          <p>
            I Design With Empathy And Curiosity. As A Growing Ui/ux Designer, I
            Love Transforming Ideas Into Engaging, Easy To Use Interfaces. Every
            Project I Work On Helps Me Learn Something New About Users, Design
            Systems, And Problem Solving Through Design.
          </p>
        </div>
        <div className="w-[40%]">
          <img
            src={ImageOfMe}
            alt={ImageOfMe}
            className="not-sm:w-screen"
            loading="lazy"
          />
        </div>
      </div>
      <img
        className="absolute w-1/12 md:w-fit top-0 left-0 "
        alt={Ellipse1}
        src={Ellipse1}
        loading="lazy"
      />
      <img
        className="absolute w-1/12 md:w-fit right-0 bottom-0"
        src={Ellipse3}
        loading="lazy"
      />
    </section>
  );
};

export default Me;
