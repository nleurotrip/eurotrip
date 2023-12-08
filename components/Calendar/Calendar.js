import React from 'react'
import { View, StyleSheet } from 'react-native'
import CalendarSquare from './CalendarSquare';
import calendarData from './itineraryData';
const { weekOne, weekTwo, weekThree } = calendarData;
export default function Calendar() {
  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <View style={styles.rowContainer}>
          { weekOne.map( d => <CalendarSquare key={d.date} day={d.day} date={d.date} active={d.active} location={d.location} /> ) }
        </View>
        <View style={styles.rowContainer}>
          <CalendarSquare />
          <CalendarSquare />
          <CalendarSquare />
          <CalendarSquare />
          <CalendarSquare />
          <CalendarSquare />
          <CalendarSquare />
        </View>
        <View style={styles.rowContainer}>
          <CalendarSquare />
          <CalendarSquare />
          <CalendarSquare />
          <CalendarSquare />
          <CalendarSquare />
          <CalendarSquare />
          <CalendarSquare />
        </View>
      </View>
    </View>
  )

  
};

styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 50,
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    calendarContainer: {
        width: '100%',
        minHeight: 150,
        borderWidth: 1,
        borderColor: 'red'
    },
    rowContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: "space-evenly",
      borderWidth: 1,
      borderColor: 'blue'
    }
});