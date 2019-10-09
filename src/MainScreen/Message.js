import React from 'react';
import { Image, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, Text, Footer, Content, Container, FooterTab, Icon, Drawer, List, ListItem, Left, Right, Thumbnail, Body, Input, Form, Textarea } from 'native-base';
import styles, { colors } from '../CustomStyle.js';
import Sidebar from './Sidebar';
class MessageScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    drawerContent = () => {
        return (
            <TouchableOpacity style={{ backgroundColor: 'rgb(55,119,187)', flex: 1 }} onPress={() => this.closeDrawer()} activeOpacity={1} >
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
                        <View style={{ position: "absolute", backgroundColor: "rgba(255,255,255,0.5)", width: "90%", height: "50%", marginTop: 150, marginLeft: 20 }}>
                            <View style={{ width: "100%", height: 50, alignItems: "flex-end", padding: 20 }}>
                                <View style={{ borderRadius: 10, backgroundColor: "rgb(55,119,187)", width: 100, height: 40, justifyContent: "center", alignItems: "flex-start", paddingLeft: 10 }}><Text style={{ fontSize: 22, color: "white" }}>Bom</Text></View>
                            </View>
                            <View style={{ borderRadius: 10, backgroundColor: "rgb(222,108,39)", width: 100, height: 40, justifyContent: "center", alignItems: "flex-start", paddingLeft: 10, margin: 20 }}><Text style={{ fontSize: 22, color: "white" }}>Bom</Text></View>
                            <View style={{ width: "100%", height: "70%", justifyContent: "flex-end" }}>
                                <View style={{ backgroundColor: "rgba(217,217,217,1)", width: "100%", height: "25%", paddingLeft: 10, paddingTop: 3 }}>
                                    <Form style={{flexDirection:"row"}}>
                                        <Textarea rowSpan={2} bordered placeholder="" style={{ backgroundColor: "white", borderRadius: 10, width: "75%", height: 47 }} />
                                        <Button vertical style={{marginLeft:20,marginTop:5,backgroundColor: 'transparent' }} onPress={() => { this.props.navigation.navigate('Message') }}>
                                            <Image source={require('../assets/send_btn.png')}
                                                style={{ width: 40, height: 40 }}
                                            ></Image>

                                        </Button>    
                                    </Form>
                                    
                                </View>
                                
                            </View>
                        </View>



                    </Content>
                    <Footer style={{ height: 80 }}>
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

export default MessageScreen;