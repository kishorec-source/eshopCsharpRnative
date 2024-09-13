import { CART_ACTIONS_TYPES } from "./cart.actiontypes";

type InitialValueType = {
  cartItems: any;
};
const INITIAL_VALUE: InitialValueType = {
  cartItems: [],
};

export const cartReducer = (
  state: InitialValueType = INITIAL_VALUE,
  action: any = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};
