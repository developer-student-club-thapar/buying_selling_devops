import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import styles from '../styles/Product.module.css';
import { Typography } from 'antd';
import Text from 'antd/lib/typography/Text';
import { Button } from 'antd';
import ImageCarousel from '../components/ImageCarousel';
import ProductDescription from '../components/ProductDescription';
import ProductDetails from '../components/ProductDetails';

const Product = () => {
  const { Title } = Typography;
  return (
    <Fragment>
      <div className={styles.body}>
        <Row>
          <ImageCarousel />
        </Row>
        <div className={styles.main}>
          <Row>
            <Col span={24} style={{ marginTop: '20px' }}>
              <Text
                style={{
                  color: '#42FF00',
                  fontSize: '14px',

                  marginLeft: '20px',
                }}
              >
                Available
              </Text>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ height: '30px', overflow: 'hidden' }}>
              <Title
                level={3}
                style={{
                  color: '#ffffff',
                  marginLeft: '20px',
                }}
              >
                Headphones
              </Title>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: '14px',

                  marginLeft: '20px',
                }}
              >
                Category
              </Text>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Title
                level={4}
                style={{
                  color: '#FFFFFF',

                  paddingRight: '20px',
                }}
              >
                ₹ 999
              </Title>
            </Col>
          </Row>
          <Row>
            <ProductDescription />
          </Row>
          <ProductDetails />
          <Row>
            <Col
              span={24}
              style={{
                paddingLeft: '20px',
                paddingRight: '20px',
                marginTop: '30px',
              }}
            >
              <Button
                type="primary"
                block
                style={{ backgroundColor: '#4F4F4F', border: 'none' }}
              >
                Contact the seller
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ marginTop: '20px', textAlign: 'center' }}>
              <Text
                style={{
                  color: '#42FF00',
                  fontSize: '14px',
                }}
              >
                Posted 3 days Ago
              </Text>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
