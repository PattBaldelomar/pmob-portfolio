import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Work from "./components/Work";
import { ThpaceGL } from "thpace";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const canvasRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Prevent horizontal scroll on all screen sizes (mobile & tablet)
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
    document.body.style.width = "100vw";
    document.documentElement.style.width = "100vw";
    // Prevent pinch-zoom horizontal scroll on mobile/tablet
    document.body.style.maxWidth = "100vw";
    document.documentElement.style.maxWidth = "100vw";
    return () => {
      document.body.style.overflowX = "";
      document.documentElement.style.overflowX = "";
      document.body.style.width = "";
      document.documentElement.style.width = "";
      document.body.style.maxWidth = "";
      document.documentElement.style.maxWidth = "";
    };
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen w-screen overflow-x-hidden`}>
      <Header />
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 right-4 z-50 p-2 rounded-md dark:bg-gray-200 bg-[#001d3d] text-black dark:text-white shadow-md"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
      {/* ThpaceGL canvas background */}
      <canvas
        ref={canvasRef}
        id="make-me-cool"
        className="fixed inset-0 -z-20 w-full h-full"
      />

      <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">
        <div className="w-full h-full min-h-full bg-[#dbe9ee] bg-[radial-gradient(#e2a837_2px,transparent_1px)] [background-size:96px_96px] dark:bg-[#181f2a] dark:bg-[radial-gradient(#dbe9ee_1px,transparent_.9px)]"></div>
      </div>

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Hero />
      </main>

      <main className="flex flex-col px-4 py-32 md:px-8 lg:px-16">
        <Skill />
      </main>

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Projects />
      </main>

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Contact />
      </main>
    </div>
  );
}

export default App;