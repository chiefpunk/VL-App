import React from 'react';
import { Image, View, StyleSheet, ImageBackground } from 'react-native';
import { Button, Text } from 'native-base';
import styles, { colors } from './CustomStyle.js';
class WelcomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
        <View style={styles.spalsh_container}>
            <ImageBackground source={require('./assets/Rectangle.png')}
                style={styles.splash_bg}
                resizeMode={'stretch'}>
                <View>
                    <Image source={require('./assets/Frame.png')}
                        style={styles.splash_logo_image}
                    ></Image>
                </View>
                <View>
                    <Image source={require('./assets/Frame2.png')}
                        style={styles.splash_logo_text}
                    ></Image>
                </View>
                

            </ImageBackground>
            
            <View style={styles.splash_button_container}>
            
                <Button style={styles.splash_login_button}><Text style={styles.splash_login_text}>LOG IN</Text></Button>
                <Button style={styles.splash_register_button}><Text style={styles.splash_register_text}>REGISTER</Text></Button>
            </View>
        </View>
        );
    }
}

export default WelcomeScreen;


import React, {Component} from 'react';
import { AppRegistry ,StyleSheet} from 'react-native';

export const colors = {
    blue: '#0009DB',
    green: '#00AF4A',
    pink: '#A925DA',    
    white: '#FFF',
    orange: '#FF9800'
    
};


export default StyleSheet.create({
    spalsh_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    splash_bg: {        
        alignItems: 'center',
        width: "100%",
        height: 707,
        backgroundColor:'black',    
        flexDirection:"column"    
    },
    splash_logo_image: {
        alignItems: 'center',
        marginTop:248,
        width: 151,
        height: 131,
    },
    splash_logo_text: {
        alignItems: 'center',
        marginTop:500,
        width: 151,
        height: 71,
    },
    splash_button_container:{        
        flexDirection:"row",
        paddingTop:20,
        paddingLeft:16,
        paddingRight:16,
        height:'17%',
        backgroundColor:'red'
        
    },
    splash_login_button:{
        flex:1,
        marginRight:4.5,
        height:52,
        width:167,
        alignItems:"center",
        textAlign:"center",
        justifyContent:'center',
        borderRadius:6,
        backgroundColor:"white",
        borderWidth:2,
        borderColor:'#FF9800'
    },
    splash_register_button:{
        flex:1,
        marginLeft:4.5,
        height:52,
        width:167,
        justifyContent:'center',
        borderRadius:6,
        backgroundColor:colors.orange,
    },
    splash_login_text:{
        fontFamily:"Robot",
        fontStyle:"normal",
        fontWeight:"bold",
        fontSize:13,
        color:colors.orange,
        letterSpacing:0.04,
        lineHeight:15,
        display:"flex",

        
    },
    splash_register_text:{
        fontFamily:"Robot",
        fontStyle:"normal",
        fontWeight:"bold",
        fontSize:13,
        color:colors.white,
        letterSpacing:0.04,
        
    }
});