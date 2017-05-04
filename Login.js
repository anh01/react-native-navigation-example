import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import { NavigationActions } from 'react-navigation'

 export default class LoginScreen extends React.Component {
   constructor(props) {
    super(props);
    this.state = { usernamePlaceholder: 'username',
  passwordPlacehoder: 'password'};
  }
  static navigationOptions = {
    title: 'Login',
  };

  
  _navigateTo = (routeName: string) => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })
    this.props.navigation.dispatch(resetAction)
  }


 render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        
<TextInput
        style={{height: 40, borderColor: 'red', borderWidth: 1, width:200}}
        onChangeText={(textUsername) => this.setState({textUsername})}
        placeholder={this.state.usernamePlaceholder}
        value={this.state.textUsername}
      />

      <TextInput
        style={{height: 40, borderColor: 'red', borderWidth: 1, width:200, margin:20}}
        onChangeText={(textPassword) => this.setState({textPassword})}
        placeholder={this.state.passwordPlacehoder}
        value={this.state.textPassword}
        secureTextEntry={true}
      />



          <Button 
          onPress={() =>{
            this._navigateTo('Home')
            
          }}
          color="#C9C9C9"
          textAlign="center"
          title="Login"
          width="0"
        />
        </View>
      
    );
  }

}

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
  }
});