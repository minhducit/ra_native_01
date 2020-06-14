import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Main from './src/Main';
import {Provider} from 'react-redux';
import store from './src/store';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});



export default class App extends Component  {
  render(){
    return (
       <Provider store={store}>      
        <View style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center'
        }}
        >
          <Text style={styles.welcome}>Welcome to TEA I</Text>
          <Text style={styles.instructions}>Fun education app.</Text>
          <Main/>  
        </View>
    </Provider>      
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
    color: 'red',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'red'
  },
  btnStyle: {
      width: 100,
      height: 40,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: "red",
      backgroundColor: "#15c"
  }
});
