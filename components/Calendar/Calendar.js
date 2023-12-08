import React from 'react'
import { View, StyleSheet } from 'react-native'
import CalendarSquare from './CalendarSquare';
import calendarData from './itineraryData';
const { weekOne, weekTwo, weekThree } = calendarData;
export default function Calendar() {
  return (
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
  )

  
};

styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 50,
        marginVertical: 10,
    },
    calendarContainer: {
        width: '95%',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 5,
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