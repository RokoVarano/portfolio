/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import defaultPic from '../Utils';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
  items?: Array<{ picture: string, source: string, date: string, link: string }>
}

const CertificateDetails = ({
  items = [{
    picture: defaultPic,
    source: 'Microverse',
    date: 'December, 2021',
    link: '',
  }],
}: Props) => {
  const carouselContents = items.map((item) => (
    <div className="carouselitem">
      <a href={item.link} target="_blank" rel="noreferrer">
        <div className="carouselpic" style={{ backgroundImage: `url(${item.picture})` }} />
        {' '}
      </a>
      <h2>{item.source}</h2>
      <p>{`${item.date}`}</p>
    </div>
  ));

  return (
    <Slider infinite={false}>
      {carouselContents}
    </Slider>
  );
};

CertificateDetails.defaultProps = {
  items: [{
    picture: defaultPic,
    source: 'Microverse',
    date: 'December, 2021',
  }],
};

export default CertificateDetails;
