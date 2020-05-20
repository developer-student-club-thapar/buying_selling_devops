import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions';
import { GoogleLogout } from 'react-google-login';
import { message } from 'antd';

const Welcome = ({ auth: { user, isAuthenticated }, logoutUser }) => {
  const logout = () => {
    logoutUser();
    message.success('You have been successfully logged out');
  };
  return (
    <div>
      <h1>Welcome {user}</h1>
      <GoogleLogout
        clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={logout}
      ></GoogleLogout>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Welcome);
