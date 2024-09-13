// src/store/cart/cart.actions.ts
import { createAction } from "../../utils/reducer.utils";
import { CART_ACTIONS_TYPES } from "./cart.actiontypes";

export const setCartItems = (cartItems: any[]) =>
  createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, cartItems);