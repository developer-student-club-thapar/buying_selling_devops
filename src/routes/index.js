import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateTest from '../pages/PrivateTest';
import Route from './Route';
import Login from '../pages/Login';
import Welcome from '../pages/Welcome';
import Product from '../pages/Product';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import MyProfile from '../pages/MyProfile';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} isLoginRoute />
      <Route exact path="/private" component={PrivateTest} isPrivate />
      <Route exact path="/welcome" component={Welcome} isPrivate />
      <Route exact path="/product/:id" component={Product} />
      <Route exact path="/myprofile" component={MyProfile} isPrivate />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/home" component={Home} />
    </Switch>
  );
};

export default Routes;
