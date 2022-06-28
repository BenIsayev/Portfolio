import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import SocialMedia from './SocialMedia';

const Contact = () => {
  const form = useRef();
  const submitBtn = useRef();
  const [btnText, setBtnText] = useState('Send');

  const [message, setMessage] = useState('');
  const [messageMessage, setMessageMessage] = useState('');
  const [fromName, setFromName] = useState('');
  const [nameMessage, setNameMessage] = useState('');
  const [toEmail, setToEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  const validateForm = () => {
    let isValid = true;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(toEmail)) {
      setEmailMessage('Invalid mail');
      isValid = false;
    } else {
      setEmailMessage('');
    }
    if (fromName.trim() === '') {
      setNameMessage('Who are you');
      isValid = false;
    } else {
      setNameMessage('');
    }
    if (message.trim() === '') {
      setMessageMessage('Cant send empty message');
      isValid = false;
    } else {
      setMessageMessage('');
    }
    return isValid;
  };

  const resetForm = () => {
    setEmailMessage('');
    submitBtn.current.classList.remove('success');
    submitBtn.current.classList.remove('failed');
    setBtnText('Send');
  };

  const resetMessageDetails = () => {
    setMessage('');
    setFromName('');
    setToEmail('');
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      await emailjs.send(
        'service_0znivo9',
        'template_vtuh0jg',
        {
          from_name: fromName + ' ' + toEmail,
          to_name: 'Ben Isayev',
          message: message,
        },
        'xJEU3BNHX9pkrGfG5'
      );
      setBtnText('Sent');
      submitBtn.current.classList.add('success');
      resetMessageDetails();
      setTimeout(resetForm, 5000);
    } catch (error) {
      console.log(error.text);
      submitBtn.current.classList.add('failed');
      setBtnText('Failed');
    }
  };

  return (
    <section className='contact' id='contact'>
      <div className='title'>
        <span>Send</span>
        <h1>Me a Message</h1>
        <div className='line'></div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className='name-and-contact-container'>
          <div className='input name-input'>
            <label htmlFor='name'>Your Name:</label>
            <input
              type='text'
              id='name'
              name='user_name'
              onChange={(e) => {
                setFromName(e.target.value);
              }}
              value={fromName}
            />
            <span className='invalid-msg'>{nameMessage}</span>
          </div>
          <div className='input contact-input'>
            <label htmlFor='contact-details'>Email:</label>
            <input
              type='text'
              id='contact-details'
              name='user_email'
              onChange={(e) => {
                setToEmail(e.target.value);
              }}
              value={toEmail}
            />
            <span className='invalid-msg'>{emailMessage}</span>
          </div>
        </div>
        <div className='message-container'>
          <label htmlFor='message'>Your Message:</label>
          <textarea
            id='message'
            name='message'
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
          />
          <span className='invalid-msg'>{messageMessage}</span>
        </div>
        <button ref={submitBtn} type='submit'>
          {btnText}
        </button>
      </form>
      <div className='social'>
        <h1>Reach me on social media:</h1>
        <SocialMedia />
      </div>
    </section>
  );
};

export default Contact;
