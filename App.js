import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import LoginScreen from './Login'
import HomeScreen from './Home'


export default NavigationApp = StackNavigator({
    Login: { screen: LoginScreen },
       Home: { screen: HomeScreen }
})
