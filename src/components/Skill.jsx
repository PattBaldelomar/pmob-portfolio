import { useEffect, useRef, useState } from "react";
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: '/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/mysql.svg',
    label: 'MySQL',
    desc: 'Database'
  },
  {
    imgSrc: '/roboflow.svg',
    label: 'Roboflow',
    desc: 'Image Processing'
  },
  {
    imgSrc: '/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/php.svg',
    label: 'PHP',
    desc: 'Server-side'
  },
  {
    imgSrc: '/python.svg',
    label: 'Python',
    desc: 'Scripting Language' 
  },
  {
    imgSrc: '/pytorch.svg',
    label: 'Pytorch',
    desc: 'Machine Learning' 
  },
  {
    imgSrc: '/yolo.svg',
    label: 'YOLO v8',
    desc: 'Object Detection' 
  },
  {
    imgSrc: '/unity.svg',
    label: 'Unity',
    desc: 'Game Development' 
  },
  {
    imgSrc: '/googlecolab.svg',
    label: 'Google Colab',
    desc: 'Cloud Computing' 
  },
  {
    imgSrc: '/html.svg',
    label: 'HTML',
    desc: 'Structure' 
  },
  {
    imgSrc: '/bootstrap.svg',
    label: 'Bootstrap',
    desc: 'CSS Framework' 
  },
  {
    imgSrc: '/wordpress.svg',
    label: 'Wordpress',
    desc: 'Content Management System' 
  },
  {
    imgSrc: '/github.svg',
    label: 'Github',
    desc: 'Version Control' 
  },
  {
    imgSrc: '/AzureDevops.svg',
    label: 'Azure Devops',
    desc: 'Project Management' 
  },
  {
    imgSrc: '/oracle.svg',
    label: 'Oracle',
    desc: 'Database Management'
  },
  {
    imgSrc: '/SAP.svg',
    label: 'SAP',
    desc: 'Enterprise Resource Planning'
  },
  {
    imgSrc: '/shopify.svg',
    label: 'Shopify',
    desc: 'E-commerce Platform'
  },
];

const Skill = () => {
  // Typing effect for "Tech Stack"
  const [typed, setTyped] = useState("");
  const fullText = "Tech Stack";
  const typingIndex = useRef(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [done, setDone] = useState(false);

  // Show more/less logic
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);
  const [isSmall, setIsSmall] = useState(window.innerWidth <= 640);

  // Responsive: Show only 6 skills on smallest screens
  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 640);
      if (window.innerWidth <= 640) {
        setVisibleCount(6);
      } else if (window.innerWidth <= 1024) {
        setVisibleCount(10);
      } else {
        setVisibleCount(15);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            }, 2000); // Wait 2 seconds before deleting
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
            return prev;
          }
        });
      }, 120);
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

  // Determine which skills to show
  const skillsToShow = showAll ? skillItem : skillItem.slice(0, visibleCount);

  return (
    <section className="section" style={{
        marginTop: isSmall ? "5rem" : "-2rem",
      }}>
      <div id="skill" className="container scroll-mt-20">
         <h2 className="text-center text-3xl lg:text-4xl lg:leading-tight font-bold dark:text-[#ffc248] text-[#001d3d] pt-3 mb-12">
          <span>
            <span>
              {typed.slice(0, 4)}
            </span>
            <span className="text-primary dark:text-white text-[#e2a837]">
              {typed.length > 4 ? typed.slice(4) : ""}
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

        <p className="text-center mx-auto dark:text-zinc-300 text-[#001d3d]/50 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillsToShow.map(({ imgSrc, label, desc }, key) =>
            isSmall ? (
              <div
                key={key}
                className="flex flex-col items-center ring-2 ring-inset justify-center dark:ring-zinc-50/10 ring-[#001d3d]/10 rounded-2xl p-3 dark:hover:bg-[#ffc248]/10 hover:bg-[#001d3d]/20  cursor-pointer"
              >
                <img src={imgSrc} alt={label} className="w-12 h-12 mb-2" />
                <span className="font-semibold text-[#001d3d] dark:text-[#ffc248]">{label}</span>
              </div>
            ) : (
              <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
            )
          )}
        </div>

        {skillItem.length > visibleCount && (
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
      <style>
        {`
          @media (max-width: 768px) {
            #skill {
              margin-top: 0rem !important;
            }
            .section {
              margin-top: -5rem !important;
              margin-bottom: 3rem !important;
            }
          }
          @media (max-width: 640px) {
            #skill .grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Skill;