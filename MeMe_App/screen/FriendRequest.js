import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";

const FriendRequest = ({ navigation }) => {
  const Back = () => {
    navigation.navigate("AllPeople");
  }; 
  const SendFriendRequest = () => {
    navigation.navigate("SendFriendRequest");
  };
  let friendRequest_imgs = [
    "https://i.imgur.com/tlB6Vdr.jpg",
    "https://i.imgur.com/10cfqIq.jpg?1",
    "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/03/25120742/image-meo-chup-anh-dep-nhu-sao-han-de-co-duoc-buc-hinh-nghin-like-164815966293381.jpg",
    "https://ss-images.saostar.vn/wp700/pc/1611568359519/Esi6n87VkAEVtTI.jpg",
    "https://pbs.twimg.com/media/DiaRVEyVsAA1Nyv.jpg",
    "https://kenh14cdn.com/2019/6/9/bi2-15600747395061444238740.jpg",
    "https://i.pinimg.com/originals/c1/6d/93/c16d93cdb15d2fcc084bf1a7a04529b0.jpg",
    "https://static.bongda24h.vn/medias/original/2019/11/14/larissa-saad-bong-hong-quyen-ru-cua-lucas-moura-anh-6.jpg",
  ];

  const names = [
    "Lâm Minh Hùng",
    "Nguyễn Thành Danh",
    "Trần Quỳnh Hoa",
    "Nguyễn Quốc Thanh",
    "Trần Anh Huy",
    "Hoàng Nhật Vương",
    "Lý Văn Mỹ",
    "Hà Thị Nhã An",
  ];

  const generateUserNames = () => {
    return names?.map((name) => name);
  };

  const userNames = generateUserNames();

  const renderFriendRequest = () => {
    return friendRequest_imgs?.map((img, index) => (
      <View style={styles.user} key={index}>
        <View style={styles.profile}>
          <Image source={{ uri: img }} style={styles.avatar} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {userNames[index]}
            </Text>
            <Text style={{ marginTop: 25 }}>5 phút trước</Text>
          </View>
        </View>
        <View style={styles.choose}>
          <TouchableOpacity style={styles.accept}>
            <Text style={{ color: "white" }}>Đồng ý</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancel}>
            <Text>Từ chối</Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ height: 30, width: 30, color: "#00AE72" }}
            source={{
              uri: "https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/01-512.png",
            }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, color: "#00AE72", fontWeight: "bold" }}>
          Lời mời kết bạn
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Pressable style={styles.button}>
          <Text style={{ color: "#00AE72", fontWeight: "bold", fontSize: 18 }}>
            Đã nhận
          </Text>
        </Pressable>
        <Pressable onPress={SendFriendRequest} style={styles.button2}>
          <Text style={{ color: "#00AE72", fontWeight: "bold", fontSize: 18 }}>
            Đã gửi
          </Text>
        </Pressable>
      </View>
      <ScrollView>{renderFriendRequest()}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10,
  },
  header: {
    flexDirection: "row",
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
  button2: {
    width: "50%",
    height: 40,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 360,
  },
  user: {
    flexDirection: "row",
    marginTop: 20,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  choose: {
    width: "30%",
  },
  profile: {
    flexDirection: "row",
    width: "70%",
  },
  accept: {
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
    marginTop: 5,
    backgroundColor: "#00AE72",
    borderRadius: 10,
    marginRight: 10,
  },
  cancel: {
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
    marginTop: 5,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    marginRight: 10,
  },
});

export default FriendRequest;
