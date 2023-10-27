import { Text, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';  
// import { Text, Input, Button } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";
import InputText from '../../../components/InputText';
import BtnAction from '../../../components/BtnAction';




export default function Login() {
    const {navigate} = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerLogin = () => {
        navigate('HomeNav');
        console.log('Login');
    }
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerView}>
                <Text style={styles.titlePage}>Foody </Text> 
                
                <InputText placeholder='Email' value={email} onChangeText={setEmail} />
                <InputText placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry={true}/>
                
                <Text style={styles.text}>
                    Forgot Password
                </Text>

                <BtnAction title="LOG IN" onPress={handlerLogin} />

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1, 
        justifyContent:'center', 
        backgroundColor:"#23262B"
    },
    containerView:{
        alignItems:'center', 
        marginHorizontal:40, 
        marginVertical:10
    },
    titlePage:{
        fontSize:50, 
        color:'#DC721E', 
        fontWeight:'bold', 
        marginBottom:40,
    },
    text:{
        marginVertical:20, 
        fontSize:20, 
        color:'#C7CBCC',
    },
});