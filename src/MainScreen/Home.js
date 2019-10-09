import React from 'react';
import { Image, View, StyleSheet, ImageBackground, TouchableOpacity,BackHandler, Alert } from 'react-native';
import { Button, Text, Footer, Content, Container, FooterTab, Icon, Drawer, List, ListItem, Left, Right, Thumbnail, Body } from 'native-base';
import styles, { colors } from '../CustomStyle.js';
import Sidebar from './Sidebar.js';
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
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
    drawerContent = () => {
        return (
            <TouchableOpacity style={{ backgroundColor: 'rgb(55,119,187)', flex: 1 }} onPress={() => this.closeDrawer()} activeOpacity={1} >
                {/* {this._sidebar()} */}
                <Sidebar navigation={this.props.navigation}/>
            </TouchableOpacity>

        );
    };

    closeDrawer() {
        this.drawer._root.close()
    };
    openDrawer() {
        this.drawer._root.open()
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Drawer ref={(ref) => { this.drawer = ref; }} content={this.drawerContent()} onClose={() => this.closeDrawer()} >
                <Container>
                    <Content>
                        <View style={{ width: "100%", height: "100%" }}>
                            <Image source={require('../assets/main_background.png')}
                                style={{ width: "100%", height: 750 }} resizeMode={'stretch'}
                            ></Image>
                        </View>
                        <View style={{ position: "absolute", flexDirection: "column", backgroundColor: "transparent" }}>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", paddingTop: 100, backgroundColor: 'transparent' }}>
                                <Button vertical style={{ padding: 40, backgroundColor: 'transparent' }} onPress={() => {this.props.navigation.navigate('Message')}}>
                                    <Image source={require('../assets/message_btn.png')}
                                        style={{ width: 100, height: 100 }}
                                    ></Image>

                                </Button>
                                <Button vertical style={{ padding: 40, backgroundColor: 'transparent' }} onPress={() => {this.props.navigation.navigate('Alert')}}>
                                    <Image source={require('../assets/alert_btn.png')}
                                        style={{ width: 100, height: 100 }}
                                    ></Image>
                                </Button>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 40, backgroundColor: 'transparent' }}>
                                <Button vertical style={{ padding: 40, backgroundColor: 'transparent' }}  onPress={() => {this.props.navigation.navigate('Flag')}}>
                                    <Image source={require('../assets/bandeira_btn.png')}
                                        style={{ width: 100, height: 100 }}
                                    ></Image>

                                </Button>
                                <Button vertical style={{ padding: 40, backgroundColor: 'transparent' }} onPress={() => {this.props.navigation.navigate('Ldl')}}>
                                    <Image source={require('../assets/LDL_btn.png')}
                                        style={{ width: 100, height: 100 }}
                                    ></Image>

                                </Button>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 40, backgroundColor: 'transparent' }}>
                                <Button vertical style={{ padding: 40, backgroundColor: 'transparent' }} onPress={() => {this.props.navigation.navigate('Location')}}> 
                                    <Image source={require('../assets/local_btn.png')}
                                        style={{ width: 100, height: 100 }}
                                    ></Image>

                                </Button>
                                <Button vertical style={{ padding: 40, backgroundColor: 'transparent' }} onPress={() => {this.props.navigation.navigate('Panic')}}>
                                    <Image source={require('../assets/panico_btn.png')}
                                        style={{ width: 100, height: 100 }}
                                    ></Image>

                                </Button>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 40, backgroundColor: 'transparent' }}>
                                <Button vertical style={{ padding: 40, backgroundColor: 'transparent' }} onPress={() => {this.props.navigation.navigate('Panic')}}>
                                    <Image source={require('../assets/ccm_btn.png')}
                                        style={{ width: 100, height: 100 }}
                                    ></Image>

                                </Button>
                                <Button vertical style={{ padding: 40, backgroundColor: 'transparent' }} onPress={() => this.backPressed()}>
                                    <Image source={require('../assets/sair_btn.png')}
                                        style={{ width: 100, height: 100 }}
                                    ></Image>

                                </Button>
                            </View>
                        </View>
                    </Content>
                    <Footer style={{ height: 80, backgroundColor:'red' }}>
                        <FooterTab style={{backgroundColor:'rgb(55,119,187)'}}>
                            <Button vertical>
                                <Image source={require('../assets/roteador_btn.png')}
                                    style={{ width: 50, height: 50 }}
                                ></Image>
                                <Text style={{ fontSize: 12 }}>Roteader</Text>
                            </Button>
                            <Button vertical>
                                <Image source={require('../assets/3g-btn.png')}
                                    style={{ width: 50, height: 50 }}
                                ></Image>
                                <Text style={{ fontSize: 12 }}>3G/4G</Text>
                            </Button>
                            <Button vertical>
                                <Image source={require('../assets/satelite_btn.png')}
                                    style={{ width: 50, height: 50 }}
                                ></Image>
                                <Text style={{ fontSize: 12 }}>Satelite</Text>
                            </Button>
                            <Button vertical onPress={() => this.openDrawer()}>
                                <Image source={require('../assets/menu_btn.png')}
                                    style={{ width: 50, height: 50 }}
                                ></Image>
                                <Text style={{ fontSize: 12 }}>Menu</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </Drawer >



        );
    }
}

export default HomeScreen;