import React, { Fragment, useEffect } from 'react';
import { Row, Col } from 'antd';
import Text from 'antd/lib/typography/Text';
import ProfileDisplay from '../components/Profile/ProfileDisplay';
import ProfileDescription from '../components/Profile/ProfileDescription';
import ProfileInformation from '../components/Profile/ProfileInformation';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from '../redux/actions';
import Moment from 'react-moment';

const Profile = (match) => {
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = auth.token;
  const profile = user.profile;
  const id = `${match.params.id}`;

  useEffect(() => {
    dispatch(getProfile(id, token));
    //eslint-disable-next-line
  }, []);
  if (!profile) {
    return <h1>Loading</h1>;
  }
  if (profile) {
    return (
      <Fragment>
        <Row style={{ marginTop: '30px' }}>
          <ProfileDisplay profile={profile} />
        </Row>
        <Row
          style={{
            marginTop: '50px',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          <ProfileDescription profile={profile} />
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
            <ProfileInformation profile={profile} />
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
            <Text style={{ color: '#42FF00' }}>
              Joined on{' '}
              <Moment format="DD/MM/YYYY">{profile.user.dateJoined}</Moment>
            </Text>
          </Col>
        </Row>
      </Fragment>
    );
  }
};

export default Profile;
