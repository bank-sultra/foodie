import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'; 
import Cart from '../../../screens/home/menu/cart';
import Maps from '../../../screens/home/menu/maps';

const Stack = createStackNavigator();

const MenuNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Cart">
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Maps" component={Maps} />
        </Stack.Navigator>
    )
}

export default MenuNavigation