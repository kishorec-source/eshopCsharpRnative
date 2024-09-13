import { PRODUCTS_ACTION_TYPES } from "./products.actiontypes";

type InitialValueType = {
  productsLists: any;
  isLoading: boolean;
  isError: null | string;
};
const INITIAL_VALUE: InitialValueType = {
  productsLists: [],
  isLoading: false,
  isError: null,
};

export const productsReducer = (
  state: InitialValueType = INITIAL_VALUE,
  action: any = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsLists: payload,
        isLoading: false,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        isError: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
