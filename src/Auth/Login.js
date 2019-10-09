import React from 'react';
import { Image, View, StyleSheet, ImageBackground } from 'react-native';
import { Button, Text, Item, Input, Label, Form, Icon } from 'native-base';
import styles, { colors } from '../CustomStyle';
class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (

            <ImageBackground source={require('../assets/login_background.png')}
                style={styles.splash_bg}
                resizeMode={'stretch'}>
                <View style={{ backgroundColor: "rgba(55,119,187,0.5)", width: "100%", height: "100%", alignItems: "center", paddingTop: 30 }}>
                    <Image source={require('../assets/logo.png')} style={{ width: 170, height: 230, justifyContent: "center", alignItems: "center", borderColor:"red" }}></Image>
                    <Item style={{ width: "80%", paddingTop: 60 }}>
                        <Icon active name='user' type="SimpleLineIcons" style={{ color: "rgb(222,108,39)", fontSize: 34, paddingLeft:7 }} />
                        <Input placeholder='99999999' placeholderTextColor='white' style={{fontSize:30,textAlign:'center',marginTop:5}} />
                    </Item>
                    <Item style={{ width: "80%", paddingTop: 10 }}>
                        <Icon active name='lock' type="Entypo" style={{ color: "rgb(222,108,39)", fontSize: 40 }} />
                        <Input secureTextEntry={true} password={true} type='password' placeholder=' ********' placeholderTextColor='white' style={{fontSize:30,textAlign:'center',marginTop:5}} />
                    </Item>
                    <Button style={{marginTop:150,width:"80%",borderRadius:10,backgroundColor:"rgb(222,108,39)",textAlign:"center",alignItems:"center",justifyContent:"center"}} onPress={() => {this.props.navigation.navigate('Home')}}><Text style={{fontSize:24}}>ENTRA</Text></Button>                    
                </View>
            </ImageBackground>



        );
    }
}

export default LoginScreen;