import React from 'react';

const Contact = () => (
  <div id="contact-component">
    <div id="contact-form">
      <h1>Type your email or your phone and I will contact you!</h1>

      <input type="text" />
      <button type="button">Contact me!</button>
    </div>

    <h2>Or contact me directly</h2>
    <h3>
      <i className="fab fa-whatsapp" />
      {' '}
      +56973445869
    </h3>
    <h3>
      <i className="fas fa-envelope" />
      {' '}
      rodrigo.ibaceta01@gmail.com
    </h3>
    <h3>
      <i className="fab fa-github" />
      {' '}
      /RokoVarano
    </h3>
  </div>
);

export default Contact;
