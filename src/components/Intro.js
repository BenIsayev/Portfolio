import videoBg from '../assets/video/numbers.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faAnglesDown, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Intro = ({ handleClassFlow }) => {
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
          <NavLink to={'/projects'} className='projects-btn'>
            <div className='slider'></div>
            <span>Projects</span>
            <FontAwesomeIcon icon={faAnglesRight} />
          </NavLink>
          <button className='about-btn'>
            <div className='slider'></div>
            <span> About</span>
            <FontAwesomeIcon icon={faAnglesDown} />
          </button>
        </div>
      </div>
      <div className='social-media'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/ben-isayev/'
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a target='_blank' rel='noreferrer' href='https://github.com/BenIsayev'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.facebook.com/ben.isayev/'
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.instagram.com/benisayev/'
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};

export default Intro;
