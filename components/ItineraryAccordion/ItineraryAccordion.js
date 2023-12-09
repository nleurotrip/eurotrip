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
const hotelList = [
    {
        city: 'Berlin',
        country: 'Germany',
        address: '123 idk st.',
        zipcode: '12345',
        phoneNumber: '+123 456 7890 1234',
        url: 'www.example.com',
        checkInDate: '12/22/23',
        checkOutDate: '12/25/23'
    },
    {
        city: 'Amsterdam',
        country: 'Netherlands',
        address: '123 idk st.',
        zipcode: '12345',
        phoneNumber: '+123 456 7890 1234',
        url: 'www.example.com',
        checkInDate: '12/25/23',
        checkOutDate: '12/28/23'
    },
    {
        city: 'London',
        country: 'England',
        address: '123 idk st.',
        zipcode: '12345',
        phoneNumber: '+123 456 7890 1234',
        url: 'www.example.com',
        checkInDate: '12/28/23',
        checkOutDate:'1/1/24'
    },
]
export default function ItineraryAccordion() {
    const [ flightsExanded, toggleFlightsExpanded ] = useState(false);
    const [ hotelsExpanded, toggleHotelsExpanded ] = useState(false);
  return (
    <View style={{marginVertical: 10, borderWidth: 1, borderColor: 'lightgrey'}}>
        <ListItem.Accordion bottomDivider
            content={
                <ListItem.Content>
                  <ListItem.Title style={{fontWeight: 'bold'}}>Flights</ListItem.Title>
                  <ListItem.Subtitle>Tap to expand</ListItem.Subtitle>
                </ListItem.Content>
              }
              isExpanded={flightsExanded}
              onPress={() => {
                toggleHotelsExpanded(false);
                toggleFlightsExpanded(!flightsExanded);
              }}
              icon={<Icon name={'chevron-down'} type="material-community" />}
        >
            {flightList.map((l, i) => (
                <ListItem key={i} onPress={() => {Alert.alert('pressed')}} bottomDivider>
                    <Icon name="airplane-ticket" type="ion-icons" color="grey" />
                <ListItem.Content>
                    <ListItem.Title>{l.from} to {l.to}</ListItem.Title>
                    <ListItem.Subtitle>{l.date}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
                </ListItem>
            ))}
        </ListItem.Accordion>
        <ListItem.Accordion bottomDivider
            content={
                <ListItem.Content>
                  <ListItem.Title style={{fontWeight: 'bold'}}>Hotels</ListItem.Title>
                  <ListItem.Subtitle>Tap to expand</ListItem.Subtitle>
                </ListItem.Content>
              }
              isExpanded={hotelsExpanded}
              onPress={() => {
                toggleFlightsExpanded(false);
                toggleHotelsExpanded(!hotelsExpanded);
              }}
              icon={<Icon name={'chevron-down'} type="material-community" />}
        >
            {hotelList.map((l, i) => (
                <ListItem key={i} onPress={() => {Alert.alert('pressed')}} bottomDivider>
                <Icon name="hotel" type="material" color="grey" />
                <ListItem.Content>
                    <ListItem.Title>{l.city}, {l.country}</ListItem.Title>
                    <ListItem.Subtitle>{l.checkInDate} - {l.checkOutDate}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
                </ListItem>
            ))}
        </ListItem.Accordion>
    </View>
  )
};