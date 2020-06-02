import React from 'react';
import { Col } from 'antd';
import ImageGallery from 'react-image-gallery';

const ImageCarousel = ({ post }) => {
  const images = [];
  for (const item of post.images) {
    images.push({
      original: `${item.image}`,
    });
  }
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
