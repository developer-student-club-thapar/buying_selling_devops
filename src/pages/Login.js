import React from 'react';
import { Row, Col, message } from 'antd';
import { Typography } from 'antd';
import styles from '../styles/Login.module.css';
import GoogleLoginButton from '../components/Login/GoogleLoginButton';
import { connect } from 'react-redux';
import { resetState } from '../redux/actions';

const Login = ({ auth: { error }, resetState }) => {
  const { Title } = Typography;

  return (
    <div>
      <div className={styles.main}>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          className={styles.heading}
        >
          <Col span={24}>
            <Title
              level={1}
              style={{ fontFamily: 'Leckerli One', color: 'black' }}
            >
              ThaparX
            </Title>
          </Col>
          <Col span={24}>
            <Title level={3} style={{ color: 'black' }}>
              Buying and Selling made easy
            </Title>
          </Col>
          <Col span={24}>
            <GoogleLoginButton />
          </Col>
          {error &&
            message.error('Login Failed. Please try again.', 2, resetState())}
        </Row>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { resetState })(Login);
