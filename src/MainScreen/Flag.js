import React from 'react';
import { Image, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, Text, Footer, Content, Container, FooterTab, Icon, Drawer, List, ListItem, Left, Right, Thumbnail, Body, Input, Form, Textarea, Item, Picker } from 'native-base';
import styles, { colors } from '../CustomStyle.js';
import { Table, Row, Rows } from 'react-native-table-component';
import FootMenu from './FootMenu';
import Sidebar from './Sidebar';
class FlagScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
          };
    }
    onValueChange2(value: string) {
        this.setState({
          selected2: value
        });
      }
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
                        <View style={{ position: "absolute", backgroundColor: "rgba(255,255,255,0.5)", width: "90%", height: "70%", marginTop: 150, marginLeft: 20 }}>
                            <View style={{padding:10,width:"60%"}}>
                                <Text>Seção de Bloqueio:</Text>
                                <Form>
                                    <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ width: undefined }}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#ff0000" }}
                                        placeholderIconColor="#0000ff"
                                        selectedValue={this.state.selected2}
                                        onValueChange={this.onValueChange2.bind(this)}
                                    >
                                        <Picker.Item label="EYU-P" value="key0" />
                                        <Picker.Item label="EYU-P" value="key1" />
                                        <Picker.Item label="EYU-P" value="key2" />
                                        <Picker.Item label="EYU-P" value="key3" />
                                        <Picker.Item label="EYU-P" value="key4" />
                                    </Picker>
                                    </Item>
                                </Form>
                            </View>
                            <View style={{padding:10,width:"60%"}}>
                                <Text>PK Equipe:</Text>   
                                <Item regular style={{marginTop:15}}>
                                    <Input placeholder='1062+35' placeholderTextColor='white' style={{height:40,backgroundColor:"rgb(55,119,192)",color:"white"}} />
                                </Item>
                                <View style={{width:"80%",alignItems:"center",flexDirection:"row",paddingTop:60}}>
                                    <Button style={{marginBottom:10,marginRight:20,width:"100%",borderRadius:10,backgroundColor:"rgb(222,108,39)",textAlign:"center",alignItems:"center",justifyContent:"center"}} onPress={() => {this.props.navigation.navigate('Flagremove')}}><Text style={{fontSize:22}}>INSERIR</Text></Button>
                                    <Button style={{marginBottom:10,marginRight:20,width:"100%",borderRadius:10,backgroundColor:"rgb(222,108,39)",textAlign:"center",alignItems:"center",justifyContent:"center"}}><Text style={{fontSize:22}}>CANCELAR</Text></Button>
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

export default FlagScreen;