import "./App.css";
import Nav from "./components/Nav";
import Me from "./components/Me";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Info from "./components/Info";

export default function App() {
  return (
    <div className="w-full scroll-smooth">
      <header>
        <Nav />
      </header>
      <main id="main-content">
        <Me />
        <About />
        <Project />
        <Contact />
      </main>
      <footer></footer>
      <Info />
    </div>
  );
}
