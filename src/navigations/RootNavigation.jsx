import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';

const Stack = createStackNavigator();

const Root = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Auth" component={AuthNavigation} />
                <Stack.Screen name="Home" component={HomeNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Root