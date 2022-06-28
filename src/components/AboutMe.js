import {
  faJs,
  faGit,
  faHtml5,
  faCss3,
  faSass,
  faNode,
  faReact,
  faVuejs,
  faAngular,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import meImg from '../assets/img/me.png';

const AboutMe = () => {
  const [isExtraSkillsShown, setIsExtraSkillsShown] = useState(false);

  return (
    <section id='about' className='about-me hidden'>
      <div className='title'>
        <span>Discover</span>
        <h1>About me</h1>
        <div className='line'></div>
      </div>
      <div className='img-and-text-container'>
        <div className='my-img'>
          <img src={meImg} alt='Myself' />
        </div>
        <div className='desc'>
          <span>
            Hi, I am Ben Isayev, born in 1997, I grew up and currently living in
            Holon, Israel.
          </span>
          <span>
            I am a full-stack web developer, who graduated from the bootcamp
            named "Coding Academy".
          </span>
          <span>
            I can tell you that "I am a team player, hard worker, focusing on
            problem solving, self-learner, responsible, etc..." and all that,
            but between us, aren't all the developers like that?
          </span>
          <span>What do I bring to the team? Well..</span>
          <span>
            Besides being focused on what needs to be done and helping where I
            can, I like having good vibes and smiling.
          </span>
          <div>
            <span>
              <FontAwesomeIcon icon={faPhone} />
              (+972) 52-679896
            </span>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
              benisayev@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className='skill-container'>
        <h2>My skill set</h2>
        <div className='skills'>
          <div
            className='expand-skills'
            title='Show more skills'
            onClick={() => setIsExtraSkillsShown(!isExtraSkillsShown)}
          >
            <div className='show-more outer-circle'></div>
            <div className='show-more inner-circle'></div>
            <div className='expand-skills-text'>
              <span>Show </span>
              <span>more </span>
              <span>skills</span>
            </div>
          </div>
          <span className='skill-icon js'>
            <FontAwesomeIcon icon={faJs} />
          </span>
          <span className='skill-icon git'>
            <FontAwesomeIcon icon={faGit} />
          </span>
          <span className='skill-icon github'>
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span className='skill-icon html'>
            <FontAwesomeIcon icon={faHtml5} />
          </span>
          <span className='skill-icon css'>
            <FontAwesomeIcon icon={faCss3} />
          </span>
          <span className='skill-icon sass'>
            <FontAwesomeIcon icon={faSass} />
          </span>
          <span className='skill-icon node'>
            <FontAwesomeIcon icon={faNode} />
          </span>
          <span className='skill-icon react'>
            <FontAwesomeIcon icon={faReact} />
          </span>
          <span className='skill-icon vue'>
            <FontAwesomeIcon icon={faVuejs} />
          </span>
          <span className='skill-icon angular'>
            <FontAwesomeIcon icon={faAngular} />
          </span>
        </div>
        {isExtraSkillsShown && (
          <div className='extra-skills'>
            <span className='comment'>
              *No more font awsome icons so we continue with handwriting 😆
            </span>
            <span>
              ExpressJs, REST, GraphQL, Using api's, Databases such and MongoDB
              and Redis
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
export default AboutMe;
