import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../../screens/auth/login';
import Maps from '../../screens/home/menu/maps';

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Maps" component={Maps} />
        </Stack.Navigator>
    )
}

export default AuthNavigation