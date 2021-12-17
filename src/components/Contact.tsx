/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.currentTarget);
    e.preventDefault();

    emailjs.sendForm('service_dtw31bf', 'template_mby5gis', e.currentTarget, 'user_pRyFR4Jz2Gba4tTelD62r')
      .then(() => {
        window.alert('Email has been sent');
      }, (error) => {
        window.alert(`there was an error: ${error}`);
      });

    e.currentTarget.reset();
  };

  return (
    <div id="contact-component">
      <div className="contact-half">
        <ReactWhatsapp
          number="56973445869"
          message="Hello. I saw your Portfolio and I would like to talk to you"
          element="h1"
        >
          <h1 id="contact-ws">
            <i className="fab fa-whatsapp" />
            {' '}
            +56973445869
          </h1>
        </ReactWhatsapp>

        <div id="contact-email">

          <h1>
            <i className="fas fa-envelope" />
            {' '}
            rodrigo.ibaceta01@gmail.com
          </h1>

          <form onSubmit={(e) => sendEmail(e)}>
            <div className="email-fields">
              <ul>
                <li>
                  <label>Name</label>
                  <input type="text" name="name" style={{ borderRadius: '0.5rem 0 0 0.5rem' }} />
                </li>
                <li>
                  <label>Email</label>
                  <input type="email" name="email" style={{ borderRadius: '0 0.5rem 0.5rem 0' }} />
                </li>
              </ul>
            </div>
            <div className="email-message">
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send me an email" />
            </div>
          </form>

        </div>
      </div>
      <div className="contact-half">

        <a href="https://github.com/RokoVarano" target="_blank" rel="noreferrer">
          <h1 id="contact-github">
            <i className="fab fa-github" />
            {' '}
            /RokoVarano
          </h1>
        </a>

        <a href="https://www.linkedin.com/in/rodrigo-ibaceta/" target="_blank" rel="noreferrer">
          <h1 id="contact-linkedin">
            <i className="fab fa-linkedin" />
            {' '}
            /rodrigo-ibaceta
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Contact;
