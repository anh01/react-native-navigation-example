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

export default class ProfileScreen extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title:  "Profile",
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
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
  
}