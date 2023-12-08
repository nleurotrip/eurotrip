import { Avatar } from '@rneui/themed';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const ItineraryPage = () => {
    return (
        <SafeAreaView>
            <Text>Itinerary coming soon!</Text>
            <Avatar 
                size={40}
                rounded
                title="NL"
                containerStyle={{backgroundColor: 'blue'}}
            />
        </SafeAreaView>
    );
};

export default ItineraryPage;