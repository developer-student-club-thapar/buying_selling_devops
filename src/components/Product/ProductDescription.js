import React from 'react';
import { Col } from 'antd';

const ProductDescription = ({ post }) => {
  return (
    <Col span={24}>
      <p
        style={{
          fontSize: '14px',
          fontWeight: '300',
          color: '#ffffff',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        {post.description}
      </p>
    </Col>
  );
};

export default ProductDescription;
