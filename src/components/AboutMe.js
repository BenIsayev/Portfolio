import {
  faJs,
  faGit,
  faHtml5,
  faCss3,
  faSass,
  faNodeJs,
  faReact,
  faVuejs,
  faAngular,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import meImg from '../assets/img/me.png';

const AboutMe = () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const getRandomPos = () => {
    return {
      transform: `translate(${getRandomInt(100, 300)}px, ${getRandomInt(
        100,
        300
      )}px)`,
    };
  };

  const shuffleSkills = () => {};
  return (
    <section id='about' className='about-me hidden'>
      <div className='desc'>
        <span>
          Hi, I am Ben Isayev, born in 1997, I grew up and currently living in
          Holon, Israel.
        </span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          cupiditate consequatur minus voluptatum tempore vel iste adipisci, hic
          blanditiis odit.
        </span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
          vel dolorum nihil consectetur possimus porro.
        </span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo libero
          nam minima totam corporis quas velit eveniet, id quisquam quos, alias
          rerum odit! Soluta temporibus ratione dolorem obcaecati voluptate
          accusantium.
        </span>
        <div className='skills'>
          <span>
            <FontAwesomeIcon icon={faJs} />
          </span>
          <span>
            <FontAwesomeIcon icon={faGit} />
          </span>
          <span>
            <FontAwesomeIcon icon={faHtml5} />
          </span>
          <span>
            <FontAwesomeIcon icon={faCss3} />
          </span>
          <span>
            <FontAwesomeIcon icon={faSass} />
          </span>
          <span>
            <FontAwesomeIcon icon={faNodeJs} />
          </span>
          <span>
            <FontAwesomeIcon icon={faReact} />
          </span>
          <span>
            <FontAwesomeIcon icon={faVuejs} />
          </span>
          <span>
            <FontAwesomeIcon icon={faAngular} />
          </span>
        </div>
      </div>
      <div className='my-img'>
        <img src={meImg} alt='Myself' />
      </div>
    </section>
  );
};
export default AboutMe;
