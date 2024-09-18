// api.js
export const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const fetchProductDetails = async productId => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`,
  );
  const data = await response.json();
  return data;
};

export const fetchBasket = async userId => {
  const response = await fetch(`https://fakestoreapi.com/products/${userId}`);
  const data = await response.json();
  return data;
};

export const addItemToBasket = async (userId, item) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${userId}/items`,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item),
    },
  );
  const data = await response.json();
  return data;
};

export const updateBasketItem = async (userId, itemId, item) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${userId}/items/${itemId}`,
    {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item),
    },
  );
  const data = await response.json();
  return data;
};

export const deleteBasketItem = async (userId, itemId) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${userId}/items/${itemId}`,
    {
      method: 'DELETE',
    },
  );
  const data = await response.json();
  return data;
};
