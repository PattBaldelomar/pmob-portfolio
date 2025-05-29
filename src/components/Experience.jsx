import { Briefcase, Code, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Experience = () => {

  const [typed, setTyped] = useState("");
  const fullText = "About Me";
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
            }, 2000); // Wait 2 seconds before deleting
            return prev;
          }
        });
      }, 120);
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
      }, 40);
    }
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, [isDeleting]);

  useEffect(() => {
    typingIndex.current = 0;
    setTyped("");
    setIsDeleting(false);
    setDone(false);
  }, []);


  return (
  <section id="experience" className="scroll-mt-20 bg-transparent">
      <div className="container">
        {/* headline */}
        <h2 className="text-3xl lg:text-4xl lg:leading-tight font-bold dark:text-[#ffc248] text-[#001d3d] pt-3 mb-12">
          <span>
            {typed.split("Me")[0]}
            <span className="text-primary dark:text-white text-[#e2a837]">
              {typed.includes("Me") ? "Me" : ""}
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

        {/* two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* left column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold dark:text-[#e2a837] text-[#001d3d] ">
              Passionate Web Developer <span className="dark:text-[#ffffff] text-[#e2a837]">&</span> Tech Creator
            </h3>

            <p className="text-muted-foreground dark:text-zinc-300 text-[#001d3d]/50">
              With over 2 years of experience in full stack developmentI build responsive, accessible, and performant web and mobile applications using modern technologies—skilled across frontend, backend, mobile, and cloud development.
            </p>
          </div>

          {/* right column */}
          <div className="grid grid-cols-1 gap-6 ">
          
            {/* card 1 */}
            <div className="p-6 card-hover dark:bg-zinc-50/10 bg-zinc-200/50 rounded-2xl ring-inset ring-1 ring-zinc-50/5 ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Code className="h-6 w-6 text-primary dark:text-[#e2a837] text-[#001d3d]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg dark:text-[#e2a837] text-[#001d3d]">Web Development</h4>
                  <p className="text-muted-foreground dark:text-zinc-300 text-[#001d3d]/50">
                    Creating responsive websites and web apps with modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="p-6 card-hover dark:bg-zinc-50/10 bg-zinc-200/50 rounded-2xl ring-inset ring-1 ring-zinc-50/5 ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary dark:text-[#e2a837] text-[#001d3d]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg dark:text-[#e2a837] text-[#001d3d]">UI/UX Design</h4>
                  <p className="text-muted-foreground dark:text-zinc-300 text-[#001d3d]/50">
                    Designing intuitive user interfaces and seamless
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="p-6 card-hover dark:bg-zinc-50/10 bg-zinc-200/50 rounded-2xl ring-inset ring-1 ring-zinc-50/5 ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary dark:text-[#e2a837] text-[#001d3d]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg dark:text-[#e2a837] text-[#001d3d] ">Project Management</h4>
                  <p className="text-muted-foreground dark:text-zinc-300 text-[#001d3d]/50">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /right column */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
