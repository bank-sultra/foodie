import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';  
import { Text, Input, Button } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";




export default function Login() {
    const {navigate} = useNavigation();

    const handlerLogin = () => {
        navigate('HomeNav');
        console.log('Login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerView}>
                <Text style={styles.titlePage}>Foody </Text> 
                <Input
                    placeholder='Email'
                    placeholderTextColor='black'
                    color='#C7CBCC'
                    style={styles.inputText} 
                    inputContainerStyle={{borderBottomWidth:0}} 
                />

                <Input 
                    placeholder='Email'
                    placeholderTextColor='black'
                    color='#C7CBCC'
                    style={styles.inputText} 
                    inputContainerStyle={{borderBottomWidth:0}} 
                    secureTextEntry={true} 
                />

                <Text style={{marginVertical:20, fontSize:20, color:'#C7CBCC'}}>
                    Forgot Password
                </Text>

                <Button
                    title="LOG IN"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainerStyle}
                    titleStyle={{ fontWeight: 'bold' }}
                    onPress={handlerLogin}
                />

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
    inputText:{
        backgroundColor:'#313842',
        borderRadius:20,
        borderWidth:2, 
        padding:20
    },
    btnStyle:{
        backgroundColor: '#DB731E',
        borderWidth: 2,
        borderColor: '#DB731E', 
        borderRadius: 30,
    },
    btnContainerStyle:{
        width: '90%',
        marginHorizontal: 50,
        marginVertical: 10,
    }

});