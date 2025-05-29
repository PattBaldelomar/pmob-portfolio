import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// Import your GIF files
import demoGif6 from "/KNVDemo.gif";
import demoGif8 from "/UVEDemo.gif"; 
import demoGif5 from "/ENOKDemo.gif";  
import demoGif3 from "/CBCDemo.gif";  
import demoGif4 from "/CBCVIPDemo.gif";  
import demoGif2 from "/BMCDemo.gif"; 
import demoGif1 from "/ARBASADemo.gif";
import demoGif7 from "/R2HDemo.gif";  

const projectsData = [
  {
    image: demoGif1,
    title: "ARBASA INC.",
    description: "A comprehensive e-commerce system, featuring both client and admin interface to enhance the functionality of a fully operational website. The system is seamlessly integrated with the MySQL database through phpMyAdmin. ",
    technologies: ["HTML", "Javascript", "CSS", "PHP", "MySQL"],
    type: "E-commerce"
  },
  {
    image: demoGif2,
    title: "BMC Pros",
    description: "BMC Pros offers comprehensive business solutions—from web development and staffing to operational support and consulting—designed to help companies grow, streamline, and succeed.",
    technologies: ["Wordpress", "Javascript", "HTML", "CSS", "Elementor"],
    type: "Wordpress"
  },
  {
    image: demoGif3,
    title: "Cash Buyers Club",
    description: "Cash Buyers Club is a private real estate platform offering exclusive, off-market property deals for investors who buy with cash. Members gain early access to listings, faster closings, and premium perks through Gold and Diamond tiers.",
    technologies: ["Wordpress", "Javascript", "HTML", "CSS", "Elementor"],
    type: "Wordpress"
  },
  {
    image: demoGif4,
    title: "Cash Buyers Club VIP",
    description: "Cash Buyers Club VIP is an elite extension of the Cash Buyers Club, providing top-tier investors with access to premium real estate deals, VIP-only listings, and high-value investment opportunities not available to the public.",
    technologies: ["Wordpress", "Javascript", "HTML", "CSS", "Elementor"],
    type: "Wordpress"
  },
   {
    image: demoGif5,
    title: "E.N.O.K Gloabal",
    description: "ENOK Global is a digital platform that showcases innovative projects and creative solutions across web development, branding, and technology—designed to empower businesses and creators with a strong online presence.",
    technologies: ["Wordpress", "Javascript", "HTML", "CSS", "Elementor"],
    type: "Wordpress"
  },
  {
    image: demoGif6,
    title: "Knight's Night Voyage",
    description: "Knight’s Night Voyage (KNV) is a fast-paced action platformer game. KNV combines the concept of adventure while implementing the mind-bending obstacles. ",
    technologies: ["Unity", "Javascript"],
    type: "Games"
  },
  {
    image: demoGif7,
    title: "Read2Hear",
    description: "Read2Hear will provide a computer-generated spoken voice to read the scanned texts to the user through a text-to-speech (TTS) feature. ",
    technologies: ["Javascript", "Python", "YoloV8", "Google Colab", "Roboflow", "Google Vision", "PyTorch"],
    type: "Mobile Application"
  },
  {
    image: demoGif8,
    title: "UVE Connect",
    description: "UVE Connect is a convenient and reliable way for UV Express Drivers and also for “barkers” to track rides, number of passengers, and fares.",
    technologies: ["React Native", "Javascript"],
    type: "Mobile Application"
  },
];

const FILTERS = [
  "All",
  "E-commerce",
  "Wordpress",
  "Mobile Application",
  "Games"
];

const ScrollReveal = ({children}) => (
  <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}
  >
    {children}
  </motion.div>
);

const ProjectCard = ({project}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-14 bg-zinc-500/10 rounded-2xl ring-inset ring-1 ring-zinc-50/5 p-6 w-full">
      <img
        src={project.image}
        alt={project.title}
        className="w-full cursor-pointer rounded-lg transition-all duration-300 hover:scale-105 md:w-[300px]"
        onClick={() => setShowModal(true)}
      />

      <div className="flex flex-col gap-5 ">
        <div className="flex flex-col gap-3 ">
          <div className="text-xl font-semibold ">{project.title}</div>
          <p className="dark:text-gray-400 text-[#001d3d]/50">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-[12px]  dark:text-[#ffffff] text-[#001d3d] rounded-md dark:bg-[#111b2c] dark:ring-0 ring-1 ring-[#001d3d] p-2 ">
              {tech}
            </span>
          ))}
        </div>
      </div>
      {/* Modal for enlarged image/GIF */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setShowModal(false)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Typing effect for "My Projects"
  const [typed, setTyped] = useState("");
  const fullText = "My  Projects";
  const typingIndex = useRef(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let interval;
    let timeout;
    if (!isDeleting) {
      interval = setInterval(() => {
        setTyped((prev) => {
          if (typingIndex.current < fullText.length) {
            const next = fullText.slice(0, typingIndex.current + 1);
            typingIndex.current += 1;
            return next;
          } else {
            setDone(true);
            clearInterval(interval);
            timeout = setTimeout(() => {
              setIsDeleting(true);
              setDone(false);
            }, 2000);
            return prev;
          }
        });
      }, 80);
    } else {
      interval = setInterval(() => {
        setTyped((prev) => {
          if (typingIndex.current > 0) {
            const next = fullText.slice(0, typingIndex.current - 1);
            typingIndex.current -= 1;
            return next;
          } else {
            setIsDeleting(false);
            clearInterval(interval);
            return "";
          }
        });
      }, 40);
    }
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isDeleting]);

  useEffect(() => {
    typingIndex.current = 0;
    setTyped("");
    setIsDeleting(false);
    setDone(false);
  }, []);

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.type === filter);

  // Only show 4 projects in "All" filter unless showAll is true
  const projectsToShow =
    filter === "All" && !showAll
      ? filteredProjects.slice(0, 4)
      : filteredProjects;

  return (
    <section className="section">
      <div id="projects" className="container scroll-mt-20">
        <h2 className="text-center text-3xl lg:text-4xl lg:leading-tight font-bold dark:text-[#ffc248] text-[#001d3d] pt-3 mb-12">
          <span>
            <span>
              {typed.slice(0, 2)}
            </span>
            <span className="text-primary dark:text-white text-[#e2a837]">
              {typed.length > 2 ? typed.slice(2) : ""}
            </span>
            <span
              className="animate-pulse inline-block w-2 h-6 align-middle dark:bg-[#ffc248] bg-[#001d3d] ml-1"
              style={{
                visibility:
                  typed.length < fullText.length || done ? "visible" : "hidden",
              }}
            ></span>
          </span>
        </h2>

        {/* Filter Navbar */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setShowAll(false); // Reset showAll when changing filter
              }}
              className={`px-4 py-2 rounded-md border transition-all duration-200 ease-in-out
      ${
        filter === cat
          ? "dark:bg-[#ffc248] bg-[#001d3d] dark:text-[#181f2a] text-[#ffffff] dark:border-[#ffc248] border-[#a2d6f9]/20 font-bold"
          : "bg-[#181f2a]/30 text-[#001d3d] dark:text-[#ffffff] border-[#a2d6f9]/20 dark:hover:bg-[#ffc248]/50 hover:bg-[#001d3d]/50 hover:text-white dark:hover:border-[#ffc248] hover:border-[#a2d6f9]/20 hover:scale-105 "
      }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="flex w-full flex-col gap-16 dark:text-[#e2a837] text-[#001d3d] min-h-[600px] ">
          {projectsToShow.length === 0 ? (
            <div className="text-center dark:text-[#e2a837] text-[#001d3d] ">No projects found.</div>
          ) : (
            projectsToShow.map((project, index) => (
              <ProjectCard key={index} project={project}/>
            ))
          )}
        </div>

        {/* Show More / Show Less Button */}
        {filter === "All" && filteredProjects.length > 4 && (
          <div className="flex justify-center mt-6">
    <button
      className="px-6 py-2 rounded dark:bg-[#ffc248] bg-[#001d3d] dark:text-[#181f2a] text-[#ffffff] font-semilight dark:hover:bg-[#e2a837] hover:bg-[#293e56] transition flex items-center gap-2"
      onClick={() => setShowAll((prev) => !prev)}
    >
      {showAll ? "See Less" : "See More"}
      <span className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}>
        {/* Arrow Down SVG */}
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path d="M6 9l6 6 6-6" className="stroke-[#fffbe9] dark:stroke-[#181f2a]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </button>
  </div>
        )}
      </div>
    </section>
  );
};

export default Projects;