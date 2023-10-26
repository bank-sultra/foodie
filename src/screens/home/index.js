import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Text, Card, Button, Icon, ListItem, Avatar} from '@rneui/themed'

const users = [
    {
      name_restaurant: 'Kampung Bakau',
      list_menus: 'Ikan bakar, Sea Food',
      avatar: 'https://sultrademo.co/wp-content/uploads/2019/11/IMG_20191117_214931.jpg',
    },
    {
      name_restaurant: 'Restaurant Fajar',
      list_menus:'Stik, fried rice',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFLMYnVVOD6hJp_Yxgm7r4F-QvLbnggSC-oL7AVDwF3yMSagBkZdB0yxQbDFQ5Uks3KKM&usqp=CAU',
    },
];

export default function Home() {
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
                {users.map((u, i) => {
                    return (
                        <View key={i} style={styles.user}>
                        <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{ uri: u.avatar }}
                        />
                        <View style={{flexDirection:'row'}}>
                            <ListItem bottomDivider>
                                <Text style={styles.name_restaurant}>
                                    {u.name_restaurant} 
                                    {"\n"}
                                    <Text style={styles.name_menus}>{u.list_menus} </Text>
                                </Text>
                            </ListItem>
                        </View>

                    </View>
                    );
                })}
                </Card>

                {/* <TouchableOpacity><Text>tesss</Text></TouchableOpacity> */}
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