// src/navigation/AppNavigator.tsx
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import UserProfile from '../Screens/UserProfile';
import Wishlist from '../Screens/Wishlist';
import Search from '../Screens/Search';
import Checkout from '../Screens/Checkout';
import UserLogin from '../Screens/UserLogin';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserLogin">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
        <Stack.Screen name="UserLogin" component={UserLogin} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
