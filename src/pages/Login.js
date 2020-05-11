import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import styles from '../styles/Login.module.css';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { GoogleLogout } from 'react-google-login';

const Login = () => {
  const { Title } = Typography;
  const [userDetails, setUserDetails] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const responseGoogle = response => {
    setIsUserLoggedIn(true);
    setUserDetails(response.profileObj);
    console.log(response);
    axios
      .post('http://127.0.0.1:8000/google/', { token: response.accessToken })
      .then(res => console.log(res.data));
  };
  const logout = () => {
    setIsUserLoggedIn(false);
  };
  if (isUserLoggedIn && userDetails) {
    return (
      <div>
        <h1>Hello {userDetails.givenName}</h1>
        <GoogleLogout
          render={renderProps => (
            <button onClick={renderProps.onClick}>Log Out</button>
          )}
          onLogoutSuccess={logout}
        />
      </div>
    );
  }
  return (
    <div>
      <div className={styles.main}>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          className={styles.heading}
        >
          <Col span={24}>
            <Title level={1}>ThaparX</Title>
          </Col>
          <Col span={24}>
            <Title level={3} className={styles.subHeading}>
              Buying and Selling made easy
            </Title>
          </Col>
          <Col span={24}>
            <GoogleLogin
              clientId=""
              render={renderProps => (
                <Button
                  type="primary"
                  className={styles.button}
                  icon={<GoogleOutlined />}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  {' '}
                  <Title
                    level={3}
                    style={{ margin: 'auto', display: 'inline-block' }}
                  >
                    Log in with Google
                  </Title>
                </Button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              hostedDomain={'thapar.edu'}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
