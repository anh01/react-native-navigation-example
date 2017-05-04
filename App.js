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

 


const StackScreens = StackNavigator({
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen },
},{
    headerMode: "screen",
    navigationOptions : {
        header: ({ navigate })=>({
        visible: false,
        title: (
            <Image
                source={require("./res/menu.png")}
                style={{width: 150, height: 25, marginLeft: 15, marginRight: 15}}
                resizeMode={"contain"}
            />
        ),
        left: (
            <TouchableOpacity
                underlayColor='rgba(94, 3, 67, 0.5)'
                onPress={() => {
                    // UPDATED HERE
                    navigate('DrawerOpen')
                }}>
           
            </TouchableOpacity>
        ),
        
    })
    }
});

export default NavigationApp = DrawerNavigator({
    Home: { screen: HomeScreen },
    Login: { screen: StackScreens }
})
