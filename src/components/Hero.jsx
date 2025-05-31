import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

// Button component
const Button = ({ children, href, primary, ...props }) => (
  <a
    href={href}
    {...props}
    className={`px-6 py-2 rounded-full font-semibold transition 
      ${primary
        ? "dark:bg-[#e2a837] bg-[#001d3d] dark:text-[#181f2a] text-[#ffffff] dark:hover:bg-[#ffc248] hover:bg-[#293e56]"
        : "border dark:border-[#f5bb06] border-[#001d3d] dark:text-zinc-200 text-[#001d3d] dark:hover:bg-[#ffc248] hover:bg-[#293e56] dark:hover:text-[#ffffff] hover:text-[#ffffff]"}
    `}
  >
    {children}
  </a>
);

const getVantaColors = () => {
  const isDark = document.documentElement.classList.contains("dark");
  return isDark
    ? {
        color: "#e2a837",
        color2: "#EAE2B7",
        backgroundColor: "#181f2a"
      }
    : {
        color: "#181f2a",
        color2: "#99c1de",
        backgroundColor: "#dbe9ee"
      };
};

const Hero = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // Helper to (re)init Vanta with mode-aware colors
    const applyVanta = () => {
      const colors = getVantaColors();
      const isSmallScreen = window.innerWidth < 768;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
      if (vantaRef.current && !isSmallScreen) {
        vantaEffect.current = GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: colors.color,
          color2: colors.color2,
          backgroundColor: colors.backgroundColor,
          size: 1.1,
          showLines: false
        });
      }
    };

    applyVanta();

    // Listen for theme changes and window resize
    const observer = new MutationObserver(applyVanta);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("resize", applyVanta);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", applyVanta);
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={vantaRef}
      className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-screen w-screen h-screen px-0 py-0 gap-10 overflow-hidden"
      style={{ minHeight: "100vh", width: "100vw", padding: 0, margin: 0 }}
    >
      {/* Left: Text Content */}
      <motion.div
  initial={{ x: -50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex-1 flex flex-col items-center text-center md:items-start md:text-left gap-4 z-10 px-12 py-1 mt-20 md:px-6 md:py-16 md:ml-52 md:mt-16"
>
        <span className="text-[#001d3d] dark:text-[#f5bb06] font-medium text-sm flex items-center gap-2">
          <span className="relative w-2 h-2 rounded-full bg-[#4ad66d] ">
            <span className="absolute inset-0 rounded-full bg-[#6ede8a] animate-ping"></span>
          </span>
          Available for Work
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#e2a837] dark:text-white">
          Hi, I'm <span className=" text-[#001d3d] dark:text-[#e2a837]">Patt Baldelomar</span>
        </h1>
        <h2 className="dark:text-[#e2a837] text-[#001d3d] text-lg md:text-xl font-semibold">
          Full Stack Developer
        </h2>
        <p className="text-[#001d3d] dark:text-[#e2a837] max-w-md font-medium">
          I build modern, responsive websites and web applications with a focus on clean design and great user experience.
        </p>
        <div className="flex gap-4 pt-4">
          <Button
            primary
            href="/BALDELOMAR_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </Button>
          <Button href="#projects">
            View Projects
          </Button>
        </div>
      </motion.div>

      {/* Right: Profile Image */}
      {/* ...your right content here... */}

      {/* Responsive bottom gap for mobile/tablet */}
      <style>
  {`
   

    @media (max-width: 1180px) and (min-width: 641px) {
      #home .z-10 {
        align-items: flex-start !important;
        text-align: left !important;
        margin-left: 6rem !important;
        margin-right: 1rem !important;
      }
    }

    @media (max-width: 1180px) {
      #home {
        padding-bottom: 2rem !important;
        margin-bottom: 2rem !important;
      }
    }

    @media (max-width: 768px) {
      #home {
        padding-bottom: 2rem !important;
        margin-bottom: 2rem !important;
      }
      #home .z-10 {
        margin-bottom: 2rem !important;
      }
    }
    @media (max-width: 640px) {
      #home {
        padding-bottom: 2rem !important;
        margin-bottom: -20rem !important;
      }
      #home .z-10 {
        margin-bottom: 1.5rem !important;
      }
    }
    @media (max-width: 400px) and (max-height: 700px) {
      #home {
        padding-bottom: 0.5rem !important;
        margin-bottom: -5rem !important;
      }
      #home .z-10 {
        margin-bottom: 0.5rem !important;
      }
    }
  `}
</style>
    </section>
  );
};

export default Hero;