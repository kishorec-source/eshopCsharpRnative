// reducers/basketReducer.js
const initialState = {
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BASKET':
      return {...state, basket: action.payload};
    case 'ADD_ITEM_TO_BASKET':
      return {...state, basket: [...state.basket, action.payload]};
    // Handle other actions like updating and deleting items.
    default:
      return state;
  }
};

export default basketReducer;
