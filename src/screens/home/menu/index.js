import { View,ScrollView,StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {Text, Card} from '@rneui/themed'

const items = [
    {
      name_menu: 'Es Teh',
      price: '16.000',
      avatar: 'https://sultrademo.co/wp-content/uploads/2019/11/IMG_20191117_214931.jpg',
    },
    {
      name_menu: 'Ayam Bakar',
      price:'50.000',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFLMYnVVOD6hJp_Yxgm7r4F-QvLbnggSC-oL7AVDwF3yMSagBkZdB0yxQbDFQ5Uks3KKM&usqp=CAU',
    },
  ];

export default function Menu({navigation}) {
  return (
    <ScrollView>
        <View style={styles.container}>
            <Card>
                <View style={styles.user}>
                        <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{ uri: 'https://sultrademo.co/wp-content/uploads/2019/11/IMG_20191117_214931.jpg' }}
                        />
                        <View>
                            <Text style={styles.name_restaurant}>Besak</Text>
                            <Text style={styles.name_menus}>Bebek Goreng, Bebek Bakar</Text>
                        </View>
                </View>
            </Card>
        </View>

        <View style={{
            right: 10,
            left: 0,
            alignItems:'center',
            // position: 'absolute',
            bottom: 0,}}>
            <TouchableOpacity style={{ backgroundColor:'#E67E22', padding:10, borderRadius:20, alignItems:'center', width:350}}>
                <Text style={{ color:'white'}}>See Map</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.container}>
            <Card>
            {items.map((u, i) => {
                return (
                    <View key={i} style={styles.items}>
                    <View style={{ width:200}}>
                        <Text style={styles.name_menu}>{u.name_menu}</Text>
                        <Text style={styles.price}>{u.price} </Text>
                    </View>
                    <View>
                        <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{ uri: u.avatar }}
                        />
                        <View style={{ marginTop:10, flexDirection:'row', justifyContent:'space-around' }}>
                            <TouchableOpacity style={{ alignItems:'center' , backgroundColor:'#E67E22', padding:2, borderRadius:30, width:23}}><Text>-</Text></TouchableOpacity>  
                            <Text>1</Text>
                            <TouchableOpacity style={{ alignItems:'center' , backgroundColor:'#E67E22', padding:2, borderRadius:30, width:23}}><Text>+</Text></TouchableOpacity>  
                        </View>
                    </View>
                    </View>
                );
            })}
            </Card>
        </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:10
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
        fontWeight:'bold'
      },
      name_menus: {
        fontSize: 12,
        marginTop: 5,
      },
      items: {
        flexDirection: 'row',
        marginBottom: 30,
        justifyContent:'space-between'
      },
})