import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'; 
import Home from '../../screens/home';
import History from '../../screens/home/history';
import MenuNavigation from './Menu/MenuNavigation';

const Stack = createStackNavigator();

const HomeNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MenuNav" component={MenuNavigation} />
            <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
    )
}

export default HomeNavigation