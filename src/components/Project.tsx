import Group91 from "../assets/Group 91.png";
import Group92 from "../assets/Group 92.png";
import Group93 from "../assets/Group 93.png";
import Group94 from "../assets/Group 94.png";
import Group95 from "../assets/Group 95.png";
import Group96 from "../assets/Group 96.png";
import Vector from "../assets/Vector 2.png";

export default function Project() {
  const projectCards: {
    title: string;
    img: string;
    para: string;
    bgColor: string;
    pColor: boolean;
    href: string;
  }[] = [
    {
      title: "Eco City Waste Solution",
      img: Group91,
      para: "To Improve The Ecocity Waste Solution App, Developers Should Fix Bugs, Improve Accuracy, And Enhance Performance. Awareness Campaigns Can Help More People use the app",
      bgColor: "bg-[#ffdcbf]",
      pColor: true,
      href: "https://www.figma.com/proto/KkVhNl5LcDV7Qs6rc7eV0N/eco-city-waste-solution-protfolio?page-id=0%3A1&node-id=227-1698&t=bZJ5k8DheYCCp2Ey-1",
    },
    {
      title: "Freelance Connect",
      img: Group92,
      para: "A Specialized Marketplace Connecting Creative Professionals With Clients, Featuring A Streamlined Job Feed, Comprehensive Talent Profiles, And A Direct Proposal System To Simplify The Hiring Workflow.",
      bgColor: "bg-[#b4d6cb]",
      pColor: true,
      href: "https://www.figma.com/proto/4goKytQi2nfWJCF1UYGTOs/future-intern-task-3?page-id=60%3A2&node-id=119-1496&p=f&viewport=712%2C-230%2C0.28&t=61RvLuOyxmpAWMOx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=60%3A3",
    },
    {
      title: "Focus",
      img: Group93,
      para: "A Holistic Wellness App Designed To Enhance Emotional Well-being Through Guided Meditation, Intuitive Mood Tracking, And Visual Habit Streaks, Delivered Via A Serene, Accessible Interface.",
      bgColor: "bg-[#f49c58]",
      pColor: true,
      href: "https://www.figma.com/proto/FfM8MAgjqya5IXymSzHHdG/future-intern-task-2?page-id=148%3A530&node-id=180-612&viewport=317%2C135%2C0.24&t=j1XLcWrOAO0nTrSb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=148%3A531",
    },
    {
      title: "Food-app",
      img: Group94,
      para: "A Streamlined Digital Ordering Interface Designed To Enhance The Dining Experience, Allowing Users To Effortlessly Browse Categorized Menus,view High-quality Visuals, And Place Orders For Dine-in Or Takeaway With Minimal Friction.",
      bgColor: "bg-[#fff5ba]",
      pColor: true,
      href: "https://www.figma.com/proto/w6EFw087EqucRftV7vQmK2/future-intern-task-1?page-id=0%3A1&node-id=561-1270&p=f&viewport=125%2C3730%2C0.21&t=wogJXNfNkf8PEQdB-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=317%3A3730",
    },
    {
      title: "Carbon Iq",
      img: Group95,
      para: "I Designed A Website For A Sustainability Marketplace Focused On Carbon Management.",
      bgColor: "bg-[#085ca1]",
      pColor: false,
      href: "https://www.figma.com/proto/T3ZvaL29MARGeqEku6rWnm/CarbonIQ?page-id=0%3A1&node-id=1-8915&p=f&viewport=287%2C136%2C0.06&t=PdDUlWIVPiyjdfdc-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A8915",
    },
    {
      title: "Crypto",
      img: Group96,
      para: "A Cryptocurrency Is A Secure, Digital Currency That Uses Encryption To Function As Both A Payment Method And A Virtual Accounting System.",
      bgColor: "bg-[#3c024b]",
      pColor: false,
      href: "https://www.figma.com/proto/3sk8iZRZ2xAFakiaVJQ5XG/dash-portfolio?page-id=0%3A1&node-id=1-9&viewport=398%2C118%2C0.13&t=oCjUMraVPbNeM0sf-1&scaling=min-zoom&content-scaling=fixed",
    },
  ];
  return (
    <article className="w-full" id="project">
      <h3 className="icons-font text-center">Project</h3>
      <div className="w-[90%] grid grid-cols-2 my-6 not-sm:grid-cols-1 not-sm:gap-y-4 gap-y-5 m-auto">
        {projectCards.map(({ title, img, para, bgColor, pColor, href }, i) => (
          <div
            key={i}
            className={`${bgColor} w-[80%] m-auto h-[600px] not-sm:h-[400px] flex flex-col justify-center items-center rounded-3xl group hover:scale-103 active:hover:scale-103 duration-300 transition-all`}
          >
            <div className="w-[90%] m-auto">
              <div className="w-[50%] m-auto">
                <img
                  src={img}
                  alt={img}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="">
                <h3
                  className={`${
                    pColor ? "text-black" : "text-white"
                  } font-Playfair-Display text-4xl not-sm:text-2xl font-black my-4 md:my-6`}
                >
                  {title}
                </h3>
                <p className={`${pColor ? "text-black" : "text-white"}`}>
                  {para}
                </p>
              </div>
            </div>
            <a
              href={href}
              target="_blank"
              className="m-[5%] w-0 group-hover:w-[70%] group-hover:py-1 not-sm:group-hover:py-0.5 bg-black rounded-[6px] duration-300 transition-all ease-in-out"
            >
              <img src={Vector} alt={Vector} className="m-auto p-1" />
            </a>
          </div>
        ))}
      </div>
    </article>
  );
}
