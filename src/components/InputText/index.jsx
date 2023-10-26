import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from '@rneui/themed';
export default function InputText({placeholder, value, onChangeText, secureTextEntry=false}) {
    

   return (
    <Input
        placeholder={placeholder}
        placeholderTextColor='black'
        color='#C7CBCC'
        style={styles.inputText} 
        inputContainerStyle={styles.inputContainerStyle} 
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
    />
   );
};

const styles = StyleSheet.create({
    inputText:{
        backgroundColor:'#313842',
        borderRadius:20,
        borderWidth:2, 
        padding:20
    },
    inputContainerStyle:{
        borderBottomWidth:0,
    }
    
});