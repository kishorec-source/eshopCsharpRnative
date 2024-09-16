// api.js
export const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    // console.log(data.category); // Add this line to log the data
    return data;
  } catch (error) {
    return null;
  }
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
