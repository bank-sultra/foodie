import { StyleSheet, View, ScrollView, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {Text, Card, Button, Icon, ListItem, Avatar} from '@rneui/themed'

const users = [
  {
    name_restaurant: 'Kampung Bakau',
    date:'11 Januari 2023',
    list_menus: 'Ikan bakar, Sea Food',
    total_price:'250.000',
    avatar: 'https://sultrademo.co/wp-content/uploads/2019/11/IMG_20191117_214931.jpg',
  },
  {
    name_restaurant: 'Kampung Bakau',
    date:'11 Januari 2023',
    list_menus: 'Ikan bakar, Sea Food',
    total_price:'250.000',
    avatar: 'https://sultrademo.co/wp-content/uploads/2019/11/IMG_20191117_214931.jpg',
  },
  {
    name_restaurant: 'Restaurant Fajar',
    date:'11 Januari 2023',
    list_menus:'Stik, fried rice',
    total_price:'250.000',
    avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFLMYnVVOD6hJp_Yxgm7r4F-QvLbnggSC-oL7AVDwF3yMSagBkZdB0yxQbDFQ5Uks3KKM&usqp=CAU',
  },
];

export default function History() {
  return (
    <ScrollView>
        <View style={styles.container}>
            <Card>
            {users.map((u, i) => {
                return (
                    <View key={i} style={styles.user}>
                    <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                    />
                    <View style={{ width:200}}>
                        <Text style={styles.name_restaurant}>{u.name_restaurant}</Text>
                        <Text style={styles.date}>{u.date} </Text>
                        <Text style={styles.menus}>{u.list_menus} </Text>
                        <Text style={styles.price}>{u.total_price} </Text>
                    </View>

                </View>
                );
            })}
            </Card>
        </View>
        <View style={{
          right: 10,
          left: 10,
          position: 'absolute',
          bottom: 0,}}>

          <TouchableOpacity style={{ alignItems:'center' , backgroundColor:'#E67E22', padding:10, borderRadius:20}}>
            <Text style={{ color:'white' }}>Order</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginBottom:50,
    },
    image: {
      width: 150,
      height: 120,
      marginRight: 15,
    },
    user: {
      flexDirection: 'row',
      marginBottom: 30,
    },
    name_restaurant: {
      fontSize: 16,
      fontWeight:'bold',
      marginBottom:5,
    },
    date: {
      fontSize: 12,
      marginBottom:5
    },
    menus: {
      fontSize: 10,
      marginBottom:5
    },
    price: {
      fontSize: 12,
      fontWeight:'bold'
    },
})