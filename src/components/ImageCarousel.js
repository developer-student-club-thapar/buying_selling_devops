import React from 'react';
import { Carousel } from 'antd';
import { Col } from 'antd';
import headphones from '../assets/headphones.jpeg';
import styles from '../styles/Product.module.css';

const ImageCarousel = () => {
  return (
    <Col xs={24}>
      <Carousel>
        <div>
          <img src={headphones} alt="img1" className={styles.image} />
        </div>
        <div>
          <img
            src="https://picsum.photos/360/300"
            alt="img2"
            className={styles.image}
          />
        </div>
        <div>
          <img src="https://picsum.photos/360/300" alt="img3" />
        </div>
        <div>
          <img src="https://picsum.photos/360/300" alt="img4" />
        </div>
      </Carousel>
    </Col>
  );
};

export default ImageCarousel;
