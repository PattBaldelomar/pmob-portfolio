import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const sectionRefs = useRef([]);

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink,
      sectionId: 'home'
    },
    // {
    //   label: 'Experience',
    //   link: '#experience',
    //   className: 'nav-link',
    //   sectionId: 'experience'
    // },
    {
      label: 'Skills',
      link: '#skill',
      className: 'nav-link',
      sectionId: 'skill'
    },
    {
      label: 'Projects',
      link: '#projects',
      className: 'nav-link',
      sectionId: 'projects'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden',
      sectionId: 'contact'
    }
  ];

  const initActiveBox = () => {
    if (lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener('resize', initActiveBox);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let item of navItems) {
        const section = document.getElementById(item.sectionId);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            const linkEl = document.querySelector(`a[href='${item.link}']`);
            if (linkEl && lastActiveLink.current !== linkEl) {
              lastActiveLink.current?.classList.remove('active');
              linkEl.classList.add('active');
              lastActiveLink.current = linkEl;

              activeBox.current.style.top = linkEl.offsetTop + 'px';
              activeBox.current.style.left = linkEl.offsetLeft + 'px';
              activeBox.current.style.width = linkEl.offsetWidth + 'px';
              activeBox.current.style.height = linkEl.offsetHeight + 'px';
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', initActiveBox);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + 'px';
    activeBox.current.style.left = event.target.offsetLeft + 'px';
    activeBox.current.style.width = event.target.offsetWidth + 'px';
    activeBox.current.style.height = event.target.offsetHeight + 'px';
  };

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      {
        navItems.map(({ label, link, className, ref }, key) => (
          <a
            href={link}
            key={key}
            ref={ref}
            className={className}
            onClick={activeCurrentLink}
          >
            {label}
          </a>
        ))
      }
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};

export default Navbar;
