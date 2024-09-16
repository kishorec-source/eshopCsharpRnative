import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Home from './src/Screens/Home';
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

export class App extends Component {
  render() {
    return (
      <>
        {/* <NavigationContainer>
          <MyTabs />
        </NavigationContainer> */}
        <View>
          <Text>eShopOnMobileNative</Text>
          <Home />
        </View>
      </>

    )
  }
}

export default App