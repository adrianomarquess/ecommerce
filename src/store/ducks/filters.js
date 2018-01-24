import { createActions, createReducer } from 'reduxsauce';

// Types & Creators
const { Types, Creators } = createActions({
  filtersRequest: null,
  filtersSuccess: ['data', 'filter'],
  filtersFailure: null,
  setFilter: ['filter'],
});

export { Types };
export default Creators;

// Initial State
const INITIAL_STATE = {
  data: [],
  filterSelected: null,
  loading: false,
  error: false,
};

// Reducers
export const request = state => ({
  ...state,
  loading: true,
});

export const success = (state, action) => ({
  data: action.data,
  filterSelected: action.filterSelected,
  loading: false,
  error: false,
});

export const failure = state => ({
  ...state,
  loading: false,
  error: true,
});

export const set = (state, action) => ({
  ...state,
  filterSelected: action.filter,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FILTERS_REQUEST]: request,
  [Types.FILTERS_SUCCESS]: success,
  [Types.FILTERS_FAILURE]: failure,
  [Types.SET_FILTER]: set,
});
