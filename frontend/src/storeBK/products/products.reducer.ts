// src/store/products/products.reducer.ts
import { PRODUCTS_ACTIONS_TYPES } from "./products.actiontypes";

type InitialValueType = {
  products: any[];
};

const INITIAL_VALUE: InitialValueType = {
  products: [],
};

export const productsReducer = (
  state: InitialValueType = INITIAL_VALUE,
  action: any = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS_ACTIONS_TYPES.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};