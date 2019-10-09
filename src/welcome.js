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
                <View style={styles.splash_logo}>
                    <Image source={require('./assets/Frame.png')}
                        style={styles.splash_logo_image}
                    ></Image>
                    <Image source={require('./assets/Frame2.png')}
                        style={styles.splash_logo_text}
                    ></Image>
                </View>
                
                

            </ImageBackground>
            
            <View style={styles.splash_button_container}>
            
                <Button style={styles.splash_login_button}><Text style={styles.splash_login_text} onPress={() => {this.props.navigation.navigate('Login')}}>LOG IN</Text></Button>
                <Button style={styles.splash_register_button}><Text style={styles.splash_register_text} onPress={() => {this.props.navigation.navigate('Register')}}>REGISTER</Text></Button>
            </View>
        </View>


        );
    }
}

export default WelcomeScreen;