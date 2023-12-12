import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import germanFlag from '../../images/germany.png';
import englishFlag from '../../images/englishFlag.png';
import dutchFlag from '../../images/netherlandsFlag.png';
import americanFlag from '../../images/americanFlag.png';
import { Icon } from '@rneui/themed';

const flags = {'LON': englishFlag, 'BER': germanFlag, 'AMS': dutchFlag, 'PHX': americanFlag};
const icons = {travel: {name: 'airplanemode-active', type: 'material'}, hotel: {name: 'hotel', type: 'material'}};

export default function CalendarSquare({day, date, active, location, icon}) {
  return (
    <View style={{...styles.container, backgroundColor: active ? '#F8F8FF' : 'lightgrey'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>{date}</Text>
      </View>
      <View style={{flex: 1}}>
        <Image source={flags[location]} style={{marginLeft:'auto', marginRight:'auto', height: 25, width: 40, marginTop: 2}} />
      </View>
    </View>
  )
}

styles = StyleSheet.create({
    container: {
        width: '13.8%',
        minHeight: 50,
        padding: 0,
        margin: 0,
        marginVertical: 1,
        borderWidth: 1,
        borderColor: 'lightgrey'
    }
});