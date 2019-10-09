import React from 'react';
import { Image, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, Text, Footer, Content, Container, FooterTab, Icon, Drawer, List, ListItem, Left, Right, Thumbnail, Body, Input, Form, Textarea } from 'native-base';
import styles, { colors } from '../CustomStyle.js';
import { Table, Row, Rows } from 'react-native-table-component';
import Sidebar from './Sidebar';
class AlertScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    constructor(props) {
        super(props);
        this.state = {
            tableHead1: ['TIPO', 'DESC', 'LOCAL', 'HORA', 'STATUS'],
            tableHead2: ['TIPO', 'DESC', 'LOCAL', 'HORA', 'STATUS'],
            tableData1: [
                ['Ale.', 'Trem', 'ZZZ-AAA-P', '11:23', 'Nao Lido'],
                ['Aut', 'LDL', 'ZZZ-P', '11:00', 'Vigente'],
                ['Aut', 'Raio', 'ZZZ-P', '11:00', 'Vigente'],
                
            ],
            tableData2: [
                ['Ale.', 'Trem', 'ZZZ-AAA-P', '11:23', 'Nao Lido'],
                ['Aut', 'LDL', 'ZZZ-P', '11:00', 'Vigente'],
                ['Aut', 'Raio', 'ZZZ-P', '11:00', 'Vigente'],
            ]
        }
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
        const state = this.state;
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
                            <View style={{flex: 1, padding: 5, paddingTop: 10, backgroundColor: 'transparent'}}>
                                <Text>Alertas / Aitprozacpes Vigentes</Text>
                                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                    <Row data={state.tableHead1} style={{height: 40, backgroundColor: 'rgb(64,118,196)'}} textStyle={styles.text} />
                                    <Rows data={state.tableData1} textStyle={{margin: 6, color:'red'}} style={{backgroundColor:'rgb(217,217,217)'}}/>
                                </Table>
                            </View>
                            <View style={{flex: 1, padding: 5, paddingTop: 10, backgroundColor: 'transparent'}}>
                                <Text>Alertas / Aitprozacpes Finalizados</Text>
                                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                    <Row data={state.tableHead2} style={{height: 40, backgroundColor: 'rgb(64,118,196)'}} textStyle={styles.text} />
                                    <Rows data={state.tableData2} textStyle={{margin: 6}} style={{backgroundColor:'rgb(217,217,217)'}} />
                                </Table>
                            </View>
                            <View style={{width:"100%",alignItems:"flex-end"}}>
                            <Button style={{marginBottom:10,marginRight:20,width:"50%",borderRadius:10,backgroundColor:"rgb(222,108,39)",textAlign:"center",alignItems:"center",justifyContent:"center"}} onPress={() => {this.props.navigation.navigate('Home')}}><Text style={{fontSize:24}}>CANCELAR</Text></Button>
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

export default AlertScreen;