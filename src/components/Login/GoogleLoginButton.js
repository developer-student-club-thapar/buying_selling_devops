import React, { Fragment } from 'react';
import styles from '../../styles/Login.module.css';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { loginUser, loginFail, setLoading } from '../../redux/actions';

const GoogleLoginButton = ({
  auth: { loading },
  loginUser,
  loginFail,
  setLoading,
}) => {
  const responseGoogle = (response) => {
    console.log(response);
    setLoading();

    loginUser(response.accessToken);
  };
  const responseGoogleFail = (response) => {
    console.log(response);
    loginFail(response.error);
  };
  return (
    <Fragment>
      <GoogleLogin
        clientId='996651917612-c3olipfl8in8e4josk4krmet86mvcisl.apps.googleusercontent.com'
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser, loginFail, setLoading })(
  GoogleLoginButton,
);
