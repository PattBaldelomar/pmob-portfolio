import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {

    const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 dark:from-[#2a383f] dark:to-zinc-900/0 from-[#2a383f]/30 to-zinc-900/0 ">

        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
            <h1>
    <a href="/" className="logo">
        <img
            src="/logo2.svg"
            width={40}
            height={40}
            alt="Patt Baldelomar"
            className="block dark:hidden"
        />
        <img
            src="/logo.svg"
            width={40}
            height={40}
            alt="Patt Baldelomar"
            className="hidden dark:block"
        />
    </a>
</h1>

            <div className="relative md:justify-self-center">
                <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
                    <span className="material-symbols-rounded ">
                        {navOpen ? 'close' : 'menu' }
                    </span>
                </button>

                <Navbar navOpen={navOpen}/>
            </div>

            <a href="#contact" className="text-zinc-400 btn btn-secondary max-md:hidden md:justify-self-end ">
                Contact Me
            </a>

        </div>

    </header>
  )
}

export default Header
