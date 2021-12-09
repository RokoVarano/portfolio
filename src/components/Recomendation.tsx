import React from 'react';

interface Props {
  name: string,
  company: string,
  position: string,
  quote?: string,
  phone?: string,
  email?: string,
}

const Recomendation = (props: Props) => {
  const {
    name,
    company,
    position,
    quote,
    phone,
    email,
  } = props;

  return (
    <div className="recomendation-component">
      <div className="name-position">
        <h3>{name}</h3>
        <h5>{`${position}, ${company}`}</h5>
      </div>
      <div className="listnquote">
        <ul>
          {phone ? (
            <li>
              <i className="fas fa-phone-alt" />
              <h5>
                {phone}
              </h5>
            </li>
          ) : ''}
          {email ? (
            <li>
              <i className="fas fa-envelope" />
              <h5>
                {email}
              </h5>
            </li>
          ) : ''}
        </ul>

        <p>
          {quote}
        </p>
      </div>

    </div>
  );
};

Recomendation.defaultProps = {
  quote: '',
  phone: '',
  email: '',
};

export default Recomendation;
