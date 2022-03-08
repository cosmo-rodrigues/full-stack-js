import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { routerReducer } from 'react-router-redux';

import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(routerReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);
