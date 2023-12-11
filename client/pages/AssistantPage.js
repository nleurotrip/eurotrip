
import { Input } from '@rneui/themed';
import React from 'react';
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
} from 'react-native';

const AssistantPage = () => {
  const headerHeight = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={headerHeight}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.messageContainer}>

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
    borderWidth: 1
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