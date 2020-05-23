import React from 'react';
import { Col } from 'antd';
import headphones from '../../assets/headphones.jpeg';
import ImageGallery from 'react-image-gallery';

const ImageCarousel = () => {
  const images = [
    {
      original: `${headphones}`,
    },
    {
      original: `${headphones}`,
    },
    {
      original: `${headphones}`,
    },
  ];
  return (
    <Col xs={24}>
      <ImageGallery
        items={images}
        showBullets={true}
        autoPlay={true}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </Col>
  );
};

export default ImageCarousel;
