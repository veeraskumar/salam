import ImageRemoveBgPreview from "../assets/image-removebg-preview (50) 1.png";
import Image7 from "../assets/image 7.png";
import Image8 from "../assets/image 8.png";
import Image11 from "../assets/image 11.png";
import AboutMe from "../assets/AboutMe.png";
import Tools from "../assets/Group 97.png";

const toolsVar: { img: string; p: string; style: string }[] = [
  {
    img: ImageRemoveBgPreview,
    p: "Figma",
    style: "hover:shadow-[#161719]",
  },
  {
    img: Image8,
    p: "Adobe Xd",
    style: "hover:shadow-[#470137]",
  },
  {
    img: Image11,
    p: " Balsamiq",
    style: "hover:shadow-red-500",
  },
  {
    img: Image7,
    p: "Miro",
    style: "hover:shadow-[#ffcf2b]",
  },
];

export default function About() {
  return (
    <main
      className="w-full lg:h-dvh md:h-[700px] h-[500px] flex flex-col"
      id="about"
    >
      <div className="flex-center w-full h-1/2 not-sm:flex-col">
        <h3 className="md:hidden icons-font not-sm:my-4">About Me</h3>
        <img src={AboutMe} alt={AboutMe} className="not-sm:hidden w-[40%]" />
        <div className="not-sm:w-[90%] not-sm:flex-center w-[60%]">
          <p className="">
            I’m A Passionate And Curious Ui/ux Designer At The Beginning Of My
            Professional Journey, Focused On Creating Intuitive, User-centered
            Digital Experiences. I Enjoy Turning Complex Ideas Into Clean,
            Simple, And Meaningful Designs That Solve Real User Problems.
          </p>
          <p className="">
            I’ve Worked On Personal And Practice Projects Involving User
            Research, Wireframing, Ui Design, And Prototyping, Using Tools Like
            Figma, Adobe Xd, And Illustrator. I Believe Good Design Is Not Just
            About How It Looks, But How It Works, And I’m Always Eager To Learn,
            Improve, And Grow As A Designer.
          </p>
        </div>
      </div>
      <div className="flex not-sm:flex-col-reverse w-full not-sm:h-fit h-1/2">
        <div className="md:w-1/2 w-full h-full m-auto grid grid-cols-2 justify-items-center items-center">
          {toolsVar.map(({ img, p, style }, i) => (
            <div
              className={`shadow-md hover:scale-103 flex-center w-[80%] h-[80%] flex-col duration-500 rounded-lg ${style}`}
              key={i}
            >
              <img src={img} alt={img} loading="lazy" />
              <p className="font-inter font-semibold">{p}</p>
            </div>
          ))}
        </div>
        <div className="w-1/2 not-sm:w-full text-center">
          <h3 className="md:hidden icons-font not-sm:my-4">Tools</h3>
          <img
            src={Tools}
            alt={Tools}
            className="object-contain my-auto not-sm:hidden"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}
