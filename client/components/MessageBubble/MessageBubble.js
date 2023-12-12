import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Chip } from '@rneui/themed';

export default function MessageBubble({content, role}) {
  console.log('CONTENT', content);
  return (
    <View style={styles.messageLine}>
      <Chip 
        title={content} 
        buttonStyle={role === 'user' ? styles.userChip : styles.systemChip} 
        titleStyle={role==='user' ? {color: 'white'} : {color: 'black'}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    messageLine: {
        width: '100%',
        minHeight: 15,
        maxHeight: 200,
        margin: 0,
        padding: 5,
    },
    userChip: {
      minWidth: 20,
      maxWidth: '70%',
      marginRight: 0,
      marginLeft: 'auto',
      marginVertical: 5,
      backgroundColor: 'blue',
      color: 'white'
    },
    systemChip: {
      minWidth: 20,
      maxWidth: '70%',
      marginLeft: 0,
      marginRight: 'auto',
      marginVertical: 5,
      backgroundColor: 'white',
      color: 'black'
    }
});