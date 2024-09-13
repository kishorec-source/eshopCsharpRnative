import { RootState } from "../store";

export const selectCartLists = (state: RootState) => state.carts.cartItems;

export const selectCartCount = (state: RootState) => {
  const cartItems = state.carts.cartItems;
  const cartCount = cartItems.reduce(
    (total: any, cartItem: any) => total + cartItem.quantity,
    0
  );
  return cartCount;
};

export const selectCartTotal = (state: RootState) => {
  const cartItems = state.carts.cartItems;
  const cartTotal = cartItems
    .reduce(
      (total: any, cartItem: any) => total + cartItem.quantity * cartItem.price,
      0
    )
    .toFixed(2);
  return cartTotal;
};
