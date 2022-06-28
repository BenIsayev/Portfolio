import { useEffect, useRef, useState } from 'react';

const NavBar = ({ handleClassFlow, scrollToProjects }) => {
  const navBar = useRef();

  const [aboutInView, setAboutInView] = useState({});
  const [projectInView, setProjectInView] = useState({});

  const getIsElementInViewById = (id) => {
    const el = document.getElementById(id);
    const rect = el.getBoundingClientRect();
    if (rect.y < 0 && rect.y > 0 - rect.height) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navBar.current.style.position = 'fixed';
        navBar.current.style.backgroundColor = '#e4c656';
        if (
          window.scrollY >=
          window.innerHeight + document.getElementById('about').offsetHeight
        ) {
          navBar.current.style.backgroundColor = '#76eef8';
        }
      } else {
        navBar.current.style.position = 'absolute';
      }

      if (getIsElementInViewById('about')) {
        setAboutInView({ textDecoration: 'underline' });
        setProjectInView({ textDecoration: 'none' });
      } else if (getIsElementInViewById('projects')) {
        setProjectInView({ textDecoration: 'underline' });
        setAboutInView({ textDecoration: 'none' });
      } else {
        setProjectInView({ textDecoration: 'none' });
        setAboutInView({ textDecoration: 'none' });
      }
    });
  });
  return (
    <header className='navbar' ref={navBar}>
      <nav>
        <ul>
          <li onClick={handleClassFlow} style={aboutInView}>
            About
          </li>
          <li onClick={scrollToProjects} style={projectInView}>
            Projects
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
