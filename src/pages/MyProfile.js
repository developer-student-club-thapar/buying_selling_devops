import React, { Fragment, useEffect } from 'react';
import { Row, Col } from 'antd';
import Text from 'antd/lib/typography/Text';
import ProfileDisplay from '../components/MyProfile/ProfileDisplay';
import ProfileDescription from '../components/MyProfile/ProfileDescription';
import ProfileInformation from '../components/MyProfile/ProfileInformation';
import { connect } from 'react-redux';
import { getMyProfile } from '../redux/actions';

const MyProfile = ({ user: { myProfile }, getMyProfile }) => {
  useEffect(() => {
    getMyProfile();
    //eslint-disable-next-line
  }, []);
  if (!myProfile) {
    return <h1>Loading</h1>;
  }
  if (myProfile) {
    return (
      <Fragment>
        <Row style={{ marginTop: '30px' }}>
          <ProfileDisplay />
        </Row>
        <Row
          style={{
            marginTop: '50px',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          <ProfileDescription />
        </Row>
        <Row
          style={{
            marginTop: '50px',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
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
          style={{
            marginTop: '40px',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          <Col span={24} style={{ textAlign: 'right' }}>
            <Text style={{ color: '#42FF00' }}>Joined on 15/01/2020</Text>
          </Col>
        </Row>
      </Fragment>
    );
  }
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, { getMyProfile })(MyProfile);
