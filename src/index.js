import 'config/ReactotronConfig';

import React from 'react';

import Navigator from 'navigation';
import { Provider } from 'react-redux';
import createStore from 'store';

import { PersistGate } from 'redux-persist/es/integration/react';
import { persistStore } from 'redux-persist';

const store = createStore();
const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
);

export default App;
