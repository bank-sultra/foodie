import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Text, Card} from '@rneui/themed'
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

export default function Home({navigation}) {
    const { data } = useQuery('restauranList',  async () => await fetchData());
    console.log("data => ", data)
    return (
        <ScrollView>
            <View style={styles.container}>
                <Card>
                <Card.Title>Restaurant disekitarmu</Card.Title>
                <Card.Divider />
                {data?.map((u, i) => {
                    return (
                      <View key={i} style={styles.user}>
                        <TouchableOpacity onPress={() => navigation.navigate('Menu')} >
                          <Image
                          style={styles.image}
                          resizeMode="cover"
                          source={{ uri: u.images }}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Menu')} >
                          {/* <View style={{flexDirection:'row'}}> */}
                              {/* <ListItem bottomDivider> */}
                                <View>
                                    <Text style={styles.name_restaurant}>{u.restaurant_name} </Text>
                                      {u?.menu?.map((m, j) => {
                                          return(
                                            <Text key={j} style={styles.name_menus}>{(j==0) ? m.name + ',' : m.name}</Text>
                                          )
                                      })}
                                </View>
                              {/* </ListItem> */}
                          {/* </View> */}
                        </TouchableOpacity>
                      </View>
                    );
                })}
                </Card>

                {/* <TouchableOpacity onPress={() => pushData()}><Text>tesss</Text></TouchableOpacity> */}
            </View>
            <View style={{
              right: 10,
              left: 10,
              position: 'absolute',
              bottom: 0,}}>
              <TouchableOpacity style={{ backgroundColor:'#E67E22', padding:5, borderRadius:20}}>
                <Text style={{ color:'white', paddingStart:10 }}>1 Item (s)</Text>
                <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                  <Text style={{ color:'white', paddingStart:10 }}>Delivery from Lorem Ipsum Dolor</Text>
                  <Text style={{ color:'white', paddingEnd:10}}> 10.000 </Text>
                </View>
              </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:60
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
})