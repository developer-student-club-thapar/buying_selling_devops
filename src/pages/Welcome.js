import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions';
import { GoogleLogout } from 'react-google-login';

const Welcome = ({ auth: { user, isAuthenticated }, logoutUser }) => {
  const logout = () => {
    logoutUser();
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
