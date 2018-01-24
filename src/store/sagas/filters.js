import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/filters';

export function* getFiltersList() {
  const response = yield call(api.get, '/categories');

  if (response.ok) {
    yield put(ActionCreators.filtersSuccess(response.data, null));
  } else {
    yield put(ActionCreators.filtersFailure());
  }
}
