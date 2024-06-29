import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Footer from "./Footer";
import * as SecureStore from "expo-secure-store";
import { API_URL } from "@env";

const AllPeople = ({ navigation }) => {
  const [friends, setFriends] = useState([]);

  const handleFriend = async () => {
    try {
      const token = await SecureStore.getItemAsync("authToken");
      const response = await fetch(`${API_URL}/api/getAllFriend`, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch friends: ${response.status}`);
      }

      const responseData = await response.json();
      setFriends(responseData);
    } catch (error) {
      console.error(`Error fetching friends: ${error.message}`);
      // Optionally handle error here, like showing an error message to the user
    }
  };

  useEffect(() => {
    handleFriend(); // Initial call to load friends list
  }, []); // Empty dependency array to run only on mount

  const unfriend = async (friendId) => {
    const token = await SecureStore.getItemAsync("authToken");
    console.log("aa", friendId);
    // Modify the function to accept friendId instead of email
    try {
      const response = await fetch(API_URL + "/api/unfriend", {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ friendId }), // Assuming friendId is the correct key
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch friend requests: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };
  const handleUnfriend = async (friendId) => {
    unfriend(friendId);
  };

const getInforChatItem = async (friendId) => {
  try {
    const token = await SecureStore.getItemAsync("authToken");
    const response = await fetch(`${API_URL}/api/info-chat-item`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(
        `Failed to fetch chat item information: ${response.status}`
      );
    }
    const responseData = await response.json();
    console.log(responseData);

    
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};


  const FriendRequest = () => {
navigation.navigate("FriendRequest");
  };

 const renderFriends = () => {
   return friends.map((user, index) => (
     <TouchableOpacity
       style={styles.user}
       key={index}
       onPress={() => {
               getInforChatItem(user._id); // Call getInforChatItem when user is pressed
       }}
     >
       <View style={styles.profile}>
         <View style={styles.avatar}>
           <Image source={{ uri: user.photoURL || "https://i.imgur.com/rsJjBcH.png" }} style={styles.avatar} />
         </View>
         <View style={{ marginLeft: 20, marginTop: 10 }}>
           <Text style={{ fontSize: 20, fontWeight: "bold" }}>
             {user.displayName}
           </Text>
         </View>
       </View>
       <View style={styles.choose}>
         <TouchableOpacity
           style={styles.accept}
           onPress={() => handleUnfriend(user._id)} // Assuming user._id is the correct ID
         >
           <Text style={{ color: "white" }}>Hủy kết bạn</Text>
         </TouchableOpacity>
       </View>
     </TouchableOpacity>
   ));
 };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, color: "#00AE72", fontWeight: "bold" }}>
            Danh Bạ
          </Text>
        </View>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={FriendRequest} style={styles.touchAddFriend}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/6469/6469169.png",
            }}
            style={{ height: 50, width: 50 }}
          />
          <View style={{ justifyContent: "center", height: 50 }}>
            <Text style={{ fontSize: 23, marginLeft: 10 }}>
              Lời mời kết bạn
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView>{renderFriends()}</ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  choose: {
    width: "30%",
  },
  header: {
    marginTop: 40,
  },
  touchAddFriend: {
    flexDirection: "row",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#00AE72",
    backgroundColor: "#F9F9F9",
    padding: 10,
  },
  profile: {
    flexDirection: "row",
    width: "70%",
  },
  button: {
    width: "50%",
    height: 40,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginTop: -5,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
 
  touchChat: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    padding: 10,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  accept: {
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
    marginTop: 5,
    backgroundColor: "red",
borderRadius: 10,
    marginRight: 10,
  },
  user: {
    padding: 10,
    flexDirection: "row",
    marginTop: 20,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
});

export default AllPeople;