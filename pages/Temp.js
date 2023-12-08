import React from 'react';
import { useTheme } from '@rneui/themed';
import { SafeAreaView, Text } from 'react-native';
import useStyles from '../styles';

const TempPage = () => {
    const styles = useStyles();
    return (
        <SafeAreaView style={styles.root}>
            <Text>Temp</Text>
        </SafeAreaView>
    );
};

export default TempPage;