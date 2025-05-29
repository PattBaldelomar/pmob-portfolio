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

//   useEffect(() => {
//   function resizeAndDraw() {
//     if (canvasRef.current) {
//       const dpr = window.devicePixelRatio || 1;
//       canvasRef.current.width = window.innerWidth * dpr;
//       canvasRef.current.height = window.innerHeight * dpr;
//       canvasRef.current.style.width = window.innerWidth + "px";
//       canvasRef.current.style.height = window.innerHeight + "px";
//       // If ThpaceGL supports passing dpr, do so; otherwise, it will use the canvas size
//       ThpaceGL.create(canvasRef.current, {
//         colors: ["#181f2a", "#181f2a", "#e2a837"],
//         triangleSize:500, // or any size you want
//       });
//     }
//   }

//   resizeAndDraw();
//   window.addEventListener("resize", resizeAndDraw);

//   return () => {
//     window.removeEventListener("resize", resizeAndDraw);
//     if (canvasRef.current && canvasRef.current.parentNode) {
//       canvasRef.current.parentNode.removeChild(canvasRef.current);
//     }
//   };
// }, []);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
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

    
     <div className="fixed -z-10 min-h-screen w-full">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e2a837_2px,transparent_1px)] [background-size:96px_96px] dark:bg-[#181f2a] dark:bg-[radial-gradient(#e2a837_1px,transparent_.9px)]"></div>
      </div>

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        {/* <Hero /> */}
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