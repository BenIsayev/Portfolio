import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

const ContactBtn = ({ scrollToContact }) => {
  const contactBtn = useRef();

  document.addEventListener('scroll', () => {
    const contactPos = document
      .getElementById('contact')
      .getBoundingClientRect();
    if (contactPos.y < window.innerHeight + 15) {
      contactBtn.current.style.position = 'absolute';
    } else {
      contactBtn.current.style.position = 'fixed';
    }
  });

  return (
    <div className='contact-btn' ref={contactBtn}>
      <button onClick={scrollToContact}>
        <FontAwesomeIcon icon={faEnvelope} />
      </button>
    </div>
  );
};

export default ContactBtn;
