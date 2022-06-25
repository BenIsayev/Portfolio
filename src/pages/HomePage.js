import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';

const HomePage = ({ handleClassFlow }) => {
  return (
    <>
      <Intro handleClassFlow={handleClassFlow} />
      <AboutMe />
    </>
  );
};

export default HomePage;
