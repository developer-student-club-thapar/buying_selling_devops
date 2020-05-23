import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateTest from '../pages/PrivateTest';
import Route from './Route';
import Login from '../pages/Login';
import Welcome from '../pages/Welcome';
import Product from '../pages/Product';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} isLoginRoute />
      <Route exact path="/private" component={PrivateTest} isPrivate />
      <Route exact path="/welcome" component={Welcome} isPrivate />
      <Route exact path="/product" component={Product} />
      <Route exact path="/home" component={Home} />
      <Route component={Login} />
    </Switch>
  );
};

export default Routes;
