import React, { Fragment } from 'react';
import styles from '../../styles/Login.module.css';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import GoogleLogin from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, loginFail, setLoading } from '../../redux/actions';

const GoogleLoginButton = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const loading = auth.loading;

  const responseGoogle = (response) => {
    console.log(response);
    dispatch(setLoading());

    dispatch(loginUser(response.accessToken));
  };
  const responseGoogleFail = (response) => {
    console.log(response);
    loginFail(response.error);
  };
  return (
    <Fragment>
      <GoogleLogin
        clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
        render={(renderProps) => (
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
            <span style={{ fontWeight: '200' }}>Login with Google</span>
          </Button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogleFail}
        cookiePolicy={'single_host_origin'}
        hostedDomain={'thapar.edu'}
        isSignedIn={true}
      />
    </Fragment>
  );
};

export default GoogleLoginButton;
