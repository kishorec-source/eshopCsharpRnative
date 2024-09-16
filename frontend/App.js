import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';
import Home from './src/Screens/Home';
import logo from './src/assets/logo.png';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

// ----- set nav - bottom tabs here -----
// function Home() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home</Text>
//     </View>
//   );
// }

// function Settings() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Settings" component={Settings} />
//       <Tab.Screen name="Wishlist" component={Wishlist} />
//       <Tab.Screen name="UserProfile" component={UserProfile} />
//       <Tab.Screen name="Cart" component={Cart} />
//     </Tab.Navigator>
//   );
// }
// ----- set nav - bottom tabs here -----

const App = () => {
  return (
    <ScrollView>
      {/* <NavigationContainer>
          <MyTabs />
          </NavigationContainer> */}
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image style={styles.logo} source={logo} />
          {/* <Text style={styles.title}>eShopOnMobileNative</Text> */}
        </View>
        <Home />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    // alignItems: 'center',
    marginLeft: 10,
    marginBottom: 30,
  },
});

export default App;
