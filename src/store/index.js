import { combineReducers } from 'redux';

// Reducers
import navReducer from 'navigation/reducer';
import { reducer as productsList } from './ducks/products-list';
import { reducer as filters } from './ducks/filters';
import { reducer as cart } from './ducks/cart';

import configureStore from './configureStore';
import rootSaga from './sagas';

export default () => {
  const rootReducer = combineReducers({
    nav: navReducer,
    productsList,
    filters,
    cart,
  });

  return configureStore(rootReducer, rootSaga);
};
