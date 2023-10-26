import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });

export default function Maps({route}) { 
  
  const location = route.params;

   return (
    <View style={styles.container}>
        <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
            latitude: location?.latitude ?? -3.988397,
            longitude: location?.longitude ?? 122.511201,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        }}>
          <Marker 
            coordinate={{
              latitude: location?.latitude ?? -3.988397, 
              longitude:location?.longitude ?? 122.511201
            }}

            title='Restaurant' 
            description='Disini Restorannya'> 
            <Image
                source={require('../../../../assets/image/marker.png')}
                style={{width: 100, height: 100}}
                resizeMode="contain"
            />
          </Marker>
        </MapView>
    </View>
   );
};