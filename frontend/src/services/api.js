// api.js
export const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products/1');
  const data = await response.json();
  return data;
};

export const fetchProductDetails = async productId => {
  const response = await fetch(`https://api.example.com/products/${productId}`);
  const data = await response.json();
  return data;
};

export const fetchBasket = async userId => {
  const response = await fetch(`https://localhost:5001/api/Basket/${userId}`);
  const data = await response.json();
  return data;
};

export const addItemToBasket = async (userId, item) => {
  const response = await fetch(
    `https://localhost:5001/api/Basket/${userId}/items`,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item),
    },
  );
  const data = await response.json();
  return data;
};

// Similarly, create functions for updating and deleting basket items.
