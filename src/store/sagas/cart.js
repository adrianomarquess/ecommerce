import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/cart';

// export function* addProductCart(action) {
//   const uri = (action.filter) ? `/category_products/${action.filter.id}` : '/products';
//   const response = yield call(api.get, uri);

//   yield put(ActionCreators.cartAddSuccess());
// }
