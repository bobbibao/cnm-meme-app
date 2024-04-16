import React, {useEffect, useState, useRef} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import AllPeople from "./AllPeople";
import Index from "./Index";
import * as SecureStore from 'expo-secure-store';
import {API_URL} from '@env';
import { KeyboardAvoidingView, Platform } from 'react-native';


const OnlineChat = ({navigation, route}) => {
  const id = route.params.idChatRoom;
  const socket = route.params.socket;
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const scrollViewRef = useRef();
  useEffect(() => {
    const fetchData = async () => {
      // console.log(API_URL);
      const token = await SecureStore.getItemAsync('authToken');
      try {
        const response = await fetch(API_URL+`/api/messages/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': token,
          },
        });
        const res = await response.json();
        setMessages(res.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
  
    fetchData();
  }, []);
  const handleSubmit = async () => {
    const token = await SecureStore.getItemAsync('authToken');
    const data = {
      chatRoomId: id,
      senderId: `"${await SecureStore.getItemAsync('userId')}"`,
      content: message,
      type: 'text',
    }
    const response = await fetch(API_URL+`/api/messages/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify({data: data}),
    });
    const res = await response.json();
    socket.emit("message", data, res.data._id);
    setMessage('');
  };
  socket.on("message", async (message) => {
    const newMessage = {
      id: message.id,
      content: message.content,
      sent: message.senderId === await SecureStore.getItemAsync('userId'),
      time: message.time,
      type: message.type,
      media: message.media,
      receiverPhoto: messages[0].receiverPhoto
    }
    // console.log(newMessage);
    setMessages([...messages, newMessage]);
  });

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}>
      <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/back.png")}
            style={styles.backButton}
          />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Text style={styles.username}>Kiều Dương</Text>
          <Text style={styles.lastSeen}>Truy cập 2 phút trước</Text>
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity>
            <Image
              source={require("../assets/phone.png")}
              style={{ height: 30, width: 30, marginRight: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/videocall.png")}
              style={{ marginTop: 2, marginRight: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/menu.png")} style={{}} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        ref={scrollViewRef} 
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        contentContainerStyle={{paddingHorizontal: '1%'}}>

      {messages && messages.map((message, index) => (
        <SafeAreaView key={index} style={{display: 'flex', flexDirection: 'row', justifyContent: `${message.sent? 'flex-end': 'flex-start'}`, width: "100%", marginVertical: '1%'}}>
          <SafeAreaView style={{width: 'auto', height: "auto"}}>
            <SafeAreaView style={{display: 'flex', flexDirection: 'row'}}>
              {!message.sent && (
                <Image
                  source={{
                    // uri: "https://bizweb.dktcdn.net/100/438/408/files/anh-cho-meme-yody-vn9.jpg?v=1687918771459",
                    uri: message.receiverPhoto? message.receiverPhoto: "https://i.imgur.com/rsJjBcH.png"
                  }}
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 360,
                    marginRight: "2%"
                  }}
              />)}
              <SafeAreaView
                style={{
                  backgroundColor: "#76E3BD",
                  width: 'auto',
                  borderRadius: 5,
                  paddingHorizontal: 8,
                  paddingVertical: 8,
                }}>
                  {message.type === "image" ? 
                    <Image
                      source={{ uri: message.media.url }}
                      style={{width: 200, aspectRatio: 1, maxHeight: 300, borderRadius: 5, }}/> :
                    <Text style={{ fontSize: 18, textAlign: "left" }}>
                      {message.content.length < 5 
                        ? message.content + ' '.repeat(10 - message.content.length) 
                        : message.content}
                    </Text>
                  }
                    <Text style={{paddingTop:5}}>
                      {message.time}
                    </Text>
              </SafeAreaView>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
          
      ))}
      </ScrollView>

      <View style={{ backgroundColor: "#fff", padding: 11, flexDirection: "row" }}>
        <View style={{ width: "80%" }}>
          <TextInput
            placeholder="Tin nhắn"
            style={{ fontSize: 20 }}
            value={message}
            onChangeText={text => setMessage(text)}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "20%",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          {!message?
          <><TouchableOpacity>
            <Image
              source={require("../assets/micro.png")}
              style={{ marginTop: 5, marginRight: 20, height: 25, width: 17 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/image.png")}
               style={{ marginTop: 5, marginRight: 20, height: 25, width: 35 }}
            />
          </TouchableOpacity></>
          :<TouchableOpacity onPress={handleSubmit}>
            <Text style={{fontSize: 20}}>
              Send
            </Text>
          </TouchableOpacity>
          }
        </View>
      </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#F1FFFA",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#00AE72",
    padding: 10,
    paddingTop: 20,
    alignItems: "center",
    marginTop: -20,
  },
  backButton: {
    width: 30,
    height: 30,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  username: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#ffff",
  },
  lastSeen: {
    color: "#ffff",
  },
  actionButtons: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

export default OnlineChat;
