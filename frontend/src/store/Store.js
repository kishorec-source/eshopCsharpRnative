import {configureStore, combineReducers} from '@reduxjs/toolkit';
import productReducer from '../reducers/productReducer';
import cartReducer from '../store/cart/cart.reducer';
import wishlistReducer from '../store/wishlist/wishlist.reducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
