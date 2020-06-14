import React, {Component} from 'react';
import {Button} from 'react-native-elements';

const ButtonComp = ({title, onPress, bgColor, textColor, type}) => (
    <Button
        type = {type}
        style = {{marginBottom:10}}
        backgroundColor = {bgColor}
        title = {title}
        color = {textColor}
        onPress = {onPress}/>
);

export default ButtonComp;

