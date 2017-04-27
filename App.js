import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './Login'
import HomeScreen from './Home'


export default NavigationApp = StackNavigator({
  Login: { screen: LoginScreen },
  Home: {screen: HomeScreen}
});
 


