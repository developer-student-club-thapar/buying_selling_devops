import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import Text from 'antd/lib/typography/Text';
import ProfileDisplay from '../components/Profile/ProfileDisplay';
import ProfileDescription from '../components/Profile/ProfileDescription';
import ProfileInformation from '../components/Profile/ProfileInformation';

const Profile = () => {
  return (
    <Fragment>
      <Row style={{ marginTop: '30px' }}>
        <ProfileDisplay />
      </Row>
      <Row
        style={{ marginTop: '50px', paddingLeft: '20px', paddingRight: '20px' }}
      >
        <ProfileDescription />
      </Row>
      <Row
        style={{ marginTop: '50px', paddingLeft: '20px', paddingRight: '20px' }}
      >
        <Col
          span={24}
          style={{ backgroundColor: '#4F4F4F', borderRadius: '16px' }}
        >
          <br />
          <ProfileInformation />
          <br />
        </Col>
      </Row>
      <Row
        style={{ marginTop: '40px', paddingLeft: '20px', paddingRight: '20px' }}
      >
        <Col span={24} style={{ textAlign: 'right' }}>
          <Text style={{ color: '#42FF00' }}>Joined on 15/01/2020</Text>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Profile;
