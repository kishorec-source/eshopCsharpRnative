// src/store/products/products.actions.ts
import { createAction } from "../../utils/reducer.utils";
import { PRODUCTS_ACTIONS_TYPES } from "./products.actiontypes";

export const setProducts = (products: any[]) =>
  createAction(PRODUCTS_ACTIONS_TYPES.SET_PRODUCTS, products);