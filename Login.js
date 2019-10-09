import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, View, Input, Item, TextInput } from 'native-base';
import styles, { colors } from '../CustomStyle';

class LoginScreen extends Component {

    _goBack = () => { this.props.navigation.navigate('Welcome') }
    render() {
        return (
            <Container>
                <Header transparent>
                    <Left>
                        <Button transparent onPress={this._goBack}>
                            <Icon name='back' type="AntDesign" style={{ color: "black" }} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Body>
                    <View style={styles.login_container}>
                        <Text style={styles.login_login_text}>Log in</Text>
                        <Item regular style={styles.login_email}>
                            <Input placeholder='jane@example.com' />
                        </Item>
                        <Item regular style={styles.login_password}>
                            <Input placeholder='jane@example.com' secureTextEntry={true}
                                password={true}
                                type='password'
                                placeholder=' ********' />
                        </Item>
                        <View style={styles.login_button_container}>
                            <Button style={styles.login_google}><Text numberOfLines={1} style={{fontSize:13,alignItems:"flex-start",textAlign:"left" }}>LOG IN WITH GOOGLE</Text></Button>
                            <Button style={styles.login_facebook}><Text numberOfLines={2} style={{fontSize:13,width:"100%", borderColor:'green', textAlign:'center'}}>LOG IN WITH FACEBOOK</Text></Button>
                        </View>
                        <Button style={styles.login_next}><Text>LOG IN</Text></Button>
                    </View>
                </Body>
            </Container>
        );
    }
}
export default LoginScreen;