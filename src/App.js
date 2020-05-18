import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import { Provider } from 'react-redux';
import store from './redux/store/index';
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
