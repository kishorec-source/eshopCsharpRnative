import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = async () => {
  //   try {
  //     console.log('Search term:', searchTerm); // Add this line to check the value of searchTerm
  //     const response = await fetch(
  //       `https://fakestoreapi.com/products?title=${searchTerm}`,
  //     );
  //     const data = await response.json();
  //     setSearchResults(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleSearch = async () => {
    try {
      console.log('Search term:', searchTerm); // Add this line to check the value of searchTerm
      const response = await fetch(
        `https://fakestoreapi.com/products?title=${searchTerm}`,
      );
      const data = await response.json();
      const filteredResults = data.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setSearchResults(filteredResults);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Search products..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={handleSearch} />
      {searchResults.map(product => (
        <Text key={product.id}>{product.title}</Text>
      ))}
    </View>
  );
};

export default Search;
