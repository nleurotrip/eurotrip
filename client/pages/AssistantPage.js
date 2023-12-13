
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
  FlatList,
  Alert
} from 'react-native';
import MessageBubble from '../components/MessageBubble/MessageBubble';


const AssistantPage = () => {
  const headerHeight = useHeaderHeight();
  const [ currentMessage, setCurrentMessage ] = useState("");
  const [ messages, setMessages ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    let getMessages = async () => {
      let messageResp = await axios.get('http://localhost:3000/messages/list');
      setMessages(messageResp.data);
    }
    getMessages()
    .catch(e => {Alert.alert("Cannot connect to server ):")});
  }, []);

  useEffect(() => {
    console.log('loading: ', loading);
    if(loading) {
      //add loading bubble
      setMessages(prevMessages => [{role: 'loading', content: ''}, ...prevMessages]);
    } else {
      //remove loading bubble
      let messagesCopy = JSON.parse(JSON.stringify(messages));
      let newMessages = messagesCopy.filter(m => m.role!=='loading')
      setMessages(prevMessages => prevMessages.filter(m => m.role!=='loading'));
      return;
    }
  }, [loading])

  const handleSend = () => {
    return new Promise(res => {
      setMessages([{role: 'user', content: currentMessage, createdAt: new Date().toTimeString()}, ...messages]);
      res();
    })
      .then(() => {
        setLoading(true);
        return;
      })
      .then(() => {
        setCurrentMessage('');
        return;
      })
      .then(() => {
        return axios.post('http://localhost:3000/messages/send', {
          content: currentMessage
        })
      })
      .then(resp => {
        setMessages(prevMessages => [resp.data.received, ...prevMessages]);
        return;
      })
      .then(() => {
        setLoading(false);
        return;
      })
      .catch(e => Alert.alert(e.message));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={headerHeight}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.messageContainer}> 
            {messages.length > 0 && <FlatList
              data={messages}
              renderItem={({item}) => <MessageBubble content={item.content} role={item.role} />}
              keyExtractor={item => Math.random()}
              style={{width: '100%'}}
              inverted={true}
            />}
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
    justifyContent: 'flex-start',
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