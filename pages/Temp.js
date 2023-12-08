import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import useStyles from '../styles';

const TempPage = () => {
    const styles = useStyles();
    return (
        <SafeAreaView style={styles.rootContainer}>
            <Text>Temp</Text>
        </SafeAreaView>
    );
};

export default TempPage;