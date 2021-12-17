import React from 'react';
import Popup from 'reactjs-popup';
import defaultPic from '../Utils';
import CertificateDetails from './CertificateDetails';

interface Props {
  pictureUrl?: string,
  icon?: string,
  title?: string,
  borderColor?: string
}
const Certificate = ({
  pictureUrl, title, icon, borderColor,
}: Props) => (
  <Popup
    trigger={(
      <div
        className="certificate-component"
        style={{
          border: `${borderColor} 0.2rem solid`,
          boxShadow: `0 0 2rem ${borderColor}, 0 0 1rem white`,
        }}
      >
        <div className="picture" style={{ backgroundImage: `url(${pictureUrl})` }} />
        <div className="footnote">
          <div className="icon" style={{ backgroundImage: `url(${icon})` }} />
          <h3 className="title">{title}</h3>
        </div>
      </div>
    )}
    modal
    nested
  >
    <CertificateDetails items={
      [
        {
          picture: defaultPic,
          source: 'Microverse',
          date: 'December, 2021',
        },
        {
          picture: defaultPic,
          source: 'Microverse',
          date: 'December, 2022',
        }, {
          picture: defaultPic,
          source: 'Microverse',
          date: 'December, 2023',
        },
      ]
    }
    />
  </Popup>

);

Certificate.defaultProps = {
  pictureUrl: defaultPic,
  title: 'no title',
  icon: defaultPic,
  borderColor: 'white',
};

export default Certificate;
