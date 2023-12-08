import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { ListItem, Icon } from '@rneui/themed'

const flightList = [
    {
        from: 'PHX',
        to: 'Berlin',
        layover: 'London Heathrow',
        time: '8:30 PM',
        date: '12/21/23'
    },
    {
        from: 'Berlin',
        to: 'Amsterdam',
        layover: null,
        time: 'IDK',
        date: '12/25/23'
    },
    {
        from: 'Amsterdam',
        to: 'London',
        layover: null,
        time: 'IDK',
        date: '12/28/23'
    },
    {
        from: 'London',
        to: 'Phoenix',
        layover: null,
        time: 'IDK',
        date: '1/1/24'
    }
]
export default function ItineraryAccordion() {
    const [ flightsExanded, toggleFlightsExpanded ] = useState(false);
  return (
    <View>
        <ListItem.Accordion
            content={
                <ListItem.Content>
                  <ListItem.Title>Flights</ListItem.Title>
                  <ListItem.Subtitle>Tap to expand</ListItem.Subtitle>
                </ListItem.Content>
              }
              isExpanded={flightsExanded}
              onPress={() => {
                toggleFlightsExpanded(!flightsExanded);
              }}
              icon={<Icon name={'chevron-down'} type="material-community" />}
        >
            {flightList.map((l, i) => (
                <ListItem key={i} onPress={() => {Alert.alert('pressed')}} bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>{l.from} to {l.to}</ListItem.Title>
                    <ListItem.Subtitle>{l.date}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
                </ListItem>
            ))}
        </ListItem.Accordion>
    </View>
  )
};