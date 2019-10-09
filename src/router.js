import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromRight } from 'react-navigation-transitions';

import WelcomeScreen from './welcome';
import RegisterScreen from './Auth/Register';
import RegisterNameScreen from './Auth/RegisterName';
import LoginScreen from './Auth/Login';
import HomeScreen from './MainScreen/Home';
import MessageScreen from './MainScreen/Message';
import AlertScreen from './MainScreen/Alert';
import FlagScreen from './MainScreen/Flag';
import LdlScreen from './MainScreen/Ldl';
import FlagremoveScreen from './MainScreen/Flagremove';
import LocationScreen from './MainScreen/Location';
import PanicScreen from './MainScreen/Panic';

const InitialNavigator = createStackNavigator({
    Welcome: { screen: WelcomeScreen },
    Register: { screen: RegisterScreen },
    RegisterName: { screen: RegisterNameScreen },
    Login: { screen: LoginScreen },
    Home: {screen:HomeScreen},
    Message : { screen:MessageScreen },
    Alert : {screen:AlertScreen},
    Flag : {screen:FlagScreen},
    Ldl : {screen:LdlScreen},
    Flagremove: {screen:FlagremoveScreen},
    Location: {screen:LocationScreen},
    Panic:{screen:PanicScreen}

}, {
    headerMode: 'none',
    initialRouteName: 'Login',
    transitionConfig: () => fromRight(),
});

export default createAppContainer(InitialNavigator);