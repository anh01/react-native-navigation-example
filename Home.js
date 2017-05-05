import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight
} from 'react-native';

import { DrawerNavigator } from 'react-navigation';
import ProfileScreen from './Profile'
import NotificationsScreen from './Notifications'
import { StackNavigator } from 'react-navigation';


 export default HomeScreen = DrawerNavigator({
  Profile: {
    screen: ProfileScreen
  },
  Notifications: {
    screen: NotificationsScreen
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   icon: {
    width: 24,
    height: 24,
  },
});