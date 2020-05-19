import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateTest from '../pages/PrivateTest';
import Route from './Route';
import Login from '../pages/Login';
import Welcome from '../pages/Welcome';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/private" component={PrivateTest} isPrivate />
      <Route exact path="/welcome" component={Welcome} isPrivate />
      <Route component={Login} />
    </Switch>
  );
};

export default Routes;
