import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import useStyles from '../styles'
import { Input } from '@rneui/themed';

export default function AssistantPage() {
  const sharedStyles = useStyles();

  return (
    <SafeAreaView style={sharedStyles.rootContainer}>
      <View style={styles.chatContainer}>
        
      </View>
      <View style={styles.textEntryContainer}>
        <Input placeholder="Enter a new prompt..." />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  chatContainer: {
    flex: 9,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey'
  },
  textEntryContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
  }
});