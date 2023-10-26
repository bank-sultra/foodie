import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AuthNavigation from './auth/AuthNavigation';
import HomeNavigation from './home/HomeNavigation';

const Stack = createStackNavigator();

const Root = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeNav" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AuthNav" component={AuthNavigation} />
                <Stack.Screen name="HomeNav" component={HomeNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Root