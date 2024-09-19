import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Header from '../../common/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const User = () => {
  const navigation = useNavigation();
  const logout = async () => {
    await AsyncStorage.removeItem('IS_USER_LOGGED_IN');
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Header title={'My Profile'} />
      <Image
        source={require('../../images/default_user.png')}
        style={styles.user}
      />
      <Text style={styles.name}>{'John Doe'}</Text>
      <Text style={[styles.name, {fontSize: 16, marginTop: 0}]}>
        {'john.doe@example.com'}
      </Text>
      <TouchableOpacity style={[styles.tab, {marginTop: 40}]}>
        <Text style={styles.txt}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, {marginTop: 10}]}
        onPress={() => {
          navigation.navigate('Orders');
        }}>
        <Text style={styles.txt}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, {marginTop: 10}]}>
        <Text style={styles.txt}>Address | Delivery Location</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, {marginTop: 10}]}>
        <Text style={styles.txt}>Payment | Saved Cards</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, {marginTop: 10}]}>
        <Text style={styles.txt}>Gift Cards | Coupons</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, {marginTop: 10}]}>
        <Text style={styles.txt}>Help Center | Support</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, {marginTop: 10}]}
        onPress={() => {
          logout();
        }}>
        <Text style={styles.txt}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: '#000', // Add border color
    borderWidth: 1, // Add border width
    borderRadius: 10, // Add border radius
  },
  user: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  name: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  tab: {
    width: '90%',
    height: 50,
    borderBottomWidth: 0.3,
    alignSelf: 'center',
    borderBottomColor: '#DBDBDB',
    paddingLeft: 20,
    justifyContent: 'center',
    borderColor: '#000', // Add border color
    borderWidth: 1, // Add border width
    borderRadius: 10, // Add border radius
  },
  txt: {
    color: '#000',
  },
});
