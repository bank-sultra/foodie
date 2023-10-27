import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
export default function BtnAction({title, onPress}) { 
   return (
        <Button
            title={title}
            buttonStyle={styles.btnStyle}
            containerStyle={styles.btnContainerStyle}
            titleStyle={{ fontWeight: 'bold' }}
            onPress={onPress}
        />
   );
};

const styles = StyleSheet.create({
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
})