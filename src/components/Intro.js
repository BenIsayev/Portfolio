import videoBg from '../assets/video/numbers.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';

const Intro = ({ handleClassFlow, scrollToProjects }) => {
  return (
    <div className='welcome-view'>
      <video
        src={videoBg}
        loop
        autoPlay
        playsInline
        muted
        className='video-background'
      />
      <div className='intro-container'>
        <h1>
          Hi, I am
          <br />
          Ben Isayev
        </h1>
        <span>
          Full-Stack <br />
          Web Developer
        </span>
        <div className='links'>
          <button className='about-btn' onClick={handleClassFlow}>
            <div className='slider'></div>
            <span> About</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <button className='projects-btn' onClick={scrollToProjects}>
            <div className='slider'></div>
            <span>Projects</span>
            <FontAwesomeIcon icon={faAnglesDown} />
          </button>
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default Intro;
