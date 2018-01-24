import { takeLatest } from 'redux-saga/effects';

// Types
import { Types as ProductsListTypes } from 'store/ducks/products-list';
import { Types as FiltersTypes } from 'store/ducks/filters';

// Sagas
import { getProductsList } from './products-list';
import { getFiltersList } from './filters';

export default function* root() {
  yield [
    takeLatest(ProductsListTypes.PRODUCTS_REQUEST, getProductsList),

    takeLatest(FiltersTypes.FILTERS_REQUEST, getFiltersList),
  ];
}
