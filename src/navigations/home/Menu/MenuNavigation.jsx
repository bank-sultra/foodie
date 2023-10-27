import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'; 
import Cart from '../../../screens/home/menu/cart';
import Maps from '../../../screens/maps';
import Menu from '../../../screens/home/menu';

const Stack = createStackNavigator();

const MenuNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Maps" component={Maps} />
        </Stack.Navigator>
    )
}

export default MenuNavigation