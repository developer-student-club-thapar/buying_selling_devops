import React from 'react';
import { Col } from 'antd';

const ProductDescription = () => {
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere varius
        neque turpis proin leo rhoncus, aliquam massa. Odio facilisis risus
        phasellus a vitae nunc, ut volutpat neque. Quis amet amet sollicitudin
        bibendum risus est. Lorem etiam donec augue quis augue aliquet id
        vehicula.
      </p>
    </Col>
  );
};

export default ProductDescription;
