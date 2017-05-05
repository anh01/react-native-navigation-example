
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';

export default class NotificationsScreen extends React.Component {
  static navigationOptions =  ({ navigation, screenProps }) => ({
    drawerLabel: 'Notifications',
    /*drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./res/menu.png')}
        style={[styles.tabIcon, {tintColor: tintColor}]}
      />
    ),*/
    title: 'Notifications',
    headerLeft:  
   
                <TouchableOpacity onPress={()=> navigation.navigate('DrawerOpen')}>
                       <Image source={require('./res/menu.png')} 
                       style={{ height: 25}}
                       resizeMode={'center'}/>
                </TouchableOpacity>
  });

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}