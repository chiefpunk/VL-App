import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, View, Input, Item, TextInput } from 'native-base';
import styles, { colors } from '../CustomStyle';

class RegisterNameScreen extends Component {

    _goBack = () => { this.props.navigation.navigate('Register') }
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
                    <View style={styles.register_container}>
                        <Text style={styles.register_register_text}>Register</Text>
                        <Item regular style={styles.register_email}>
                            <Input placeholder='the_jane' />
                        </Item>
                        
                        <Button style={styles.register_next}><Text>SIGN UP</Text></Button>
                        <Text style={styles.policy_text}>By signing up, you agree to Photo’s Terms of Service and Privacy Policy.</Text>
                    </View>
                </Body>
            </Container>
        );
    }
}
export default RegisterNameScreen;