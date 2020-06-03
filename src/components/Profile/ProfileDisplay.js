import React, { Fragment } from 'react';
import { Col, Avatar } from 'antd';
import { Typography } from 'antd';
import Text from 'antd/lib/typography/Text';
import profilePic from '../../assets/blank-profile-picture.png';

const ProfileDisplay = ({ profile }) => {
  const { Title } = Typography;
  return (
    <Fragment>
      <Col span={10} style={{ paddingLeft: '20px' }}>
        <Avatar
          size={90}
          src={profile && profile.image ? profile.image : profilePic}
        />
      </Col>
      <Col span={14} style={{ paddingTop: '15px' }}>
        <Title level={3} style={{ height: '20px' }}>
          {profile && `${profile.user.firstName} ${profile.user.lastName}`}
        </Title>
        <Text style={{ paddingBottom: '20px', color: '#42FF00' }}>
          {profile && `@${profile.user.username}`}
        </Text>
      </Col>
    </Fragment>
  );
};

export default ProfileDisplay;
