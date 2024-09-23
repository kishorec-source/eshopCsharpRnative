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

// add in-line comments to explain the code or for such functionalities
// version control for each component/screen
// impact on business process
// accessibilities issues
// const/string - from a single source of truth

const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(json => {
        const formattedProducts = json.map(item => ({
          ...item,
          qty: 1,
          image: item.images[0], // Assuming you want to use the first image
        }));
        setProducts(formattedProducts);
        dispatch(addProducts(formattedProducts));
      });
  };
  return (
    <View style={styles.container}>
      <Header
        // leftIcon={require('../../images/logo.png')}
        rightIcon={require('../../images/cart.png')}
        title={'React-Native eShop'}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
        isCart={true}
      />
      {/* <FlatList
        data={[
          {id: '1', image: 'https://via.placeholder.com/300x150'},
          {id: '2', image: 'https://via.placeholder.com/300x150'},
          {id: '3', image: 'https://via.placeholder.com/300x150'},
        ]}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Image source={{uri: item.image}} style={styles.bannerImage} />
        )}
        keyExtractor={item => item.id}
      /> */}
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
              <View style={styles.itemDetails}>
                <Text style={styles.name}>
                  {item.title?.length > 25
                    ? item.title.substring(0, 25) + '...'
                    : item.title}
                </Text>
                <Text style={styles.desc}>
                  {item.description?.length > 30
                    ? item.description.substring(0, 30) + '...'
                    : item.description}
                </Text>
                <Text style={styles.price}>{'$' + item.price}</Text>
                {item.ratingImage && (
                  <Image
                    source={{uri: item.ratingImage}}
                    style={styles.ratingImage}
                  />
                )}
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  productItem: {
    width: Dimensions.get('window').width / 2 - 10,
    margin: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  itemImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  itemDetails: {
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  desc: {
    textAlign: 'center',
    color: '#666',
    marginTop: 5,
  },
  price: {
    color: 'green',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 5,
  },
  ratingImage: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
});
