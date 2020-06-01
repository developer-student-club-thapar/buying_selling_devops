import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router history={history}>
            <Routes />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
