import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'; 
import Home from '../../screens/home';
import History from '../../screens/home/history';
import MenuNavigation from './Menu/MenuNavigation';
import { TouchableOpacity, Text } from 'react-native';

const Stack = createStackNavigator();

const HomeNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} 
                options={({navigation}) => ({
                    headerRight: () => ( <TouchableOpacity onPress={() => navigation.navigate('History')}  style={{ alignItems:'center' , backgroundColor:'#008CBA', padding:10, borderRadius:5}}><Text style={{ color:'white' }}>History</Text></TouchableOpacity>), 
                    headerRightContainerStyle:{marginEnd:20}
                })}
            />
            <Stack.Screen name="MenuNav" component={MenuNavigation} />
            <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
    )
}

export default HomeNavigation