import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

const intialState = {};

const persistConfig = {
  key: 'authReducer',
  storage: storage,
  whitelist: ['authReducer'], // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const store = createStore(
  rootReducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

const persistor = persistStore(store);

export default { persistor, store };
