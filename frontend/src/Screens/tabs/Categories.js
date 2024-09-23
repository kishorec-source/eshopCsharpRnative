import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../common/Header';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addProducts} from '../../redux/slices/ProductsSlice';

const Categories = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        json.map(item => {
          item.qty = 1;
        });
        dispatch(addProducts(json));
      });
  };
  return (
    <View style={styles.container}>
      <Header
        // leftIcon={require('../../images/logo.png')}
        rightIcon={require('../../images/cart.png')}
        title={'eShop Categories'}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
        isCart={true}
      />
      <View style={styles.pillsContainer}>
        <TouchableOpacity
          style={styles.pill}
          onPress={() => {
            fetch('https://dummyapi.online/api/movies')
              .then(res => res.json())
              .then(json => {
                const formattedMovies = json.map(item => ({
                  ...item,
                  qty: 1,
                  image: item.poster, // Assuming you want to use the poster image
                  ratingImage: item.ratingImage, // Assuming the API provides a rating image
                }));
                setProducts(formattedMovies);
              });
          }}>
          <Text style={styles.pillText}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pill}>
          <Text style={styles.pillText}>Grocery</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.productItem}
              onPress={() => {
                navigation.navigate('ProductDetail', {data: item});
              }}>
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>
                  {item.name?.length > 25
                    ? item.name.substring(0, 25) + '...'
                    : item.name}
                </Text>
                <Text style={styles.price}>{'Category ID: ' + item.id}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pillsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    // width: '50%',
  },
  pill: {
    backgroundColor: '#077a62',
    borderRadius: 20,
    paddingVertical: 17,
    paddingHorizontal: 60,
    marginHorizontal: 5,
  },
  pillText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  productItem: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  desc: {
    marginTop: 5,
  },
  price: {
    color: 'green',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 5,
  },
});
export default Categories;
