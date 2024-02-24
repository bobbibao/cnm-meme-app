import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import AllPeople from "./AllPeople";
import Index from "./Index";
export default Footer = ({ navigation }) => {
  const AllPeople = () => {
    navigation.navigate("AllPeople");
  };
  const Index = () => {
    navigation.navigate("Index")
  }
  const CallList = () => {
    navigation.navigate("CallList");
  };

  let footer__imgs = [
    "https://cdn-icons-png.freepik.com/512/273/273696.png",
    "https://www.pngitem.com/pimgs/b/207-2074266_video-call-icon-blue-video-call-icon-hd.png",
    "https://cdn-icons-png.flaticon.com/512/2118/2118701.png",
  ];

  return (
    <SafeAreaView style={styles.footer}>
      <TouchableOpacity onPress={() => Index()} style={styles.touchable}>
        <View style={styles.iconContainer}>
          <Image
            source={{ uri: footer__imgs[0] }}
            style={styles.iconChat}
          ></Image>
          <Text style={{ marginTop: 5 }}>Đoạn Chat</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => CallList()} style={styles.touchable}>
        <View style={styles.iconContainer}>
          <Image
            source={{ uri: footer__imgs[1] }}
            style={styles.iconCall}
          ></Image>
          <Text style={{ marginTop: 10 }}>Cuộc gọi</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => AllPeople()} style={styles.touchable}>
        <View style={styles.iconContainer}>
          <Image
            source={{ uri: footer__imgs[2] }}
            style={styles.iconPeople}
          ></Image>
          <Text>Mọi người</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    // marginTop: 200,
    height: 66,
    flexDirection: "row",
    justifyContent: "space-around", 
    alignItems: "center",
    backgroundColor: "#E3E3E3",
  },
  touchable: {
    flex: 1, // Mỗi TouchableOpacity sẽ chiếm 1/3 không gian của footer
    justifyContent: "center",
    alignItems: "center", // Căn giữa nội dung theo chiều ngang
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconChat: {
    height: 30,
    width: 30,
  },
  iconCall: {
    height: 20,
    width: 40,
    marginTop: 5
  },
  iconPeople: {
    height: 38,
    width: 38,
  },
});
