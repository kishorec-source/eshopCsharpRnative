import {ADD_TO_CART} from './cart.actions';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if item already exists in the cart
      const existingItem = state.cartItems.find(
        item => item.id === action.payload.id,
      );

      if (existingItem) {
        // Update the quantity if the item is already in the cart
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === existingItem.id
              ? {...item, quantity: item.quantity + 1}
              : item,
          ),
        };
      }

      // Add new item to the cart with initial quantity 1
      return {
        ...state,
        cartItems: [...state.cartItems, {...action.payload, quantity: 1}],
      };

    // case REMOVE_FROM_CART:
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.filter(item => item.id !== action.payload),
    //   };

    default:
      return state;
  }
};

export default cartReducer;
