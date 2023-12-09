import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import useStyles from '../styles';

import Calendar from '../components/Calendar/Calendar';
import ItineraryAccordion from '../components/ItineraryAccordion/ItineraryAccordion';

const ItineraryPage = () => {
    const styles = useStyles();
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View>
                <Calendar />
            </View>
            <View>
                <ItineraryAccordion />
            </View>
        </SafeAreaView>
    );
};

export default ItineraryPage;