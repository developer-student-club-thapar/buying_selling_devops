import React from 'react';
import { Row, Col, message } from 'antd';
import { Typography } from 'antd';
import styles from '../styles/Login.module.css';
import GoogleLoginButton from '../components/Login/GoogleLoginButton';
import { useSelector } from 'react-redux';
import { resetState } from '../redux/actions';

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const error = auth.error;
  const { Title } = Typography;
  return (
    <div style={{ height: '100vh' }}>
      <div className={styles.main}>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          className={styles.heading}
        >
          <Col span={24}>
            <Title
              level={1}
              style={{
                fontFamily: 'Leckerli One',
                color: 'black',
                fontWeight: '400',
                fontSize: '48px',
                margin: 0,
              }}
            >
              ThaparX
            </Title>
          </Col>
          <Col span={24}>
            <Title
              level={3}
              style={{
                color: 'black',
                fontWeight: '300',
                fontSize: '24px',
              }}
            >
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

export default Login;
