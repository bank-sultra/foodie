import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Text, Card, Button, Icon, ListItem, Avatar} from '@rneui/themed'
import firestore from '@react-native-firebase/firestore';
import { useQuery } from 'react-query';

const restauranList = firestore().collection('Restaurant');

// const fetchData = async () => {
//   const data = await restauranList.get()
//   return data.docs.map(async (doc) => {
//     const menuList = restauranList.doc(doc.id).collection('menu_list');
//     const menuCollection = await menuList.get();
//     const menuCol = await menuCollection.docs.map((menus) => {
//       return {...menus.data(), id: menus.id}
//     })
//     console.log({...doc.data(), id: doc.id, menu: menuCol})
//     return {...doc.data(), id: doc.id, menu: ""}
//   })
// };

const fetchData = async () => {
  const data = await restauranList.get();
  
  const result = await Promise.all(data.docs.map(async (doc) => {
    const menuList = restauranList.doc(doc.id).collection('menu_list');
    const menuCollection = await menuList.get();
    
    const menuCol = menuCollection.docs.map((menus) => ({
      ...menus.data(),
      id: menus.id
    }));

    return {
      ...doc.data(),
      id: doc.id,
      menu: menuCol
    };
  }));

  return result;
};

export default function Home() {
    const { data } = useQuery('restauranList',  async () => await fetchData());
    
    console.log("data => ", data)

    return (
        <ScrollView>
            <View style={styles.container}>

                {/* <View style={{ marginStart:20, marginTop:10 }}>
                    <Text>Restaurant disekitarmu</Text>
                </View> */}

                <Card>
                <Card.Title>Restaurant disekitarmu</Card.Title>
                <Card.Divider />
                {/* <Card.Divider /> */}

                {data?.map((u, i) => {
                    return (
                        <View key={i} style={styles.user}>
                        <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{ uri: u.images }}
                        />
                        <View style={{flexDirection:'row'}}>
                            <ListItem bottomDivider>
                                <Text style={styles.name_restaurant}>
                                    {u.restaurant_name} 
                                    {"\n"}
                                    {u?.menu?.map((m, j) => {
                                        if(j==0){
                                          return (
                                              <Text key={j} style={styles.name_menus}>{m.name}, </Text>
                                          )
                                        }else{
                                          return (
                                              <Text key={j} style={styles.name_menus}>{m.name} </Text>
                                          )
                                        }
                                    })}
                                </Text>
                            </ListItem>
                        </View>

                    </View>
                    );
                })}
                </Card>

                <TouchableOpacity onPress={() => pushData()}><Text>tesss</Text></TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        // marginTop: 5,
        fontWeight:'bold'
      },
      name_menus: {
        fontSize: 12,
        marginTop: 5,
      },
})