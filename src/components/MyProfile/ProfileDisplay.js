import React, { Fragment } from 'react';
import { Col, Avatar } from 'antd';
import { Typography } from 'antd';
import Text from 'antd/lib/typography/Text';

const ProfileDisplay = () => {
  const { Title } = Typography;
  return (
    <Fragment>
      <Col span={10} style={{ paddingLeft: '20px' }}>
        <Avatar size={90} src="https://picsum.photos/200/300" />
      </Col>
      <Col span={14} style={{ paddingTop: '15px' }}>
        <Title level={3} style={{ height: '20px' }}>
          Lorem Ipsum
        </Title>
        <Text style={{ paddingBottom: '20px', color: '#42FF00' }}>
          @loremipsum
        </Text>
      </Col>
    </Fragment>
  );
};

export default ProfileDisplay;
