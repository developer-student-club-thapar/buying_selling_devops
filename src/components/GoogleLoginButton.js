import React, { Fragment, useState } from 'react';
import styles from '../styles/Login.module.css';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { loginUser, loginFail } from '../redux/actions';
import '../App.css';

const GoogleLoginButton = ({
  auth: { user, isAuthenticated },
  loginUser,
  loginFail,
}) => {
  const responseGoogle = response => {
    console.log(response);
    setLoading(true);
    loginUser(response.accessToken);
  };
  const responseGoogleFail = response => {
    console.log(response);
    loginFail(response.error);
  };
  const [loading, setLoading] = useState(false);
  return (
    <Fragment>
      <GoogleLogin
        clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
        render={renderProps => (
          <Button
            type="primary"
            style={{
              background: '#333333',
              border: 'none',
              color: '#fff6ee',
            }}
            className={styles.button}
            icon={<GoogleOutlined />}
            size="large"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            loading={loading}
          >
            {' '}
            Log in with Google
          </Button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogleFail}
        cookiePolicy={'single_host_origin'}
        hostedDomain={'thapar.edu'}
      />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser, loginFail })(
  GoogleLoginButton,
);
