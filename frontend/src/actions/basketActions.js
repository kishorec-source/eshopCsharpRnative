// actions/basketActions.js
export const fetchBasket = userId => async dispatch => {
  const response = await fetch(`https://localhost:5001/api/Basket/${userId}`);
  const data = await response.json();
  dispatch({type: 'SET_BASKET', payload: data});
};

export const addItemToBasket = (userId, item) => async dispatch => {
  const response = await fetch(
    `https://localhost:5001/api/Basket/${userId}/items`,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item),
    },
  );
  const data = await response.json();
  dispatch({type: 'ADD_ITEM_TO_BASKET', payload: data});
};

// Similarly, create actions for updating and deleting basket items.
