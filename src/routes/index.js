import React from 'react';
import { Switch } from 'react-router-dom';
import test from '../pages/test';
import PrivateTest from '../pages/PrivateTest';
import Route from './Route';
import Login from '../pages/Login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/private" component={PrivateTest} isPrivate />
      <Route component={Login} />
    </Switch>
  );
};

export default Routes;
