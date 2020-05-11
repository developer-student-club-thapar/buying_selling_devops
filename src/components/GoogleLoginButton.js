import React, { Fragment } from 'react';
import { Typography } from 'antd';
import styles from '../styles/Login.module.css';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const GoogleLoginButton = () => {
  const { Title } = Typography;
  const responseGoogle = response => {
    console.log(response);
    axios
      .post('http://127.0.0.1:8000/google/', { token: response.accessToken })
      .then(res => console.log(res.data));
  };
  return (
    <Fragment>
      <GoogleLogin
        clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
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
    </Fragment>
  );
};

export default GoogleLoginButton;
