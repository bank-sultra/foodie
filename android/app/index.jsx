import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import SearchBar from '../../components/searchBar'
import ContainerTab from '../../components/containerTab'
import CardFav from '../../components/cardFav'
import firestore from '@react-native-firebase/firestore';
import { useQuery } from 'react-query';

const favMovies = firestore().collection('Movies');
const fetchData = async () => {
  const data = await favMovies.get()
  return data.docs.map((doc) => {
    return {...doc.data(), id: doc.id}
  })
};

export default function Favorite() {
  
  const { data } = useQuery('favMovies',  async () => await fetchData(), {
    refetchOnWindowFocus: false, // Disable caching for this query
  });

  // const [dataLoaded, setDataLoaded] = useState(false);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   if (!dataLoaded) {
  //     fetchData().then((newData) => {
  //       setData(newData);
  //       setDataLoaded(true);
  //     });
  //   }
  // }, [dataLoaded]);

  return (
    <ContainerTab>
      <View style={tw`h-full`}>
        <SearchBar />
        <View style={tw`bg-white my-4 rounded-lg`}>
          <Text style={tw`text-center text-black pt-2 font-bold text-lg`}>Favorite Movies</Text>
          <View style={tw`flex justify-center`}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => (
                <CardFav title={item.title} poster={item.poster} rating={item.rating} />
              )}
            />
          </View>
        </View>
      </View>
    </ContainerTab>
  )
}