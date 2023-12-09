import React from 'react'
import { SafeAreaView, View } from 'react-native'
import Map from '../components/Map/Map'
import useStyles from '../styles';

export default function MapPage() {
  const styles = useStyles();
  return (
    <SafeAreaView style={[styles.rootContainer, {borderWidth:1, borderColor: 'black'}]}>
      <Map />
      <View style={{flex: 1}}>

      </View>
    </SafeAreaView>
  );
};