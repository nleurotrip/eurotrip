
import { Input } from '@rneui/themed';
import React, { useState } from 'react';
import { useHeaderHeight } from "@react-navigation/elements";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  ScrollView,
} from 'react-native';

const demoMessages = [
  {
    role: 'system',
    content: 'How can I help?',
    timestamp: '01012023'
  },
  {
    role: 'user',
    content: 'Where can I meet women?',
    timestamp: '01012023'
  },
  {
    role: 'system',
    content: 'At the brothel.',
    timestamp: '01012023'
  },
]

const AssistantPage = () => {
  const headerHeight = useHeaderHeight();
  const [ messages, setMessages ] = useState(demoMessages);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={headerHeight}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.messageContainer}> 
{/* replace with scrollview or flatlist */}
          </View>
          <Input placeholder="Enter a prompt" />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1
  },
  inner: {
    flex: 1,
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'red'
  },
  messageContainer: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 1,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default AssistantPage;