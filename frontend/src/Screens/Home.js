import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../services/api';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
} from 'react-native';

const Home = ({}) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      dispatch({type: 'SET_PRODUCTS', payload: data});
      console.log(data);
    });
  }, [dispatch]);

  return (
    <>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={[styles.container, {borderColor: 'red', marginTop: 5}]}>
            <Image source={{uri: item.image}} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.category}>Category: {item.category}</Text>
            <Text style={styles.rating}>
              Rating: {item.rating.rate} ({item.rating.count} reviews)
            </Text>
            <Button
              style={styles.button}
              title="add to cart"
              onPress={() => console.log('Button pressed')}
            />
          </View>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
  },
  category: {
    fontSize: 14,
    color: '#666',
  },
  rating: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
});

export default Home;
