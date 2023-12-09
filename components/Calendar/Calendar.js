import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CalendarSquare from './CalendarSquare';
import calendarData from './itineraryData';
const { weekOne, weekTwo, weekThree } = calendarData;
export default function Calendar() {
  return (
    <View style={styles.container}>
      <Text style={{marginLeft: 'auto', marginRight: 'auto', marginVertical: 5}}>December</Text>
      <View style={styles.calendarContainer}>
        <View style={styles.rowContainer}>
          { weekOne.map( d => <CalendarSquare key={d.date} day={d.day} date={d.date} active={d.active} location={d.location} icon={d.icon} /> ) }
        </View>
        <View style={styles.rowContainer}>
          { weekTwo.map( d => <CalendarSquare key={d.date} day={d.day} date={d.date} active={d.active} location={d.location} icon={d.icon} /> ) }
        </View>
        <View style={styles.rowContainer}>
          { weekThree.map( d => <CalendarSquare key={d.date} day={d.day} date={d.date} active={d.active} location={d.location} icon={d.icon} /> ) }
        </View>
      </View>
    </View>
  )

  
};

styles = StyleSheet.create({
    container: {
      width: '95%',
      marginLeft:'auto',
      marginRight: 'auto',
      marginVertical: 10,
      // borderWidth: 1,
      // borderColor: 'lightgrey',
      borderRadius: 5,
      backgroundColor: 'white',
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    calendarContainer: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: 5
    },
    rowContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: "space-evenly",
      // borderWidth: 1,
      // borderColor: 'blue'
    }
});