// reducers/productReducer.js
const initialState = {
  productList: [],
  productDetails: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {...state, productList: action.payload};
    case 'SET_PRODUCT_DETAILS':
      return {...state, productDetails: action.payload};
    default:
      return state;
  }
};

export default productReducer;
