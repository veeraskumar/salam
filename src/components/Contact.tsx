import Rectangle33 from "../assets/Rectangle 33.png";
import MyImgae from "../assets/my image.png";

export default function Contact() {
  const rectangle = `url(${Rectangle33}`;
  const style: string = "font-sans not-sm:text-[8px] text-dark-purple";
  return (
    <footer
      className="flex justify-center flex-col bg-cover w-full md:h-52 h-28 mt-6"
      style={{ backgroundImage: rectangle }}
      id="contact"
    >
      <div className="flex items-center justify-between mx-[10%]">
        <img
          src={MyImgae}
          alt={MyImgae}
          className="md:w-[7%] w-[10%] -scale-x-100"
          loading="lazy"
        />
        <img src={MyImgae} alt="profile" className="md:w-[7%] w-[10%] " />
      </div>
      <div className="flex items-center justify-between md:mx-6 mx-2.5">
        <div className="">
          <div className="">
            <span className={`${style} mr-2`}>Email</span>
            <span className={`${style} font-black`}>
              <a href="mailto:abdulsalam250502@gmail.com">
                abdulsalam250502@gmail.com
              </a>
            </span>
          </div>
          <div className="">
            <span className={`${style} mr-2`}>Phone Number</span>
            <span className={`${style} font-black`}>
              <a href="tel:+916379212429">+91 63792 12429</a>
            </span>
          </div>
        </div>
        <h3 className="font-kalam not-sm:text-xl text-dark-purple md:-translate-y-8">
          Get In Touch
        </h3>
        <div className={`${style} font-black tracking-[.25rem]`}>
          <a
            href="https://www.linkedin.com/in/abdul-salam-h-m-236629221"
            target="_blank"
          >
            LinkedIn
          </a>
          <br />
          <a href="https://www.behance.net/salamsalam40" target="_blank">
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
}
