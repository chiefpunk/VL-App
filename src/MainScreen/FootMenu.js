import React from 'react';
import { Image, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, Text, Footer, Content, Container, FooterTab, Icon, Drawer, List, ListItem, Left, Right, Thumbnail, Body, Input, Form, Textarea, Item, Picker } from 'native-base';
import styles, { colors } from '../CustomStyle.js';
import { Table, Row, Rows } from 'react-native-table-component';
class FootMenu extends React.Component {
    _sidebar() {
        return (
            <View style={{backgroundColor: "rgb(55,119,187)", paddingTop: 40 }}>
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
                        <View style={{ flexDirection: "row" }}>
                            <Image source={require('./../assets/message_icon.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white", marginTop: 4 }}>MENSAGEM</Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingTop: 20 }}>
                            <Image source={require('./../assets/alert_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white", marginTop: 4 }}>ALERTAS</Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingTop: 20 }}>
                            <Image source={require('./../assets/flag_ico.png')} style={{ width: 35, height: 35 }} />
                            <Text style={{ marginLeft: 0, color: "white", marginTop: 4 }}>BANDEIRA ELETRONCIA</Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingTop: 20 }}>
                            <Image source={require('./../assets/ldl_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white", marginTop: 4 }}>LDL E INTERDICAO</Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingTop: 20 }}>
                            <Image source={require('./../assets/local_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white", marginTop: 4 }}>LOCALIZACAO</Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingTop: 20 }}>
                            <Image source={require('./../assets/panico_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white", marginTop: 4 }}>PANICO</Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingTop: 20 }}>
                            <Image source={require('./../assets/ccm_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white", marginTop: 4 }}>CCM</Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingTop: 20 }}>
                            <Image source={require('./../assets/exit_ico.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ marginLeft: 10, color: "white", marginTop: 4 }}>SAIR</Text>
                        </View>
                    </View>

                </View>
            </View>



        );
    }
    drawerContent = () => {
        return (
            <TouchableOpacity style={{ backgroundColor: 'rgb(55,119,187)'}} onPress={() => this.closeDrawer()} activeOpacity={1} >
                {this._sidebar()}
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
        return (
        <Drawer ref={(ref) => { this.drawer = ref; }} content={this.drawerContent()} onClose={() => this.closeDrawer()} >
            <Footer style={{ height: 80 }}>
                <FooterTab>
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
        </Drawer>
        );
        
    }

}

export default FootMenu;