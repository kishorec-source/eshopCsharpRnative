import { createAction } from "../../utils/reducer.utils";
import { CART_ACTIONS_TYPES } from "./cart.actiontypes";

const addCartItem = (cartItems: any, productToAdd: any) => {
  const existingCartItem = cartItems.find(
    (item: any) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item: any) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: any, cartToRemove: any) => {
  const existingCartItem = cartItems.find(
    (item: any) => item.id === cartToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item: any) => item.id !== cartToRemove.id);
  }
  return cartItems.map((item: any) =>
    item.id === cartToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearCartItem = (cartItems: any, cartToRemove: any) => {
  return cartItems.filter((item: any) => item.id !== cartToRemove.id);
};

export const addToCartItem = (cartItems: any, productToAdd: any) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeFromCart = (cartItems: any, cartToRemove: any) => {
  const newCartItems = removeCartItem(cartItems, cartToRemove);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems: any, cartToRemove: any) => {
  const newCartItems = clearCartItem(cartItems, cartToRemove);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};
