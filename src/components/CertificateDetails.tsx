import React from 'react';
import Slider from 'react-slick';
import defaultPic from '../Utils';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
  items?: Array<{ picture: string, source: string, date: string }>
}

const CertificateDetails = ({
  items = [{
    picture: defaultPic,
    source: 'Microverse',
    date: 'December, 2021',
  }],
}: Props) => {
  const carouselContents = items.map((item) => (
    <div className="carouselitem">
      <img className="carouselpic" src={item.picture} alt="no pic" />
      <h2>Certificate title</h2>
      <p>{`${item.source}, ${item.date}`}</p>
    </div>
  ));

  return (
    <Slider adaptiveHeight>
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
