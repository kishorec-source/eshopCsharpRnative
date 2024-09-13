// src/index.tsx
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/store/store';
import {name as appName} from './app.json';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);