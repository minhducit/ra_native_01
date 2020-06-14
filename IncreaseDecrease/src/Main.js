
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Child from './components/Child'; 
import ButtonComp from './components/Button';
import * as actions from './actions';
import {connect} from 'react-redux';

class Main extends Component {
  handleIncrease = () => {
    this.props.counterIncrease();
  };

  handleDecrease = () => {
    this.props.counterDecrease();
  };

  render(){
    return (
        <View style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center'
        }}
        >
        <View style={{
            flex: 1,
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Child/>
        </View>      
        <View style = {{flex:1}}>
            <ButtonComp
                title="Increase"
                textColor="#fff"
                bgColor="#397af8"
                type = "outline"
                onPress={this.handleIncrease}/>

            <ButtonComp
                title="Decrease"
                bgColor="orange"
                textColor="#f194ff"
                type = "solid"
                onPress={this.handleDecrease}/>
        </View>
      </View>
    )

  }
}

export default connect(null, actions)(Main);
