import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (rootReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  /* Saga */
  const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));

  /* Redux Persist */
  const persistedReducer = persistReducer({
    key: 'ecommerce',
    storage,
    whitelist: ['cart'],
  }, rootReducer);

  /* Store */
  const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
  const store = createAppropriateStore(persistedReducer, compose(...enhancers));

  /* Run Saga */
  sagaMiddleware.run(rootSaga);

  return store;
};
