import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';

const HomePage = ({ handleClassFlow, scrollToContact, scrollToProjects }) => {
  return (
    <>
      <Intro
        handleClassFlow={handleClassFlow}
        scrollToProjects={scrollToProjects}
      />
      <div className='nav-area'>
        <NavBar
          scrollToContact={scrollToContact}
          scrollToProjects={scrollToProjects}
          handleClassFlow={handleClassFlow}
        />
        <AboutMe />
        <Projects scrollToContact={scrollToContact} />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
