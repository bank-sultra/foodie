import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/login';

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default AuthNavigation