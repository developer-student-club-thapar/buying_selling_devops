import React, { Fragment } from 'react';
import { Col } from 'antd';

const ProfileDescription = ({ profile }) => {
  return (
    <Fragment>
      <Col span={24}>
        <p style={{ color: '#FFFFFF' }}>
          {profile && profile.bio ? profile.bio : 'No bio'}
        </p>
      </Col>
    </Fragment>
  );
};

export default ProfileDescription;
