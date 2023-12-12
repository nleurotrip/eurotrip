
import { Icon, Input } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
import MessageBubble from '../components/MessageBubble/MessageBubble';

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
  const [ currentMessage, setCurrentMessage ] = useState("");
  const [ messages, setMessages ] = useState([]);

  useEffect(() => {
    let getMessages = async () => {
      let messageResp = await axios.get('http://localhost:3000/messages/list');
      setMessages(messageResp.data);
    }
    getMessages();
  }, []);

  const handleSend = () => {
    setMessages([...messages, {role: 'user', content: currentMessage, timestamp: new Date()}]);
    setCurrentMessage('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={headerHeight}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.messageContainer}> 
{/* replace with scrollview or flatlist */}
            {messages.map( (m, i) => <MessageBubble key={i} content={m.content} role={m.role} />)}
          </View>
          <Input 
            placeholder="Enter a prompt" 
            value={currentMessage}
            onChangeText={val => setCurrentMessage(val)} 
            rightIcon={<Icon type='material-community' name="send-circle-outline" onPress={handleSend}/>}
            onSubmitEditing={handleSend}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    flex: 1,
    justifyContent: 'space-around',
  },
  messageContainer: {
    flex: 1,
    padding: 5,
    flexDirection: 'column',
    flexWrap: 'wrap',
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