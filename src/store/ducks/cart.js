import { createActions, createReducer } from 'reduxsauce';

// Types & Creators
const { Types, Creators } = createActions({
  cartRequest: null,
  cartAdd: ['product'],
  cartRemove: ['product'],
  cartUpdate: ['product'],
});

export { Types };
export default Creators;

// Initial State
const INITIAL_STATE = {
  data: [],
  msg: null,
};

// Reducers
export const request = state => ({
  ...state,
});

export const add = (state, action) => {
  const { data } = state;
  let msg = 'Este produto já está em seu carrinho';

  const productsFilter = data.filter(product => product.id === action.product.id);
  const productExists = (productsFilter.length > 0);

  if (!productExists) {
    msg = 'Produto adicionado ao carrinho';
    data.push(action.product);
  }

  return {
    data,
    msg,
  };
};

export const remove = (state, action) => ({
  data: state.data.filter(product => product.id !== action.product.id),
  msg: null,
});

export const update = (state, action) => {
  const cartList = state.data;
  const index = cartList.findIndex(product => product.id === action.product.id);
  cartList[index] = action.product;

  return {
    data: cartList,
    msg: null,
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CART_REQUEST]: request,
  [Types.CART_ADD]: add,
  [Types.CART_REMOVE]: remove,
  [Types.CART_UPDATE]: update,
});
