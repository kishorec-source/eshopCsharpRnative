import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import UserProfile from './UserProfile';

const Stack = createNativeStackNavigator();

const getIsSignedIn = () => {
  // custom logic
  return true;
};

export default function Login() {
  const isSignedIn = getIsSignedIn();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={UserProfile} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  return <View />;
}

function Profile() {
  return <View />;
}

function Settings() {
  return <View />;
}

function SignIn() {
  return <View />;
}

function SignUp() {
  return <View />;
}
