import React from "react";
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

const OnlineChat = ({ navigation }) => {
  return (
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

      <ScrollView contentContainerStyle={{ flex: 1 }} inverted>
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginRight: 5,
            marginBottom: 5,
            marginLeft: 5,
          }}
        >
          <SafeAreaView style={{ flexDirection: "row" }}>
            <Image
              source={{
                uri: "https://bizweb.dktcdn.net/100/438/408/files/anh-cho-meme-yody-vn9.jpg?v=1687918771459",
              }}
              style={{
                height: 30,
                width: 30,
                borderRadius: 360,
                marginRight: 10,
              }}
            />
            <SafeAreaView
              style={{
                backgroundColor: "#76E3BD",
                width: 60,
                borderRadius: 10,
                marginBottom: 20,
                marginRight: 300,
              }}
            >
              <SafeAreaView>
                <Text style={{ fontSize: 18, textAlign: "center", padding: 3 }}>
                  Hello
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    color: "#E7E7E7",
                    marginLeft: 10,
                  }}
                >
                  20:58
                </Text>
              </SafeAreaView>
            </SafeAreaView>
          </SafeAreaView>
          <SafeAreaView
            style={{ backgroundColor: "#76E3BD", width: 90, borderRadius: 10 }}
          >
            <SafeAreaView>
              <Text style={{ fontSize: 18, textAlign: "center", padding: 3 }}>
                Xin chào
              </Text>
              <Text style={{ fontSize: 11, color: "#E7E7E7", marginLeft: 10 }}>
                21:00
              </Text>
            </SafeAreaView>
          </SafeAreaView>
          <Text>Đã nhận</Text>
        </SafeAreaView>
      </ScrollView>

      <View
        style={{ backgroundColor: "#fff", padding: 11, flexDirection: "row" }}
      >
        <View style={{ width: "80%" }}>
          <TextInput
            placeholder="Tin nhắn"
            style={{ fontSize: 20 }}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "20%",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/micro.png")}
              style={{ marginTop: 5, marginRight: 20, height: 25, width: 17 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/image.png")}
              style={{ height: 35, width: 35 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 50,
    backgroundColor: "#F1FFFA",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#00AE72",
    padding: 5,
    alignItems: "center",
  },
  backButton: {
    height: 40,
    width: 40,
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
