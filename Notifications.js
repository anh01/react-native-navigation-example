
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

export default class NotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    /*drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./res/menu.png')}
        style={[styles.tabIcon, {tintColor: tintColor}]}
      />
    ),*/
    title: 'Notifications',
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}