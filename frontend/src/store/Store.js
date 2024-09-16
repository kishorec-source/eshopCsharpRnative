import {configureStore, combineReducers} from '@reduxjs/toolkit';
import productReducer from '../reducers/productReducer';
// import cartReducer from './reducers/cartReducer';
// import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  products: productReducer,
  // cart: cartReducer,
  // user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
