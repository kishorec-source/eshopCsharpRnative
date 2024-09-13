import { createAction } from "../../utils/reducer.utils";
import { PRODUCTS_ACTION_TYPES } from "./products.actiontypes";

// action to start the async api call for productlists data
export const fetchProductsStart = () =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START, null);

// action for success of productlists data
export const fetchProductsSuccess = (productsLists: any) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, productsLists);

// action for failed of productlists data
export const fetchProductsFailed = (error: any) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error);

// getting the productlists data from API
export const fetchProductsAsync = () => async (dispatch: any) => {
  dispatch(fetchProductsStart());
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const responseData = await response.json();
    dispatch(fetchProductsSuccess(responseData));
  } catch (error) {
    dispatch(fetchProductsFailed(error));
  }
};
