import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import Text from 'antd/lib/typography/Text';

const ProductDetails = ({ post }) => {
  return (
    <Fragment>
      <Row>
        <Col span={13}>
          <Text
            strong
            style={{
              color: '#FFFFFF',
              fontSize: '14px',
              paddingLeft: '20px',
            }}
          >
            Age of the product
          </Text>
        </Col>
        <Col span={11} style={{ textAlign: 'right' }}>
          <Text
            level={4}
            style={{
              color: '#FFFFFF',
              fontSize: '14px',
              paddingRight: '20px',
            }}
          >
            {post.age}
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Text
            strong
            style={{
              color: '#FFFFFF',
              fontSize: '14px',

              paddingLeft: '20px',
            }}
          >
            Brand
          </Text>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Text
            level={4}
            style={{
              color: '#FFFFFF',
              fontSize: '14px',
              paddingRight: '20px',
            }}
          >
            {post.brand}
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Text
            strong
            style={{
              color: '#FFFFFF',
              fontSize: '14px',

              paddingLeft: '20px',
            }}
          >
            Condition
          </Text>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Text
            level={4}
            style={{
              color: '#FFFFFF',
              fontSize: '14px',
              paddingRight: '20px',
            }}
          >
            {post.condition}
          </Text>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ProductDetails;
