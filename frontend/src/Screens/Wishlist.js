import React from 'react';
import {View, Text, Button} from 'react-native';
import Wishlist from './Wishlist';

const Home = () => {
  const handleAddToWishlist = product => {
    // Pass the product data to the Wishlist component
    // You can modify this logic based on how you fetch the product data
    const product = {id: 1, name: 'Product 1'};
    Wishlist.addToWishlist(product);
    fetch('https://api.example.com/products')
      .then(response => response.json())
      .then(data => {
        Wishlist.addToWishlist(data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
    Wishlist.addToWishlist(product);
  };

  return (
    <View>
      <Text>Your Wishlist Items here</Text>
      <Button
        title="Add to Wishlist"
        onPress={() => handleAddToWishlist({id: 1, name: 'Product 1'})}
      />
    </View>
  );
};

export default Home;
