import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { routerReducer } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import { persistRootReducer } from './persistor';
import reducers from './modules';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistRootReducer(
  combineReducers({ ...reducers, routing: routerReducer })
);
const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

const persistor = persistStore(store);

// Run the saga now
sagaMiddleware.run(rootSaga);

export { persistor, store };
