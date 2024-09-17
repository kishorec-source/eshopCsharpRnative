import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?title=${searchTerm}`,
      );
      const data = await response.json();
      const filteredResults = data.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setSearchResults(filteredResults);
      setModalVisible(true); // Show the modal when search results are available
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search products..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.input}
      />
      <Button title="Search" onPress={handleSearch} />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          <Button title="Close" onPress={handleCloseModal} />
          <FlatList
            data={searchResults}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.resultItem}>
                {item.image ? (
                  <Image source={{uri: item.image}} style={styles.image} />
                ) : null}
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  modalContainer: {
    flex: 1,
    marginTop: 50,
    padding: 16,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Search;
