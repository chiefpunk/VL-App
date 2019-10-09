import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, View, Input, Item, TextInput } from 'native-base';
import styles, { colors } from '../CustomStyle';

class RegisterScreen extends Component {

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
                    <View style={styles.register_container}>
                        <Text style={styles.register_register_text}>Register</Text>
                        <Item regular style={styles.register_email}>
                            <Input placeholder='jane@example.com' />
                        </Item>
                        <Item regular style={styles.register_password}>
                            <Input placeholder='jane@example.com' secureTextEntry={true}		  
					            		password={true}          		
								        type='password'
								        placeholder=' ********'/>
                        </Item>
                        <Button style={styles.register_next} onPress={() => {this.props.navigation.navigate('RegisterName')}}><Text>NEXT</Text></Button>
                    </View>
                </Body>
            </Container>
        );
    }
}
export default RegisterScreen;