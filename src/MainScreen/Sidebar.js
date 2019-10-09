import React from 'react';
import { Image, View, StyleSheet, ImageBackground, TouchableOpacity, BackHandler,Alert } from 'react-native';
import { Button, Text, Footer, Content, Container, FooterTab, Icon, Drawer, List, ListItem, Left, Right, Thumbnail, Body } from 'native-base';
import styles, { colors } from '../CustomStyle.js';
class Sidebar extends React.Component {
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
     }
     
     componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
     }
     
     backPressed = () => {
       Alert.alert(
         'Exit App',
         'Do you want to exit?',
         [
           {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
           {text: 'Yes', onPress: () => BackHandler.exitApp()},
         ],
         { cancelable: false });
         return true;
     }
    render() {
        return (
            <View style={{ backgroundColor: "rgb(55,119,187)", paddingTop: 40 }}>
                <View style={styles.profile_img}>
                    {/* <Image source={require('./../assets/sorted_logo.png')} style={styles.profile_img} /> */}
                </View>
                <View>
                    <List>
                        <ListItem>
                            <Left>
                                <Text style={{ fontSize: 34, color: "white" }}>MENU</Text>
                            </Left>
                        </ListItem>
                    </List>
                    <View style={{ flexDirection: "column", paddingLeft: 20, paddingTop: 30 }}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Message')}}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={require('./../assets/message_icon.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white",marginTop:4 }}>MENSAGEM</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Alert')}}>
                        <View style={{ flexDirection: "row",paddingTop:20 }}>
                            <Image source={require('./../assets/alert_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white",marginTop:4 }}>ALERTAS</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Flag')}}>
                        <View style={{ flexDirection: "row",paddingTop:20 }}>
                            <Image source={require('./../assets/flag_ico.png')} style={{ width: 35, height: 35 }} />
                            <Text style={{ marginLeft: 0, color: "white",marginTop:4 }}>BANDEIRA ELETRONCIA</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Ldl')}}>
                        <View style={{ flexDirection: "row",paddingTop:20 }}>
                            <Image source={require('./../assets/ldl_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white",marginTop:4 }}>LDL E INTERDICAO</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Location')}}>
                        <View style={{ flexDirection: "row",paddingTop:20 }}>
                            <Image source={require('./../assets/local_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white",marginTop:4 }}>LOCALIZACAO</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Panic')}}>
                        <View style={{ flexDirection: "row",paddingTop:20 }}>
                            <Image source={require('./../assets/panico_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white",marginTop:4 }}>PANICO</Text>
                        </View>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row",paddingTop:20 }}>
                            <Image source={require('./../assets/ccm_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white",marginTop:4 }}>CCM</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.backPressed()}>
                        <View style={{ flexDirection: "row",paddingTop:20 }}>
                            <Image source={require('./../assets/exit_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white",marginTop:4 }}>SAIR</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>



        );
        return (
            <View style={{ backgroundColor: "rgb(55,119,187)", paddingTop: 40 }}>
                <View style={styles.profile_img}>
                    {/* <Image source={require('./../assets/sorted_logo.png')} style={styles.profile_img} /> */}
                </View>
                <View>
                    <List>
                        <ListItem>
                            <Left>
                                <Text style={{ fontSize: 34, color: "white" }}>MENU</Text>
                            </Left>
                        </ListItem>
                    </List>
                    <View style={{ flexDirection: "column", paddingLeft: 20, paddingTop: 30 }}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Message')}}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={require('./../assets/message_icon.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white",marginTop:4 }}>MENSAGEM</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Alert')}}>
                        <View style={{ flexDirection: "row",paddingTop:20 }}>
                            <Image source={require('./../assets/alert_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white",marginTop:4 }}>ALERTAS</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Flag')}}>
                        <View style={{ flexDirection: "row",paddingTop:20 }}>
                            <Image source={require('./../assets/flag_ico.png')} style={{ width: 35, height: 35 }} />
                            <Text style={{ marginLeft: 0, color: "white",marginTop:4 }}>BANDEIRA ELETRONCIA</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Ldl')}}>
                        <View style={{ flexDirection: "row",paddingTop:20 }}>
                            <Image source={require('./../assets/ldl_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white",marginTop:4 }}>LDL E INTERDICAO</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Location')}}>
                        <View style={{ flexDirection: "row",paddingTop:20 }}>
                            <Image source={require('./../assets/local_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white",marginTop:4 }}>LOCALIZACAO</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Location')}}>
                        <View style={{ flexDirection: "row",paddingTop:20 }}>
                            <Image source={require('./../assets/panico_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white",marginTop:4 }}>PANICO</Text>
                        </View>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row",paddingTop:20 }}>
                            <Image source={require('./../assets/ccm_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white",marginTop:4 }}>CCM</Text>
                        </View>
                        <View style={{ flexDirection: "row",paddingTop:20 }}>
                            <Image source={require('./../assets/exit_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white",marginTop:4 }}>SAIR</Text>
                        </View>
                    </View>

                </View>
            </View>



        );
    }
}

export default Sidebar;