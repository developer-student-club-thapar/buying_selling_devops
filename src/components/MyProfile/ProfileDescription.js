import React, { Fragment } from 'react';
import { Col } from 'antd';

const ProfileDescription = ({ myProfile }) => {
  return (
    <Fragment>
      <Col span={24}>
        <p style={{ color: '#FFFFFF' }}>
          {myProfile && myProfile.bio ? myProfile.bio : 'No bio'}
        </p>
      </Col>
    </Fragment>
  );
};

export default ProfileDescription;
