import React from 'react';
import defaultPic from '../Utils';

interface Props {
  pictureUrl?: string,
  icon?: string,
  title?: string,
}
const Certificate = ({ pictureUrl, title, icon }: Props) => (
  <div className="certificate-component">
    <div className="picture" style={{ backgroundImage: `url(${pictureUrl})` }} />
    <div className="footnote">
      <div className="icon" style={{ backgroundImage: `url(${icon})` }} />
      <h3 className="title">{title}</h3>
    </div>
  </div>
);

Certificate.defaultProps = {
  pictureUrl: defaultPic,
  title: 'no title',
  icon: defaultPic,
};

export default Certificate;
