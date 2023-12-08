import { Avatar } from '@rneui/themed';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import useStyles from '../styles';

const ItineraryPage = () => {
    const styles = useStyles();
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View>
                <Text style={{...styles.typography.header, color:'black'}}>Itinerary</Text>
            </View>
            <View>
                {/* <Calendar /> */}
            </View>
            <View>
                {/* <Accordion></Accordion> */}
            </View>
        </SafeAreaView>
    );
};

export default ItineraryPage;