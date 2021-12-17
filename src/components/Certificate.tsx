import React from 'react';
import Popup from 'reactjs-popup';
import defaultPic from '../Utils';
import CertificateDetails from './CertificateDetails';

interface Props {
  icon?: string,
  title?: string,
  borderColor?: string,
  certificates?: Array<{ picture: string, source: string, date: string, link:string }>
}
const Certificate = ({
  title, icon, borderColor, certificates = [{
    picture: defaultPic,
    source: '',
    date: '',
    link: '',
  }],
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
        <div className="picture" style={{ backgroundImage: `url(${certificates[0].picture})` }} />
        <div className="footnote">
          <div className="icon" style={{ backgroundImage: `url(${icon})` }} />
          <h3 className="title" style={{ color: borderColor !== 'white' ? borderColor : 'black' }}>{title}</h3>
        </div>
      </div>
    )}
    modal
    nested
  >
    <CertificateDetails items={
      certificates
    }
    />
  </Popup>

);

Certificate.defaultProps = {
  title: 'no title',
  icon: defaultPic,
  borderColor: 'white',
  certificates: [{
    picture: defaultPic,
    source: '',
    date: '',
    link: '',
  }],
};

export default Certificate;
