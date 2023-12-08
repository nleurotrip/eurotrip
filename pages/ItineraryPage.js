import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import useStyles from '../styles';

import Calendar from '../components/Calendar/Calendar';

const ItineraryPage = () => {
    const styles = useStyles();
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View>
                <Calendar />
            </View>
            <View>
                {/* <Accordion></Accordion> */}
            </View>
        </SafeAreaView>
    );
};

export default ItineraryPage;