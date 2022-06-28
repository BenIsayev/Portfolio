import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = () => {
  return (
    <div className='social-media'>
      <a
        target='_blank'
        rel='noreferrer'
        href='https://www.linkedin.com/in/ben-isayev/'
        className='linkedin'
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
        className='facebook'
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
  );
};

export default SocialMedia;
