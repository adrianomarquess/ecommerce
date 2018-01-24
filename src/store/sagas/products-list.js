import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/products-list';

export function* getProductsList(action) {
  const uri = (action.filter) ? `/category_products/${action.filter.id}` : '/products';
  const response = yield call(api.get, uri);

  if (response.ok) {
    const products = (response.data.products) ? response.data.products : response.data;
    yield put(ActionCreators.productsSuccess(products));
  } else {
    yield put(ActionCreators.productsFailure());
  }
}
