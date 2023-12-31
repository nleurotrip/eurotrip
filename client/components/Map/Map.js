import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import MapView from 'react-native-maps';

export default function Map() {
    
    const styles = StyleSheet.create({
        container: {
            flex:1 
        },
        map: {
        ...StyleSheet.absoluteFillObject,
        }
    });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 52.50945,
          longitude: 13.43105,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
};