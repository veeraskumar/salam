export default function Nav() {
  return (
    <nav className=" w-full  h-8 md:p-8 p-3.5 flex items-center justify-between bg-dark-purple text-white z-50">
      <h3 className="md:text-5xl text-3xl font-allura cursor-default">As</h3>
      <div className="flex md:gap-12 gap-3 cursor-pointer">
        <a href="#about" className="nav-a hover:text-white hover:scale-104">
          About Me
        </a>
        <a href="#project" className="nav-a hover:text-white hover:scale-104">
          Project
        </a>
        <a href="#contact" className="nav-a hover:text-white hover:scale-104">
          Contact
        </a>
      </div>
    </nav>
  );
}
