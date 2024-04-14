import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import HeaderIndex from "./HeaderIndex";
import Footer from "./Footer";
import OnlineChat from "./OnlineChat";
import * as SecureStore from 'expo-secure-store';
import {API_URL} from '@env';

const Index = ({ navigation }) => {
  
  const indexImgs = [
    "https://top10binhphuoc.vn/wp-content/uploads/2022/10/avatar-gau-cute-1.jpg",
    "https://anhdephd.vn/wp-content/uploads/2022/04/avatar-gau-1.jpg",
    "https://top10binhphuoc.vn/wp-content/uploads/2022/10/avatar-gau-cute-2.jpg",
    "https://i.pinimg.com/736x/bd/8b/23/bd8b235016ce956a9c84b2638b7ba975.jpg",
    "https://i.pinimg.com/originals/c6/2e/0d/c62e0d3e9a34c74e84a0f7f952ce3695.jpg",
    "https://i.pinimg.com/236x/db/8d/48/db8d4877d92d07b4028d19f4c367ab50.jpg",
  ];

  const names = [
    "Kiều Dương",
    "Huỳnh Thắng",
    "Tú Uyên",
    "Hoàng Bảo",
    "Văn Bảo",
    "Thiên Bâng",
    "Nguyễn Văn An",
    "Trần Minh Đức",
    "Lê Thành Long",
    "Phạm Quang Huy",
    "Hoàng Văn Nam",
    "Đặng Tuấn Anh",
    "Ngô Đình Quân",
    "Vũ Hoàng Nam",
    "Nguyễn Đình Hòa",
    "Trần Văn Bình",
  ];

  const generateUserNames = () => {
    return names.map((name) => name);
  };

  const userNames = generateUserNames();
  const OnlineChat = (idChatRoom) => {
    navigation.navigate("OnlineChat", idChatRoom);
  };
const [userInfo, setUserInfo] = useState([]);
useEffect(async () => {
  const token = await SecureStore.getItemAsync('authToken');
    fetch(API_URL+"/api/info-chat-item/", {
      headers: {
        'Authorization': token
      }
    }).then((response) => response.json()).then((res) => {
      setUserInfo(res.data);
    });
}, []);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderIndex navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={true}>
        {userInfo.map((user, index) => (
          <TouchableOpacity
            onPress={() => OnlineChat(user.idChatRoom)}
            key={index}
            style={styles.touchChat}
          >
            <Image
              source={{uri: user.photoURL? user.photoURL: "https://i.imgur.com/rsJjBcH.png"}}
              style={styles.avatar}
            />
            <View style={styles.chatContainer}>
              <View>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.chatContent}>{user.lastMessage.text}</Text>
              </View>
              <View style={styles.timeContainer}>
                <Text>{user.lastMessage.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 360,
  },
  touchChat: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 10,
    height: 70,
  },
  chatContainer: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  chatContent: {
    marginTop: 5,
    color: "gray",
    fontSize: 16,
  },
  timeContainer: {
    alignItems: "flex-end",
    marginRight: 20,
  },
});

export default Index;
