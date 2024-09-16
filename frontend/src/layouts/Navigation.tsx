// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Cart from '../Screens/Cart';
import UserProfile from '../Screens/UserProfile';
import Wishlist from '../Screens/Wishlist';
import Search from '../Screens/Search';
import ProductDetails from '../Screens/ProductDetails';
import Checkout from '../Screens/Checkout';

// Define the type for your routes
export type RootStackParamList = {
    Home: undefined;
    Cart: undefined;
    UserProfile: undefined;
    Wishlist: undefined;
    Login: undefined;
    Search: undefined;
    ProductDetails: undefined;
    Checkout: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="UserProfile" component={UserProfile} />
                <Stack.Screen name="Wishlist" component={Wishlist} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} />
                <Stack.Screen name="Checkout" component={Checkout} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
