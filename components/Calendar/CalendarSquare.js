import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CalendarSquare({day, date, active, location}) {
  return (
    <View style={{...styles.container, backgroundColor: active ? 'white' : 'lightgrey'}}>
      <Text>{date}</Text>
      <Text>{location}</Text>
    </View>
  )
}

styles = StyleSheet.create({
    container: {
        width: 50,
        minHeight: 50,
        padding: 0,
        margin: 0,
        borderWidth: 1,
        borderColor: 'black'
    }
});