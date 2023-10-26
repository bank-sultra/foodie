import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'; 
import Home from '../screens/home';

const Stack = createStackNavigator();

const HomeNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default HomeNavigation