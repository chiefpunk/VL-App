import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Dimensions } from 'react-native';


export const colors = {
    blue: '#4285f4',
    green: '#00AF4A',
    pink: '#A925DA',
    white: '#FFF',
    orange: '#FF9800',
    dark_blue: '#3b5998',
    


};
export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;


export default StyleSheet.create({
    splash_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    splash_bg: {
        alignItems: 'center',
        width: "100%",
        height: "100%",
        backgroundColor: 'black',
        flexDirection: "column"
    },

});