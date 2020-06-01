import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

const intialState = {};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // which reducer want to store
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);

export default store;
