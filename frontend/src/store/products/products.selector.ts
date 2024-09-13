import { RootState } from "../store";

export const selectProductsLists = (state: RootState) =>
  state.products.productsLists;
export const selectProductsListsIsLoading = (state: RootState) =>
  state.products.isLoading;
export const selectProductsListsIsError = (state: RootState) =>
  state.products.isError;
