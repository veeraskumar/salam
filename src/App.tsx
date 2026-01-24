import "./App.css";
import Nav from "./components/Nav";
import Me from "./components/Me";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Info from "./components/info";

export default function App() {
  return (
    <div className="w-full scroll-smooth">
      <Nav />
      <Me />
      <About />
      <Project />
      <Contact />
      <Info />
    </div>
  );
}
