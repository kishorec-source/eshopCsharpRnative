// src/store/root.reducer.ts
import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { productsReducer } from "./products/products.reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;